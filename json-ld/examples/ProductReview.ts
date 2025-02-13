import { Product, WithContext } from "schema-dts";

// Any offered product or service. For example:
// - a pair of shoes
// - a concert ticket
// - the rental of a car
// - a haircut
// - an episode of a TV show streamed online
// - ...
export const createJsonLd = (data: any): WithContext<Product> => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    image: "http://www.example.com/iphone-case.jpg",
    name: "The Catcher in the Rye",
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "4",
      },
      name: "iPhone 6 Case Plus",
      author: {
        "@type": "Person",
        name: "Linus Torvalds",
      },
      datePublished: "2016-04-04",
      reviewBody:
        "I loved this case, it is strurdy and lightweight. Only issue is that it smudges.",
      publisher: {
        "@type": "Organization",
        name: "iPhone 6 Cases Inc.",
      },
    },
  };
};
