import { BreadcrumbList, WithContext } from "schema-dts";

// A BreadcrumbList is an ItemList consisting of a chain of linked Web pages, typically described using at least their URL and their name, and typically ending with the current page.
export const createJsonLd = (data: any): WithContext<BreadcrumbList> => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://jsonld.com/article/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://jsonld.com/", // An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists').
        image: "http://example.com/images/author-leckie-ann.png",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Article",
        item: "https://jsonld.com/",
        image: "http://example.com/images/author-leckie-ann.png",
      },
    ],
  };
}
