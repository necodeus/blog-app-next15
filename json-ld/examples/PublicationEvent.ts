import { PublicationEvent, WithContext } from "schema-dts";

// A PublicationEvent corresponds indifferently to the event of publication for a CreativeWork of any type:
// - a broadcast event,
// - an on-demand event,
// - a book/journal publication
// via a variety of delivery media
export const createJsonLd = (data: any): WithContext<PublicationEvent> => {
    return {
        "@context": "https://schema.org",
        "@type": "PublicationEvent",
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
