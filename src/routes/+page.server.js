import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Stonewall_Inn";
    const friendly = "Stonewall Inn";
    const acceptedGuesses = ["stonewall", "stonewall inn", "stonewall riots"];
    const day = "day50";
    const dayNum = 50;

    const categories = ["1967 establishments in New York City",
        "Cultural history of New York City",
        "Drinking establishments in Greenwich Village",
        "National Historic Landmarks in Manhattan",
        "LGBTQ drinking establishments in New York City",
    ]

    const blurb = `The Stonewall Inn (also known as Stonewall) is a gay bar and recreational tavern at 53 Christopher Street in the Greenwich Village neighborhood of Lower Manhattan in New York City. It was the site of the 1969 Stonewall riots, which led to the gay liberation movement and the modern fight for LGBTQ rights in the United States. When the riots occurred, Stonewall was one of the relatively few gay bars in New York City. The original gay bar occupied two structures at 51–53 Christopher Street, which were built as horse stables in the 1840s.`;
    const img = "https://upload.wikimedia.org/wikipedia/commons/c/ce/Stonewall_Inn_5_pride_weekend_2016.jpg";

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
