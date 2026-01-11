import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Black_Friday_(shopping)";
    const friendly = "Black Friday";
    const acceptedGuesses = ["black friday"];
    const day = "day12";
    const dayNum = 12;

    const categories = ["Recurring events established in 1951",
        "November observances",
        "Friday observances",
        "Retailing in the United States",
        "Sales and clearances",
    ]

    const blurb = `Black Friday is the Friday after Thanksgiving in the United States. It traditionally marks the start of the Christmas shopping season and is the busiest shopping day of the year in the United States. Many stores offer highly promoted sales at heavily discounted prices and often open early, sometimes as early as midnight or even on Thanksgiving. Some stores' sales continue to Monday ("Cyber Monday") or for a week ("Cyber Week").`;
    const img = "https://upload.wikimedia.org/wikipedia/commons/1/13/Black_Friday_by_Powhusku.jpg";

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