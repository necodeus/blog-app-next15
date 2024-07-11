import { WebSite, WithContext } from "schema-dts";

// A WebSite is a set of related web pages and other items typically served from a single web domain and accessible via URLs.
export const createJsonLd = (data: any): WithContext<WebSite> => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://jsonld.com/#website",
    url: "https://blog.necodeo.com/",
    name: "Blog Necodeo",
    description: "A blog about software development, programming, and technology.",
    potentialAction: [
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://blog.necodeo.com/?s={search_term_string}",
        },
        query: "required name=search_term_string"
      },
    ],
    inLanguage: "pl-PL",
  };
};
