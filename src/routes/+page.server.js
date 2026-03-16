import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Streisand_effect";
    const friendly = "Streisand effect";
    const acceptedGuesses = ["streisand effect", "streishand effect", "strisehand effect", "striseand effect"];
    const day = "day62";
    const dayNum = 62;

    const categories = ["2005 neologisms",
        "Malibu, California",
        "Eponyms",
        "Privacy controversies",
        "Internet censorship in the United States",
    ]

    const blurb = [`The Streisand effect describes a situation where an attempt to hide, remove, or censor information results in the unintended consequence of the effort instead increasing public awareness of the information.`, `The term was coined in 2005 by Mike Masnick of Techdirt after Barbra Streisand attempted to suppress the publication of a photograph by Kenneth Adelman showing her clifftop residence in Malibu, taken to document coastal erosion in California.`];
    const img = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Streisand_Estate.jpg/1280px-Streisand_Estate.jpg";

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
