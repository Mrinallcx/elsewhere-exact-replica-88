"use client";

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

export function FAQList({ faqs }: FAQListProps) {
  const renderAnswer = (answer: string) => {
    // Match:
    // - Full URLs with protocol
    // - Bare domains with or without www
    // - Email addresses
    const linkRegex = /(https?:\/\/[^\s]+|www\.[^\s]+|\b(?:[a-z0-9-]+\.)+[a-z]{2,}(?:\/[\w#?&=._\-/%+]*)?|[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/gi;

    const parts = answer.split(linkRegex);

    return (
      <>
        {parts.map((part, index) => {
          if (!part) return null;

          const isEmail = /@/.test(part) && /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/.test(part);
          const hasProtocol = /^https?:\/\//i.test(part);
          const looksLikeDomain = /^(www\.|[a-z0-9-]+\.[a-z]{2,})/i.test(part);

          if (isEmail) {
            return (
              <a
                key={index}
                href={`mailto:${part}`}
                className="text-blue-600 hover:text-blue-800 underline"
              >
                {part}
              </a>
            );
          }

          if (hasProtocol || looksLikeDomain) {
            const href = hasProtocol ? part : `https://${part}`;
            return (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                {part}
              </a>
            );
          }

          return <span key={index}>{part}</span>;
        })}
      </>
    );
  };

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

