import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Matryoshka_doll";
    const friendly = "Matryoshka doll";
    const acceptedGuesses = ["matryoshka doll", "nesting doll", "nesting dolls", "russian nesting dolls", "stacking dolls", "russian stacking dolls", "russian dolls"];
    const day = "day72";
    const dayNum = 72;

    const categories = ["Products introduced in 1890",
        "Handicrafts",
        "Culture of the Soviet Union",
        "1890s toys",
        "Recursion",
    ]

    const blurb = [`A matryoshka doll or matryoshka, also known as a Russian stacking doll, nesting doll, or simply a Russian doll, is a set of wooden dolls of decreasing size placed one inside another. Matryoshka is a diminutive form of Matryosha (Матрёша), in turn a hypocorism of the Russian female first name Matryona (Матрёна).`, `A set of matryoshkas consists of a wooden figure, which separates at the middle, top from bottom, to reveal a smaller figure of the same sort inside, which has, in turn, another figure inside of it, and so on.`]
    const img = "https://upload.wikimedia.org/wikipedia/commons/3/3d/First_matryoshka_museum_doll_open.jpg";

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
