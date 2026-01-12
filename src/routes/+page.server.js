import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Dr_Pepper";
    const friendly = "Dr Pepper";
    const acceptedGuesses = ["dr pepper", "dr. pepper", "doctor pepper"];
    const day = "day13";
    const dayNum = 13;

    const categories = ["Products introduced in 1885",
        "Culture of Texas",
        "Carbonated drinks",
        "Drink brands originating from patent medicines",
        "Keurig brands",
    ]

    const blurb = `Dr Pepper is a carbonated soft drink created in the 1880s by American pharmacist Charles Alderton in Waco, Texas. It was first marketed nationally in the United States in 1904. The beverage is manufactured and distributed by different companies depending on the country: Keurig Dr Pepper produces it in the US, Canada, and Mexico; The Coca-Cola Company in the United Kingdom, Ireland, Japan, and South Korea; and PepsiCo in several other markets. Variants include diet version and, beginning in the 2000s, a range of additional flavors.`;
    const img = "https://upload.wikimedia.org/wikipedia/commons/c/cc/Dr_Pepper_Dose_2024.jpg";

    return {
        article,
        friendly,
        categories,
        day,
        dayNum,
        acceptedGuesses,
        blurb,
        img
    };
}