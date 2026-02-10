import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Scorigami";
    const friendly = "Scorigami";
    const acceptedGuesses = ["scorigami", "scora    gami"];
    const day = "day41";
    const dayNum = 41;

    const categories = ["Applied statistical analysis",
        "2014 neologisms",
        "Sports records and statistics",
        "NFL culture",
        "SB Nation",
    ]

    const blurb = `In sports, a scorigami (a portmanteau of score and origami) is a final score that has never happened before in a sport or league's history. The term was coined in a 2014 article by sportswriter Jon Bois for American football scores in the National Football League (NFL), and is primarily used in this context; it has also been applied sparingly across other sports leagues.`;
    const img = "img.png";

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
