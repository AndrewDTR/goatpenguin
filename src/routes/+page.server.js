import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Kombucha";
    const friendly = "Kombucha";
    const acceptedGuesses = ["kombucha", "kombucha tea", "tea mushroom", "tea fungus"];
    const day = "day55";
    const dayNum = 55;

    const categories = ["Alternative medicine",
        "2010s in food",
        "Carbonated drinks",
        "Fermented drinks",
        "Chinese teas",
    ]

    const blurb = [`Kombucha (also tea mushroom, tea fungus, or Manchurian mushroom when referring to the culture; Latin name Medusomyces gisevii) is a fermented, effervescent and sweetened black tea drink. Sometimes the beverage is called kombucha tea to distinguish it from the culture of bacteria and yeast. Juice, spices, fruit, or other flavorings are often added. Commercial kombucha contains small amounts of alcohol.`, `Kombucha is believed to have originated in China, where the drink is traditional. While it is named after the Japanese term for kelp tea in English, the two drinks have no relation. By the early 20th century kombucha spread to Russia, then other parts of Eastern Europe and Germany. Kombucha is now homebrewed globally, and also bottled and sold commercially. The global kombucha market was worth approximately US$1.7 billion as of 2019.`];
    const img = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Kombucha_Store_Shelves.jpg/960px-Kombucha_Store_Shelves.jpg";
    
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
