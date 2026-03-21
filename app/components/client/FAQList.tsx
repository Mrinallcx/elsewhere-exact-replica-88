"use client";

import type { ReactNode } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../src/components/ui/accordion';

interface FAQ {
  id: number;
  category: string;
  question: string;
  answer: string;
  subcategory?: string;
}

interface FAQListProps {
  faqs: FAQ[];
}

const linkClass = 'text-blue-600 hover:text-blue-800 underline font-medium';

function normalizeHref(raw: string): string {
  const t = raw.trim();
  if (/^mailto:/i.test(t)) return t;
  if (/^https?:\/\//i.test(t)) return t;
  if (t.includes('@') && !/\s/.test(t)) return `mailto:${t}`;
  return `https://${t}`;
}

/** Auto-link bare URLs/emails only in segments without markdown links. */
function renderPlainSegment(text: string, keyPrefix: string): ReactNode[] {
  const linkRegex =
    /(https?:\/\/[^\s]+|www\.[^\s]+|\b(?:[a-z0-9-]+\.)+[a-z]{2,}(?:\/[\w#?&=._\-/%+]*)?|[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/gi;
  const parts = text.split(linkRegex);
  return parts
    .map((part, index) => {
      if (!part) return null;

      const isEmail =
        /@/.test(part) && /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/.test(part);
      const hasProtocol = /^https?:\/\//i.test(part);
      const looksLikeDomain = /^(www\.|[a-z0-9-]+\.[a-z]{2,})/i.test(part);

      if (isEmail) {
        return (
          <a
            key={`${keyPrefix}-e-${index}`}
            href={`mailto:${part}`}
            className={linkClass}
          >
            {part}
          </a>
        );
      }

      if (hasProtocol || looksLikeDomain) {
        const href = hasProtocol ? part : `https://${part}`;
        return (
          <a
            key={`${keyPrefix}-u-${index}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            {part}
          </a>
        );
      }

      return <span key={`${keyPrefix}-t-${index}`}>{part}</span>;
    })
    .filter(Boolean) as ReactNode[];
}

function renderAnswer(answer: string): ReactNode {
  const mdLink = /\[([^\]]+)\]\(([^)]+)\)/g;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let prefix = 0;

  while ((match = mdLink.exec(answer)) !== null) {
    const before = answer.slice(lastIndex, match.index);
    if (before) {
      nodes.push(...renderPlainSegment(before, `p${prefix++}`));
    }

    const label = match[1];
    const href = normalizeHref(match[2]);
    const isMail = /^mailto:/i.test(href);

    nodes.push(
      <a
        key={`md-${match.index}`}
        href={href}
        {...(!isMail ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className={linkClass}
      >
        {label}
      </a>
    );

    lastIndex = match.index + match[0].length;
  }

  const tail = answer.slice(lastIndex);
  if (tail) {
    nodes.push(...renderPlainSegment(tail, `p${prefix}`));
  }

  return <>{nodes}</>;
}

export function FAQList({ faqs }: FAQListProps) {
  if (faqs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">No questions found in this category.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq) => (
          <AccordionItem
            key={faq.id}
            value={`item-${faq.id}`}
            className="bg-white border border-gray-200 rounded-xl px-6 py-2 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <AccordionTrigger className="text-left text-lg font-medium text-gray-900 hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 leading-relaxed pt-2 whitespace-pre-line">
              {renderAnswer(faq.answer)}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
