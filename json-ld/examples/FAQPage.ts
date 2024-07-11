import { FAQPage, WithContext } from "schema-dts";

// A FAQPage is a WebPage presenting one or more "Frequently Asked Questions"
export const createJsonLd = (data: any): WithContext<FAQPage> => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Przykładowe pytanie",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Przykładowa odpowidź na pytanie",
        },
      },
    ],
  };
};
