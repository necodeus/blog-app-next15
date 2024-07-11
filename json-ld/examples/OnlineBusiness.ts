import { OnlineBusiness, WithContext } from "schema-dts";

// A particular online business, either standalone or the online part of a broader organization.
// Examples include an e-commerce site, an online travel booking site, an online learning site, an online logistics and shipping provider, an online (virtual) doctor, etc.
export const createJsonLd = (data: any): WithContext<OnlineBusiness> => {
    return {
        "@context": "https://schema.org",
        "@type": "OnlineBusiness",
        name: "Necodeo",
        address: {
            "@type": "PostalAddress",
            addressCountry: "PL",
            addressRegion: "Kuyavian-Pomeranian",
            postalCode: "88-190",
            addressLocality: "Barcin",
            streetAddress: "ul. Wojska Polskiego 3/35",
        },
        image: "https://images.necodeo.com/b2a4e7e0-0b3b-4b3b-8b3b-0b3b4b3b8b3b",
        email: "dawid@necodeo.com",
        telephone: "+48696281118",
        // faxNumber: "+48696281118",
        url: "https://google.com",
        // hasOfferCatalog: {
        //     "@type": "OfferCatalog",
        //     name: "asd",
        //     itemListElement: [
        //         {
        //             "@type": "Offer",
        //             name: "asd",
        //             price: "123",
        //             priceCurrency: "USD",
        //             url: "https://google.com"
        //         }
        //     ]
        // },
    };
};
