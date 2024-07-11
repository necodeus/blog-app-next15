import { BlogPosting, WithContext } from 'schema-dts'

// A blog post.
export const createJsonLd = (data: any): WithContext<BlogPosting> => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://blog.necodeo.com/tutaj-url-do-wpisu",
    },
    publisher: {
      "@type": "Organization",
      name: "Necodeo",
      logo: {
        "@type": "ImageObject",
        url: "https://images.necodeo.com/b91f48e1-ae2c-4844-932c-e22342e46954",
      },
    },
		isFamilyFriendly: true,
		copyrightYear: 2019,
		copyrightHolder: "",
		accountablePerson: {
			"@type": "Person",
			"name": "Patrick Coombe",
			"url": "https://patrickcoombe.com"
		},
		contentLocation: {
			"@type": "Place",
			"name": "Delray Beach, FL",
		},
    author: {
      "@type": "Person",
      name: "necodeus",
      url: "https://blog.necodeo.com/autorzy/necodeus",
    },
		creator: {
			"@type": "Person",
			"name": "Patrick Coombe",
			"url": "https://patrickcoombe.com"
		},
    image: [
      "https://images.necodeo.com/1b1f48e1-ae2c-4844-932c-e22342e46954",
    ],
    headline: "Your Blog Post Title",
    description: "A brief description of your blog post that summarizes its content.",
		articleSection: "Uncategorized posts",
    articleBody: "The full content of your blog post goes here.",
    datePublished: "2024-07-09T08:00:00+00:00",
    dateModified: "2024-07-09T08:00:00+00:00",
    // Genre of the creative work, broadcast channel or group.
		genre: [
      "SEO",
      "JSON-LD",
    ],
    // Keywords or tags used to describe some item.
    // Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property.
    keywords: [
      "keyword1",
      "keyword2",
      "keyword3",
    ],
    // A person or organization that supports a thing through a pledge, promise, or financial contribution. E.g. a sponsor of a Medical Study or a corporate sponsor of an event.
		sponsor: {
			"@type": "Organization",
			"name": "Acme Widgets",
			"url": "https://example.com",
			"logo": {
				"@type": "ImageObject",
				"url": "http://www.example.com/logo.png",
			},
		},
    // The number of words in the text of the Article.
    wordCount: "1234",
    // The language of the content or performance or used in an action.
    // Please use one of the language codes from the IETF BCP 47 standard.
    // See also availableLanguage.
    inLanguage: "pl-PL",
  }
}
