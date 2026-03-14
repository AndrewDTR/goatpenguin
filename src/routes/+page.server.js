import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "R/place";
    const friendly = "r/place";
    const acceptedGuesses = ["r place", "r/place", "place"];
    const day = "day60";
    const dayNum = 60;

    const categories = ["Internet properties established in 2017",
        "Computer art",
        "Group processes",
        "April Fools' Day",
        "Subreddits",
    ]

    const blurb = [`r/place was a recurring collaborative project and social experiment hosted on the content aggregator site Reddit. Originally launched on April Fools' Day 2017, it has since been repeated again on April Fools' Day 2022 and on July 20, 2023.`, `The 2017 experiment involved an online canvas located at a subreddit called r/place. Registered users could edit the canvas by changing the color of a single pixel with a replacement from a 16-color palette. After each pixel was placed, a timer prevented the user from placing any more pixels for a period of time varying from 5 to 20 minutes (depending on whether the user had verified their email address). The idea of the experiment was conceived by Josh Wardle.`];
    const img = "https://upload.wikimedia.org/wikipedia/en/a/a0/RPlace2017.png";

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
