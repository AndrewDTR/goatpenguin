import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Blåhaj";
    const friendly = "Blåhaj";
    const acceptedGuesses = ["blåhaj", "blahaj", "ikea shark", "blue shark"];
    const day = "day68";
    const dayNum = 68;

    const categories = ["Internet memes introduced in 2018",
        "Stuffed toys",
        "LGBTQ symbols",
        "IKEA products",
        "Fictional sharks",
    ]

    const blurb = `Blåhaj (lit. 'blue shark', sometimes called "IKEA shark") is a plush toy manufactured and sold by the Swedish company IKEA. Modeled after the blue shark and made of recycled polyester, the toy has become a globally popular internet meme since the late 2010s. For example, it has become a cultural icon in countries like Russia and China, played a symbolic role in Switzerland's same-sex marriage referendum, and found special significance within the transgender community. It has also been used as a mascot by IKEA in some regions.`
    const img = "https://upload.wikimedia.org/wikipedia/en/b/b3/IKEA_Bl%C3%A5haj_plush_shark_toys_-_regular_and_small_variants_-_side_and_bottom_views.png";

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
