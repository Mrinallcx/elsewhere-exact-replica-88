"use client";

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface SilverFAQProps {
  faqs: FAQItem[];
}

export function SilverFAQ({ faqs }: SilverFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className="border border-gray-200 rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-sm"
        >
          <button
            className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            <span className="text-base md:text-lg font-medium text-gray-900 pr-4">
              {faq.question}
            </span>
            <svg
              className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                openIndex === idx ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`transition-all duration-300 ease-in-out ${
              openIndex === idx
                ? 'max-h-[1000px] opacity-100'
                : 'max-h-0 opacity-0'
            } overflow-hidden`}
          >
            <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm md:text-base">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
