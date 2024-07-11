import { QAPage, WithContext } from "schema-dts";

// A QAPage is a WebPage focussed on a specific Question and its Answer(s), e.g. in a question answering site or documenting Frequently Asked Questions (FAQs).
export const createJsonLd = (data: any): WithContext<QAPage> => {
  return {
    "@context": "https://schema.org",
    "@type": "QAPage",
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
