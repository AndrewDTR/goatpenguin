import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Rickrolling";
    const friendly = "Rickrolling";
    const acceptedGuesses = ["rickrolling", "rickroll", "rick roll", "never gonna give you up"];
    const day = "day53";
    const dayNum = 53;

    const categories = ["2007 neologisms",
        "Internet memes introduced in 2007",
        "Internet trolling",
        "Pop music",
        "Viral videos",
    ]

    const blurb = `Rickrolling is an Internet meme and prank involving the unexpected appearance of the 1987 hit song "Never Gonna Give You Up", performed by English singer Rick Astley, or its music video. The meme is a type of bait and switch, usually using a disguised hyperlink that leads to the music video instead of what was expected. The meme has also extended to using the song's lyrics in unexpected contexts or singing it during public events. After the origin of the meme in 2007 and the height of its popularity in 2008, rickrolling has become a very long-lived meme. Astley has seen his performance career revitalised by the meme's popularity.`;
    const img = null;

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
