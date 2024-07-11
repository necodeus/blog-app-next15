import { ComputerLanguage, WithContext } from "schema-dts";

// This type covers computer programming languages such as Scheme and Lisp, as well as other language-like computer representations. Natural languages are best represented with the Language type
export const createJsonLd = (data: any): WithContext<ComputerLanguage> => {
    return {
        "@context": "https://schema.org",
        "@type": "ComputerLanguage",
        name: "Taste of the Sea",
    };
};
