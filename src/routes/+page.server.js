import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Silly_Bandz";
    const friendly = "Silly Bandz";
    const acceptedGuesses = ["silly bandz", "silly bands"];
    const day = "day32";
    const dayNum = 32;

    const categories = ["Products introduced in 2002",
        "Toy collecting",
        "2010s fashion",
        "Silicone toys",
        "Bracelets",
    ]

    const blurb = `Silly Bandz are rubber bands made of silicone rubber formed into shapes including animals, objects, numbers, and letters. They are normally worn as bracelets. Silly Bandz retail in packages with select themes, such as princesses or animals, and fashion accessories. Similarly shaped silicone bands are also available under other brand names from a variety of companies. Silly Bandz were especially popular in the early 2010s.`;
    const img = "https://upload.wikimedia.org/wikipedia/commons/9/9a/Shaped_Rubber_Bands.JPG";

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
