import { LocalBusiness, WithContext } from "schema-dts";

// A particular physical business or branch of an organization
// - a restaurant,
// - a particular branch of a restaurant chain
// - a branch of a bank,
// - a medical practice,
// - a club,
// - a bowling alley
// - ...
export const createJsonLd = (data: any): WithContext<LocalBusiness> => {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    image: [
      "https://example.com/photos/1x1/photo.jpg",
      "https://example.com/photos/4x3/photo.jpg",
      "https://example.com/photos/16x9/photo.jpg",
    ],
    "@id": "http://davessteakhouse.example.com",
    name: "Kącik Zbójnicki",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. 1 Maja 43",
      addressLocality: "Wisła",
      addressRegion: "Kuyavian-Pomeranian",
      postalCode: "43-460",
      addressCountry: "PL",
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Dawid Smulewicz",
      },
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.6558669,
      longitude: 18.8585351,
    },
    url: "https://www.kacikzbojnicki.pl/",
    telephone: "+48 531 231 304",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "11:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "11:00",
        closes: "23:00",
      },
    ],
    menu: "https://www.kacikzbojnicki.pl/",
    acceptsReservations: "Yes",
  };
};
