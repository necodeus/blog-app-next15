import { MusicEvent, WithContext } from "schema-dts";

// Event type: Music event.
export const createJsonLd = (data: any): WithContext<MusicEvent> => {
    return {
        "@context": "https://schema.org",
        "@type": "MusicEvent",
        name: "Shostakovich Leningrad",
        startDate: "2014-05-23T20:00",
        location: {
            "@type": "MusicVenue",
            name: "Chicago Symphony Center",
            address: "220 S. Michigan Ave, Chicago, Illinois, USA"
        },
        offers: {
            "@type": "Offer",
            "url": "/examples/ticket/12341234",
            category: "primary",
            price: "40",
            priceCurrency: "USD",
            availability: "InStock",
        },
        performer: [
            {
                "@type": "MusicGroup",
                name: "Chicago Symphony Orchestra",
                sameAs: "http://cso.org/",
            },
            {
                "@type": "Person",
                image: "/examples/jvanzweden_s.jpg",
                name: "Jaap van Zweden",
                sameAs: "http://www.jaapvanzweden.com/",
            },
        ],
        workPerformed: [
            {
                "@type": "CreativeWork",
                name: "Britten Four Sea Interludes and Passacaglia from Peter Grimes",
                sameAs: "http://en.wikipedia.org/wiki/Peter_Grimes",
            },
            {
                "@type": "CreativeWork",
                name: "Shostakovich Symphony No. 7 (Leningrad)",
                sameAs: "http://en.wikipedia.org/wiki/Symphony_No._7_(Shostakovich)",
            },
        ],
    };
};



