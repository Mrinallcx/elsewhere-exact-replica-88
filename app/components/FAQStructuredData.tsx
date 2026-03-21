interface FAQ {
  question: string;
  answer: string;
  id?: number;
  category?: string;
  subcategory?: string;
}

interface FAQStructuredDataProps {
  faqs: FAQ[];
}

/** Flatten [label](url) in FAQ answers for schema.org (plain text + URL). */
function answerForStructuredData(answer: string): string {
  return answer.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1 ($2)');
}

export function FAQStructuredData({ faqs }: FAQStructuredDataProps) {
  // Validate and filter FAQs to ensure mainEntity is never empty
  // Schema.org requires at least one Question in mainEntity
  const validFAQs = (faqs || []).filter(
    (faq) =>
      faq && faq.question?.trim() && faq.answer?.trim()
  );

  // If no valid FAQs, don't render structured data (prevents invalid schema)
  if (validFAQs.length === 0) {
    return null;
  }

  // Create FAQPage schema with mainEntity as required by Schema.org
  const faqPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: validFAQs.map((faq) => ({
      '@type': 'Question',
      name: faq.question.trim(),
      acceptedAnswer: {
        '@type': 'Answer',
        text: answerForStructuredData(faq.answer).trim(),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqPageSchema),
      }}
    />
  );
}

