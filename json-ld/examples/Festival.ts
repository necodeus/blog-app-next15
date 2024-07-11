import { Festival, WithContext } from "schema-dts";

// Event type: Festival.
export const createJsonLd = (data: any): WithContext<Festival> => {
    return {
        "@context": "https://schema.org",
        "@type": "Festival",
        name: "Taste of the Sea",
        startDate: "2023-07-07T19:30",
        endDate: "2023-07-07T23:00",
        location: {
            "@type": "Place",
            name: "The Grand Hotel",
            address: {
                "@type": "PostalAddress",
                streetAddress: "123 Ocean View St",
                addressLocality: "San Francisco",
                postalCode: "94105",
                addressRegion: "CA",
                addressCountry: "US",
            },
        },
        offers: {
            "@type": "Offer",
            price: "125.00",
            priceCurrency: "USD",
            availability: "InStock",
            url: "https://www.example.com/event_offer/12345_201803180430",
        },
    };
};
