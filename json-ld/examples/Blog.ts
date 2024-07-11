import { Blog, WithContext } from 'schema-dts'

// A blog, sometimes known as a "weblog".
// Note that the individual posts (BlogPostings) in a Blog are often colloquially referred to by the same term.
export const createJsonLd = (data: any): WithContext<Blog> => {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://blog.necodeo.com/",
    mainEntityOfPage: "https://blog.necodeo.com/",
    name: "Necodeo Blog",
    description:
      "A blog about software development, programming, and technology.",
    publisher: {
      "@type": "Organization",
      "@id": "https://blog.necodeo.com/",
      name: "Necodeo",
      logo: {
        "@type": "ImageObject",
        "@id":
          "https://images.necodeo.com/b91f48e1-ae2c-4844-932c-e22342e46954/600x600",
        url: "https://images.necodeo.com/b91f48e1-ae2c-4844-932c-e22342e46954/600x600",
        width: "600",
        height: "600",
      },
    },
    blogPost: [
      {
        "@type": "BlogPosting",
        "@id":
          "https://blog.necodeo.com/to-jest-tylko-testowy-wpis/#BlogPosting",
        mainEntityOfPage:
          "https://blog.necodeo.com/to-jest-tylko-testowy-wpis/",
        headline: "Hello, World!",
        name: "Hello, World!",
        description: "This is a test blog post.",
        datePublished: "2024-07-09",
        dateModified: "2024-07-09",
        author: {
          "@type": "Person",
          "@id": "https://blog.necodeo.com/autorzy/necodeus/#Person",
          name: "Richard Wallis",
        },
        image: {
          "@type": "ImageObject",
          "@id":
            "https://images.necodeo.com/b91f48e1-ae2c-4844-932c-e22342e46954/600x600",
          url: "https://images.necodeo.com/b91f48e1-ae2c-4844-932c-e22342e46954/600x600",
          height: "600",
          width: "600",
        },
        url: "https://blog.necodeo.com/to-tylko-przyklad/",
        keywords: ["Bibframe2Schema.org", "Libraries", "Library of Congress"],
      },
      {
        "@type": "BlogPosting",
        "@id":
          "https://blog.necodeo.com/to-jest-tylko-testowy-wpis/#BlogPosting",
        mainEntityOfPage:
          "https://blog.necodeo.com/to-jest-tylko-testowy-wpis/",
        headline: "Hello, World!",
        name: "Hello, World!",
        description: "This is a test blog post.",
        datePublished: "2024-07-09",
        dateModified: "2024-07-09",
        author: {
          "@type": "Person",
          "@id": "https://blog.necodeo.com/autorzy/necodeus/#Person",
          name: "Richard Wallis",
        },
        image: {
          "@type": "ImageObject",
          "@id":
            "https://images.necodeo.com/b91f48e1-ae2c-4844-932c-e22342e46954/600x600",
          url: "https://images.necodeo.com/b91f48e1-ae2c-4844-932c-e22342e46954/600x600",
          height: "600",
          width: "600",
        },
        url: "https://blog.necodeo.com/to-tylko-przyklad/",
        keywords: ["Bibframe2Schema.org", "Libraries", "Library of Congress"],
      },
    ],
  };
};
