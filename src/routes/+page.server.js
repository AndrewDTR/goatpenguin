import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Vaporwave";
    const friendly = "Vaporwave";
    const acceptedGuesses = ["vaporwave", "vapor wav"];
    const day = "day43";
    const dayNum = 43;

    const categories = ["2010s neologisms",
        "Counterculture of the 2010s",
        "Nostalgia",
        "Cyberpunk culture",
        "Experimental music genres",
    ]

    const blurb = `Vaporwave is a microgenre of electronic music, an Internet aesthetic and meme that emerged in the late 2000s-early 2010s and became well known in 2015. It is defined partly by its slowed-down, chopped and screwed samples of smooth jazz, elevator music, R&B, and lounge music from the 1980s and 1990s, similar to synthwave. The surrounding subculture is sometimes associated with an ambiguous or satirical take on consumer capitalism and pop culture, and tends to be characterized by a nostalgic or surrealist engagement with the popular entertainment, technology and advertising of previous decades. Visually, it incorporates 1990s Web design and imagery, glitch art, anime, stylized Ancient Greek or Roman sculptures, Memphis Design geometric shapes, 3D-rendered objects, and cyberpunk tropes in its cover artwork and music videos.`;
    const img = "https://upload.wikimedia.org/wikipedia/commons/3/31/Wikiwave_00000.png";

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
