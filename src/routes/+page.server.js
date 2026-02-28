import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Think_of_the_children";
    const friendly = "Think of the children";
    const acceptedGuesses = ["wont someone think of the children", "wont someone please think of the children", "think of the children", "please think of the children", "wont anyone please think of the children", "wont anyone think of the children", "what about the children", "please what about the children"];
    const day = "day48";
    const dayNum = 48;

    const categories = ["Political neologisms",
        "Appeals to emotion",
        "American political catchphrases",
        "Childhood",
        "Rhetoric",
    ]

    const blurb = `"Think of the children" (also "What about the children?") is a cliché that evolved into a rhetorical tactic. In the literal sense, it refers to children's rights (as in discussions of child labor). In debate, it is a plea for pity that is used as an appeal to emotion, and therefore may become a logical fallacy.`;
    const img = "https://upload.wikimedia.org/wikipedia/en/transcoded/e/e1/Think_of_the_children.webm/Think_of_the_children.webm.360p.webm";

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
