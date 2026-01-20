import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Michelin_Guide";
    const friendly = "Michelin Guide";
    const acceptedGuesses = ["michelin guide", "michelin", "michelin star", "michelin stars"];
    const day = "day21";
    const dayNum = 21;

    const categories = ["1900 establishments in France",
        "Hotel guide books",
        "Consumer guides",
        "Restaurant guides",
        "Food and drink awards",
    ]

    const blurb = `The Michelin Guides are a series of guide books that have been published by the French tire company Michelin since 1900. The Guide awards up to three Michelin stars for excellence to a select few restaurants in certain geographic areas. Michelin also publishes the Green Guides, a series of general guides to cities, regions, and countries.`;
    const img = "https://upload.wikimedia.org/wikipedia/commons/8/8a/Michelin_Guide_logo.svg";

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
