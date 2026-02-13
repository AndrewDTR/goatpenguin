import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Magic_square";
    const friendly = "Magic square";
    const acceptedGuesses = ["magic square"];
    const day = "day44";
    const dayNum = 44;

    const categories = ["Matrices (mathematics)",
        "Chinese mathematical discoveries",
        "Unsolved problems in mathematics",
        "Squares",
        "Magic symbols",
    ]

    const blurb = `In mathematics, especially historical and recreational mathematics, a square array of numbers, usually positive integers, is called a magic square if the sums of the numbers in each row, each column, and both main diagonals are the same. The order of the magic square is the number of integers along one side (n), and the constant sum is called the magic constant.`;
    const img = "a.png";

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
