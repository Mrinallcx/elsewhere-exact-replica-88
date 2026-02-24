// TypeScript JSX support
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://totofinance.co/#org",
        name: "Toto Finance",
        legalName: "Toto Finance AG",
        description:
          "Toto Finance is leading in tokenized commodities, transforming global trade and real-world assets through Total Tokenization",
        url: "https://totofinance.co",
        logo: {
          "@type": "ImageObject",
          url: "https://totofinance.co/totofinance.svg",
          width: 512,
          height: 512,
        },
        image: {
          "@type": "ImageObject",
          url: "https://totofinance.co/totofinance.svg",
          width: 512,
          height: 512,
        },
        email: "hello@totofinance.co",
        telephone: "+423 236 22 00",
        foundingDate: "2023",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Herrengasse 6",
          addressLocality: "Vaduz",
          postalCode: "9490",
          addressRegion: "Vaduz",
          addressCountry: {
            "@type": "Country",
            name: "LI",
          },
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "hello@totofinance.co",
          availableLanguage: ["English"],
        },
        sameAs: [
          "https://x.com/totofinance",
          "https://www.linkedin.com/company/totofinance/",
          "https://www.youtube.com/@Toto-Finance",
          "https://t.me/totofinance",
        ],
        parentOrganization: {
          "@type": "Organization",
          name: "LCX AG",
        },
        areaServed: "Worldwide",
        identifier: {
          "@type": "PropertyValue",
          propertyID: "LEI",
          value: "5299005UXAQFO3US5C38",
        },
        knowsAbout: [
          "Asset Tokenization",
          "Commodity Tokenization",
          "Real-World Assets",
          "Blockchain Technology",
          "Digital Ownership",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://totofinance.co/#website",
        url: "https://totofinance.co",
        name: "Toto Finance",
        alternateName: ["Toto Finance AG", "TotoFinance", "TOTO Finance"],
        description: "Toto Finance is the global infrastructure for tokenized commodities",
        publisher: {
          "@id": "https://totofinance.co/#org",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://totofinance.co/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "SiteNavigationElement",
        "@id": "https://totofinance.co/#main-navigation",
        name: "Main Navigation",
        hasPart: [
          {
            "@type": "SiteNavigationElement",
            name: "Products",
            url: "https://totofinance.co/products",
            description: "Asset-backed tokenized commodities including gold, silver, diamonds, and energy assets",
          },
          {
            "@type": "SiteNavigationElement",
            name: "Toto Token",
            url: "https://totofinance.co/toto-token",
            description: "The $TOTO Token - universal utility powering asset-backed tokenization",
          },
          {
            "@type": "SiteNavigationElement",
            name: "Ecosystem",
            url: "https://totofinance.co/ecosystem",
            description: "Blockchain partners, validators, and infrastructure integrations",
          },
          {
            "@type": "SiteNavigationElement",
            name: "Vision 2030",
            url: "https://totofinance.co/vision-2030",
            description: "The future of tokenized commodities and digital infrastructure",
          },
          {
            "@type": "SiteNavigationElement",
            name: "Careers",
            url: "https://totofinance.co/careers",
            description: "Join Toto Finance and build the infrastructure for tokenized commodities",
          },
          {
            "@type": "SiteNavigationElement",
            name: "FAQ",
            url: "https://totofinance.co/faq",
            description: "Frequently asked questions about Toto Finance and tokenized commodities",
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": "https://totofinance.co/#sitelinks",
        name: "Toto Finance Main Pages",
        description: "Key pages and sections of Toto Finance",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Products",
            url: "https://totofinance.co/products",
            description: "Asset-backed tokenized commodities platform",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Toto Token",
            url: "https://totofinance.co/toto-token",
            description: "Utility token for tokenized commodities",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Ecosystem",
            url: "https://totofinance.co/ecosystem",
            description: "Partners and integrations",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Vision 2030",
            url: "https://totofinance.co/vision-2030",
            description: "Future of digital commodities",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Careers",
            url: "https://totofinance.co/careers",
            description: "Join our team",
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "FAQ",
            url: "https://totofinance.co/faq",
            description: "Frequently asked questions",
          },
        ],
      },
      {
        "@type": "WebApplication",
        "@id": "https://totofinance.co/#webapp",
        name: "Toto Finance",
        url: "https://totofinance.co",
        description:
          "Asset-backed tokenization platform for commodities. Trade tokenized gold, silver, diamonds, and energy assets with institutional-grade custody and compliance.",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web",
        browserRequirements: "Requires JavaScript.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "Access to tokenized commodity marketplace and information",
        },
        featureList: [
          "Tokenized gold, silver, platinum, diamonds, and rare earths",
          "1:1 asset-backed tokens with proof-of-reserves",
          "Multi-chain: Cardano, Solana, XRP Ledger, Polygon",
          "MiCA and TVTG compliant infrastructure",
          "Institutional custody and LCX Physical Validator",
        ],
        creator: {
          "@id": "https://totofinance.co/#org",
        },
      },
      {
        "@type": "FinancialService",
        "@id": "https://totofinance.co/#financialservice",
        name: "Toto Finance — Asset Tokenization Service",
        description:
          "Institutional-grade tokenization of commodities, precious metals, energy resources and real-world assets with compliant digital ownership.",
        url: "https://totofinance.co",
        image: "https://totofinance.co/totofinance.svg",
        logo: "https://totofinance.co/totofinance.svg",
        telephone: "+423 236 22 00",
        email: "hello@totofinance.co",
        priceRange: "$$$",
        currenciesAccepted: "USD, EUR, CHF",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Herrengasse 6",
          addressLocality: "Vaduz",
          postalCode: "9490",
          addressRegion: "Vaduz",
          addressCountry: {
            "@type": "Country",
            name: "LI",
          },
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "47.1410",
          longitude: "9.5215",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
        areaServed: {
          "@type": "Place",
          name: "Worldwide",
        },
        sameAs: [
          "https://x.com/totofinance",
          "https://www.linkedin.com/company/totofinance/",
          "https://www.youtube.com/@Toto-Finance",
          "https://t.me/totofinance",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 0),
      }}
    />
  );
}
