import { ImageObject, WithContext } from "schema-dts";

// An image file.
export const createJsonLd = (data: any): WithContext<ImageObject> => {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: "https://example.com/photos/1x1/black-labrador-puppy.jpg",
    license: "https://example.com/license",
    acquireLicensePage: "https://example.com/how-to-use-my-images",
    creditText: "Labrador PhotoLab",
    creator: {
      "@type": "Person",
      name: "Brixton Brownstone",
    },
    copyrightNotice: "Clara Kent",
  };
};
