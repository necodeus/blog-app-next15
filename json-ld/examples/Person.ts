import { Person, WithContext } from "schema-dts";

// A person (alive, dead, undead, or fictional).
export const createJsonLd = (data: any): WithContext<Person> => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://dawid.smulewicz.pro/#person",
    name: "Dawid Smulewicz",
    // alternateName: "",
    nationality: "Polish",
    birthPlace: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Szubin",
        addressRegion: "Kuyavian-Pomeranian",
        addressCountry: "Poland",
      },
    },
    affiliation: [
      {
        "@type": "Organization",
        name: "Necodeo",
        sameAs: [
          "https://www.linkedin.com/company/79805930",
        ],
      },
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Zespół Szkół im. Władysława Łokietka",
        sameAs: "http://www.lokietek-ino.pl/",
      },
    ],
    gender: "Male",
    description: "Software Developer",
    // disambiguatingDescription: "",
    jobTitle: "Software Developer",
    worksFor: [
      {
        "@type": "Organization",
        name: "Wirtualna Polska Media S. A.",
        sameAs: [
          "https://www.facebook.com/WirtualnaPolska",
          "https://www.linkedin.com/company/wirtualna-polska/",
          "https://www.instagram.com/wirtualnapolska/",
          "https://github.com/grupawp",
        ],
      },
    ],
    url: "https://dawid.smulewicz.pro/",
    image: "https://avatars.githubusercontent.com/u/8481324?v=4&size=300",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barcin",
      addressRegion: "Kuyavian-Pomeranian",
      addressCountry: "Poland",
    },
    sameAs: [
      "https://www.linkedin.com/in/dawid-smulewicz",
      "https://www.facebook.com/dawid.smulewicz",
      "https://www.instagram.com/dawid.smulewicz/",
      "https://github.com/necodeus",
    ],
  };
};
