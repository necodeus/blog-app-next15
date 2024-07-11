import { NewsArticle, WithContext } from "schema-dts";

// A NewsArticle is an article whose content reports news, or provides background context and supporting materials for understanding the news.
// A more detailed overview of /docs/news.html schema.org News markup is also available.
export const createJsonLd = (data: any): WithContext<NewsArticle> => {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Title of a News Article",
    image: [
      "https://example.com/photos/1x1/photo.jpg",
      "https://example.com/photos/4x3/photo.jpg",
      "https://example.com/photos/16x9/photo.jpg",
    ],
    datePublished: "2015-02-05T08:00:00+08:00",
    dateModified: "2015-02-05T09:20:00+08:00",
    author: [
      {
        "@type": "Person",
        name: "Jane Doe",
        url: "https://example.com/profile/janedoe123",
      },
      {
        "@type": "Person",
        name: "John Doe",
        url: "https://example.com/profile/johndoe123",
      },
    ],
  };
};
