import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Comic_Sans";
    const friendly = "Comic Sans";
    const acceptedGuesses = ["comic sans", "comic sans ms"];
    const day = "day23";
    const dayNum = 23;

    const categories = ["Internet memes introduced in the 1990s",
        "Management of dyslexia",
        "Typefaces designed by Vincent Connare",
        "Cyrillic typefaces",
        "Microsoft typefaces",
    ]

    const blurb = `Comic Sans MS is a sans-serif typeface created and designed by Vincent Connare and released by Microsoft Corporation in 1994. Designed as a non-connecting script, the typeface draws inspiration from comic book lettering, to emulate the informal and cartoonish tone of speech bubbles. It was originally developed for use in Microsoft's software, and since then has become widely recognized for its use in casual contexts such as children's books, personal documentation and in educational resources.`;
    const img = "https://upload.wikimedia.org/wikipedia/commons/d/d4/ComicSansSpec3.svg";

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
