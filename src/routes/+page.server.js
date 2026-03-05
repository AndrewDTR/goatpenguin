import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Women_and_children_first";
    const friendly = "Women and children first";
    const acceptedGuesses = ["women and children first", "women and the children first", "the women and the children first", "children and women first"];
    const day = "day51";
    const dayNum = 51;

    const categories = ["Chivalry",
        "1840s quotations",
        "Women's rights",
        "Sinking of RMS Titanic",
        "Lifeboats",
    ]

    const blurb = [`"Women and children first", known to a lesser extent as the Birkenhead drill, is an unofficial code of conduct and gender role whereby the lives of women and children were to be saved first in a life-threatening situation, typically abandoning ship, when survival resources such as lifeboats were limited.`, `In the 19th and early 20th century, "women and children first" was seen as a chivalric ideal. The concept "was celebrated among Victorian and Edwardian commentators as a long-standing practice - a 'tradition', 'law of human nature', 'the ancient chivalry of the sea', 'handed down in the race'." Its practice was featured in accounts of some 18th-century shipwrecks with greater public awareness during the 19th century.`];
    const img = "https://upload.wikimedia.org/wikipedia/commons/3/37/Wreck_of_the_Birkenhead.jpg";

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
