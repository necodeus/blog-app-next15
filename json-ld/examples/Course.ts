import { Course, WithContext } from "schema-dts";

// A description of an educational course which may be offered as distinct instances which take place at different times or take place at different locations, or be offered through different media or modes of study.
// An educational course is a sequence of one or more educational events and/or creative works which aims to build knowledge, competence or ability of learners.
export const createJsonLd = (data: any): WithContext<Course> => {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Learn the Basics of SEO and JSON-LD 101",
    description: "Introductory SEO course for Everyone.",
    provider: {
      "@type": "Organization",
      name: "Elite Strategies, LLC",
      sameAs: "http://www.example.com",
    },
  };
};
