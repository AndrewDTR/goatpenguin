import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Corecore";
    const friendly = "Corecore";
    const acceptedGuesses = ["corecore", "core core"];
    const day = "day17";
    const dayNum = 17;

    const categories = ["Digital media use and mental health",
        "Internet memes introduced in 2022",
        "Internet aesthetics",
        "Existentialist works",
        "Core aesthetics",
    ]

    const blurb = `Corecore (alternatively spelled CoreCore) is an artistic movement aiming to capture post-2020 sensibilities. A product of youth culture in the 2020s, the corecore aesthetic can largely be found on TikTok, where it juxtaposes various video clips while emotional music plays. Meant to evoke strong emotions, the corecore aesthetic juxtaposes imagery with its content made up of "seemingly unrelated clips" culled from a variety of sources including news footage, social media, films, livestreams, and memes. This content is then overlaid on usually emotionally rousing, somber, or ambient music.`;
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