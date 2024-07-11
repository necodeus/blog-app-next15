import { WebPage, WithContext } from "schema-dts";

// A web page.
// Every web page is implicitly assumed to be declared to be of type WebPage, so the various properties about that webpage, such as breadcrumb may be used.
// We recommend explicit declaration if these properties are specified, but if they are found outside of an itemscope, they will be assumed to be about the page.
export const createJsonLd = (data: any): WithContext<WebPage> => {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "About",
    description: "Blog about software development, programming, and technology.",
    publisher: {
      "@type": "Organization",
      name: "Necodeo",
    },
    // speakable: {
    //   "@type": "SpeakableSpecification",
    //   xpath: [
    //     "/html/head/title",
    //     "/html/head/meta[@name='description']/@content",
    //   ],
    // },
  };
};
