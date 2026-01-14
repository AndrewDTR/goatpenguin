import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Dead_Internet_theory";
    const friendly = "Dead Internet theory";
    const acceptedGuesses = ["dead internet theory", "dead internet"];
    const day = "day15";
    const dayNum = 15;

    const categories = ["Internet-related controversies",
        "2020s neologisms",
        "Mass media issues",
        "Science and technology-related conspiracy theories",
        "Internet bots",
    ]

    const blurb = `The dead Internet theory (also referred to as the dead Internet or the dead Internet conspiracy theory) is a conspiracy theory that asserts that since around 2016, the Internet has consisted mainly of bot activity and automatically generated content manipulated by algorithmic curation, as part of a coordinated and intentional effort to control the population and minimize organic human activity. Proponents of the theory believe these social bots were created intentionally to help control algorithms and boost search results in order to influence consumers. Some proponents of the theory accuse government agencies of using bots to manipulate public perception, opinions and views. The dead Internet theory has gained traction because many of the phenomena mentioned in connection with it are quantifiable, such as increased bot traffic, but the evidence does not support the theory itself.`;
    const img = "https://upload.wikimedia.org/wikipedia/commons/5/5f/404_not_found.png";

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