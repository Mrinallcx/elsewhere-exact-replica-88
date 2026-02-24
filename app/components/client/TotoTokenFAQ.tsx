"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../src/components/ui/accordion';

export function TotoTokenFAQ() {
  return (
    <Accordion type="single" collapsible className="space-y-0">
      <AccordionItem value="item-1" className="border-b border-gray-200 bg-white">
        <AccordionTrigger className="text-left text-gray-900 text-lg md:text-xl font-medium py-6 hover:no-underline [&>svg]:text-gray-700">
          How can I acquire $TOTO tokens?
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
          $TOTO is available through supported exchanges and ecosystem partners. Availability may vary by jurisdiction.
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="item-2" className="border-b border-gray-200 bg-white">
        <AccordionTrigger className="text-left text-gray-900 text-lg md:text-xl font-medium py-6 hover:no-underline [&>svg]:text-gray-700">
          What is the total supply of $TOTO?
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
          The total supply is capped at approximately 1 billion tokens, allocated across ecosystem incentives, development, and operational needs.
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="item-3" className="border-b border-gray-200 bg-white">
        <AccordionTrigger className="text-left text-gray-900 text-lg md:text-xl font-medium py-6 hover:no-underline [&>svg]:text-gray-700">
          What is the role of $TOTO within Toto Finance?
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
          $TOTO is a utility token used to support access, fees, incentives, and infrastructure functions across the Toto Finance platform.
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="item-4" className="border-b border-gray-200 bg-white">
        <AccordionTrigger className="text-left text-gray-900 text-lg md:text-xl font-medium py-6 hover:no-underline [&>svg]:text-gray-700">
          Can tokenized assets be traded at any time?
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
          Yes. Supported tokenized assets can be traded on a 24/7 basis, subject to platform rules and regulatory constraints.
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="item-5" className="border-b border-gray-200 bg-white">
        <AccordionTrigger className="text-left text-gray-900 text-lg md:text-xl font-medium py-6 hover:no-underline [&>svg]:text-gray-700">
          Why is TIA transitioning to $TOTO?
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
          The transition to $TOTO reflects a broader platform evolution - expanding utility, simplifying the token model, and aligning with Toto Finance's long-term infrastructure strategy.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

