import { Cemetery, WithContext } from "schema-dts";

// A graveyard.
export const createJsonLd = (data: any): WithContext<Cemetery> => {
    return {
        "@context": "https://schema.org",
        "@type": "Cemetery",
        name: "A graveyard",
        description: "",
        openingHours: "Mo 09:00-17:00 Tu 09:00-17:00 We 09:00-17:00 Th 09:00-17:00 Fr 09:00-17:00 Sa 09:00-17:00 Su 09:00-17:00",
    }
}
