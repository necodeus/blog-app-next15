import { EmailMessage, WithContext } from "schema-dts";

// An email message.
export const createJsonLd = (data: any): WithContext<EmailMessage> => {
  return {
    "@context": "https://schema.org",
    "@type": "EmailMessage",
    description: "View this Pull Request on GitHub",
    potentialAction: {
      "@type": "ViewAction",
      url: "https://github.com/perma-id/w3id.org/pull/47",
      name: "View Pull Request",
    },
  };
};
