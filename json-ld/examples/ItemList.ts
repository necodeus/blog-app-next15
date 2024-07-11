import { ItemList, WithContext } from "schema-dts";

// A list of items of any sort—for example, Top 10 Movies About Weathermen, or Top 100 Party Songs.
// Not to be confused with HTML lists, which are often used only for formatting.
export const createJsonLd = (data: any): WithContext<ItemList> => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: "1",
        item: {
          "@type": "Movie",
          url: "https://example.com/2019-best-picture-noms#a-star-is-born",
          name: "A Star Is Born",
          image: "https://example.com/photos/6x9/photo.jpg",
          dateCreated: "2018-10-05",
          director: {
            "@type": "Person",
            name: "Bradley Cooper",
          },
          review: {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
            },
            author: {
              "@type": "Person",
              name: "John D.",
            },
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "90",
            bestRating: "100",
            ratingCount: "19141",
          },
        },
      },
      {
        "@type": "ListItem",
        position: "2",
        item: {
          "@type": "Movie",
          name: "Bohemian Rhapsody",
          url: "https://example.com/2019-best-picture-noms#bohemian-rhapsody",
          image: "https://example.com/photos/6x9/photo.jpg",
          dateCreated: "2018-11-02",
          director: {
            "@type": "Person",
            name: "Bryan Singer",
          },
          review: {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "3",
            },
            author: {
              "@type": "Person",
              name: "Vin S.",
            },
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "61",
            bestRating: "100",
            ratingCount: "21985",
          },
        },
      },
      {
        "@type": "ListItem",
        position: "3",
        item: {
          "@type": "Movie",
          name: "Black Panther",
          url: "https://example.com/2019-best-picture-noms#black-panther",
          image: "https://example.com/photos/6x9/photo.jpg",
          dateCreated: "2018-02-16",
          director: {
            "@type": "Person",
            name: "Ryan Coogler",
          },
          review: {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "2",
            },
            author: {
              "@type": "Person",
              name: "Trevor R.",
            },
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "96",
            bestRating: "100",
            ratingCount: "88211",
          },
        },
      },
    ],
  };
};
