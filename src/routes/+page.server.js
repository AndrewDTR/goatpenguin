import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "The_Great_Gatsby";
    const friendly = "The Great Gatsby";
    const acceptedGuesses = ["the great gatsby", "great gatsby", "gatsby"];
    const day = "day8";
    const dayNum = 8;

    const categories = ["1925 American novels",
        "Novels set in New York City",
        "American novels adapted into films",
        "Novels set in the Roaring Twenties",
        "Novels by F. Scott Fitzgerald",
    ]

    const blurb = "The Great Gatsby is a 1925 tragedy novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with Jay Gatsby, a mysterious millionaire obsessed with reuniting with his former lover, Daisy Buchanan.";
    const img = "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg";

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