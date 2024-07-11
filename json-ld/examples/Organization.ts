import { Organization, WithContext } from "schema-dts";

// An organization such as a school, NGO, corporation, club, etc.
export const createJsonLd = (data: any): WithContext<Organization> => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Silk \u0026amp; Willow",
    logo: "https://www.silkandwillow.com/cdn/shop/files/sw_logo_banner_3.2021.jpg?v=1616640893\u0026width=1502",
    sameAs: [
      "https://www.instagram.com/silkandwillow/",
      "https://www.pinterest.com/silkandwillow/",
      "https://www.threads.net/@silkandwillow",
    ],
    url: "https://www.silkandwillow.com",
  };
};
