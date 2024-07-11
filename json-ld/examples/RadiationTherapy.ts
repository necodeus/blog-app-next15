import { RadiationTherapy, WithContext } from "schema-dts";

// A process of care using radiation aimed at improving a health condition.
export const createJsonLd = (data: any): WithContext<RadiationTherapy> => {
    return {
        "@context": "https://schema.org",
        "@type": "RadiationTherapy",
        name: "Taste of the Sea",
        description: "A process of care using radiation aimed at improving a health condition.",
        drug: {
            "@type": "Drug",
            name: "Radiation",
        },
        doseSchedule: {
            "@type": "DoseSchedule",
            doseUnit: "Gy",
        },
    }
}
