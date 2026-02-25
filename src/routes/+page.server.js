import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Allura_Red_AC";
    const friendly = "Allura Red AC";
    const acceptedGuesses = ["red 40", "allura red ac", "red forty"];
    const day = "day46";
    const dayNum = 46;

    const categories = ["20th-century inventions",
        "1971 in science",
        "E-number additives",
        "Benzenesulfonates",
        "Food colorings",
    ]

    const blurb = [`Allura Red AC, also known as FD&C Red 40 or E129, is a red azo dye commonly used in food. It was developed in 1971 by the Allied Chemical Corporation.`, `It is usually supplied as its red sodium salt but can also be used as the calcium and potassium salts. These salts are soluble in water. In solution, its maximum absorbance lies at about 504 nm.`]
    const img = "https://upload.wikimedia.org/wikipedia/commons/a/af/Strawberry_soda.jpg";

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
