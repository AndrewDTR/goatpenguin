import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Leet";
    const friendly = "Leet";
    const acceptedGuesses = ["leet", "1337", "l33t", "leetspeak", "leet speak", "l33t speak"];
    const day = "day38";
    const dayNum = 38;

    const categories = ["Internet memes",
        "1990s slang",
        "Latin-script representations",
        "Encodings",
        "Nerd culture",
    ]

    const blurb = `Leet (or "1337"), also known as eleet, leetspeak, or simply hacker speech, is a system of modified spellings used primarily on the Internet. It often uses character replacements in ways that play on the similarity of their glyphs via reflection or other resemblance. Additionally, it modifies certain words on the basis of a system of suffixes and alternative meanings. There are many dialects or linguistic varieties in different online communities.`;
    const img = "https://upload.wikimedia.org/wikipedia/commons/4/40/Laugh-Out-Loud_Cats_736.jpg";

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
