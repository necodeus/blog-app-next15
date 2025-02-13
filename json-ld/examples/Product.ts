import { Product, WithContext } from "schema-dts";

// Any offered product or service. For example:
// - a pair of shoes
// - a concert ticket
// - the rental of a car
// - a haircut
// - an episode of a TV show streamed online
// - ...
export const createJsonLd = (data: any): WithContext<Product> => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    offers: [
      {
        "@type": "Offer",
        name: "Default Title",
        availability: "https://schema.org/InStock",
        price: 266.0,
        priceCurrency: "USD",
        priceValidUntil: "2024-03-31",
        url: "/products/3-step-brightening-system?variant=43098868056293",
      },
    ],
    brand: "Cyspera",
    name: "3 Step Brightening System",
    description: " Scientis, an emerging leader in the science of skin discoloration, announces the launch of Cyspera® Intensive System™, a new three-product system clinically proven to improve hyperpigmentation such as persistent brown patches and dark spots. Sold at hundreds of dermatologist offices nationwide without a prescription, this novel pigment corrector is the next breakthrough in the fight against stubborn hyperpigmentation.\nThe three-product system includes:\nCyspera® Intensive™: features Cysteamine Isobionic-Amid Complex™ that delivers a powerful antioxidant activity to improve the appearance of persistent brown patches and dark spots. This product features a dual chamber technology to keep the cysteamine and AHA separate until skin application. Once applied, the immediate reaction of Isobionic-Amide with AHA leads to instant pigment lightening in the corneal layer.\nCyspera® Neutralize™: features AHA-Amino Acid Complex which neutralizes the smell of cysteamine and re-balances the epidermis before application of Cyspera® Boost™. The L-Arginine Complex stops the Isobionic-Amid Complex™ AHA reaction, and the mild-surfactant gently removes lingering residue, while helping soothe skin and promoting healthy skin barrier. The Lactobionic Acid prepares the skin for Cyspera® Boost™ by neutralizing and balancing the skin's pH.\nCyspera® Boost™: features Isobionic-Amide Complex™ which works synergistically with Cyspera® Intensive™ to even skin tone, improve complexion and deliver a natural and healthy glow. The Isobionic-Amide acts as a multiplier for the efficacy of cysteamine which inhibits multiple steps in the melanogenesis in the skin. The retinol and an anti-oxidative complex provide a visual pigment correction effect by increasing non-pigmented skin layers and shedding. Lastly, the combination of Isobionic-Amide with retinol provides an anti-inflammatory effect to the skin after application of Cyspera® Intensive™.",
    category: "Hyperpigmentation",
    url: "/products/3-step-brightening-system",
    sku: "",
    image: {
      "@type": "ImageObject",
      url: "https://shop.drherschthal.com/cdn/shop/products/cycpera_1024x.jpg?v=1657055636",
      image: "https://shop.drherschthal.com/cdn/shop/products/cycpera_1024x.jpg?v=1657055636",
      name: "3 Step Brightening System",
      width: "1024",
      height: "1024",
    },
  }
}
