import { JobPosting, WithContext } from "schema-dts";

// A listing that describes a job opening in a certain organization.
export const createJsonLd = (data: any): WithContext<JobPosting> => {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    // Publication date of an online listing.
    datePosted: "2024-07-09T00:00:00",
    // A description of the item.
    description: "You are a smart passionate techie who cares about suicide prevention. You have creative and original ideas about how to efficiently integrate a platform that can provide grassroots campaign with Wordpress. You understand everything Wordpress, html, how to create membership login and logout, and how to do custom coding.",
    // The title of the job.
    title: "Software Developer",
    // The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
    validThrough: "2024-07-09T00:00:00",
    // Type of employment (e.g. full-time, part-time, contract, temporary, seasonal, internship).
    employmentType: "FULL_TIME",
    // Organization or Person offering the job position.
    hiringOrganization: {
      "@type": "Organization",
      name: "The Love Story",
    },
    // The identifier property represents any kind of identifier for any kind of Thing, such as ISBNs, GTIN codes, UUIDs etc.
    // Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links.
    // See /docs/datamodel.html#identifierBg background notes for more details.
    identifier: {
      "@type": "PropertyValue",
      name: "The Love Story",
      value: "1569590910216317883",
    },
    // A (typically single) geographic location associated with the job position.
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3809 Riedel Ave",
        addressLocality: "Lake Worth",
        addressRegion: "FL",
        postalCode: "33461",
        addressCountry: "US",
      },
    },
    // The base salary of the job or of an employee in an EmployeeRole.
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "PLN",
      value: {
        "@type": "QuantitativeValue",
        unitText: "HOUR",
        value: 40.0,
      },
    },
    // An estimated salary for a job posting or occupation, based on a variety of variables including, but not limited to industry, job title, and location.
    // Estimated salaries are often computed by outside organizations rather than the hiring organization, who may not have committed to the estimated value.
    estimatedSalary: {
      "@type": "MonetaryAmount",
      currency: "PLN",
      value: {
        "@type": "QuantitativeValue",
        unitText: "MONTH",
        minValue: undefined,
        maxValue: undefined,
      },
    },
  };
};
