import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "The_Starry_Night";
    const friendly = "The Starry Night";
    const acceptedGuesses = ["the starry night", "starry night"];
    const day = "day28";
    const dayNum = 28;

    const categories = ["1889 paintings",
        "Paintings in the Museum of Modern Art (New York City)",
        "Paintings of Venus (planet)",
        "Night in culture",
        "Paintings by Vincent van Gogh",
    ]

    const blurb = `The Starry Night, often called simply Starry Night, is an oil-on-canvas painting by the Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an imaginary village. It has been in the permanent collection of the Museum of Modern Art in New York City since 1941, acquired through the Lillie P. Bliss Bequest. Described as a "touchstone of modern art", The Starry Night has been regarded as one of the most recognizable paintings in the Western canon.`;
    const img = "https://upload.wikimedia.org/wikipedia/commons/d/de/Vincent_van_Gogh_Starry_Night.jpg";

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
