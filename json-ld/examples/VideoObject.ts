import { VideoObject, WithContext } from "schema-dts";

// A video file.
export const createJsonLd = (data: any): WithContext<VideoObject> => {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": "https://blog.necodeo.com/video",
    name: "Learn JSON-LD",
    datePublished: "2015-10-02",
    description: "In this video, we'll teach you how to use json ld and get 6 pack abs.",
    thumbnail: {
      "@type": "ImageObject",
      contentUrl: "http://placehold.it/350x150",
      url: "http://placehold.it/350x150",
    },
    thumbnailUrl: "http://placehold.it/350x150",
    duration: "T1M33S",
    uploadDate: "2024-07-09",
    author: {
      "@type": "Person",
      name: "Dawid Smulewicz",
    },
  };
};
