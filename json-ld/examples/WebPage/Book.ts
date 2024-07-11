import { WebPage, WithContext } from "schema-dts";

// A blog, sometimes known as a "weblog".
// Note that the individual posts (BlogPostings) in a Blog are often colloquially referred to by the same term.
export const createJsonLd = (data: any): WithContext<WebPage> => {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    breadcrumb: "Books > Marketing > JSON",
    mainEntity: {
      "@type": "Book",
      author: "http://www.example.com/author.html",
      bookFormat: "EBook",
      datePublished: "2015-05-01",
      image: "coverImage.jpg",
      inLanguage: "English",
      isbn: "00000000",
      name: "The Title of Book",
      numberOfPages: "1234",
      offers: {
        "@type": "Offer",
        availability: "InStock",
        price: "9.99",
        priceCurrency: "USD",
      },
      publisher: "O'Json Publishing",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4",
        reviewCount: "12",
      },
    },
  };
};
