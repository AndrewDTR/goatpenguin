import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "E3";
    const friendly = "E3";
    const acceptedGuesses = ["e3", "e 3", "e three", "ethree", "electronic entertainment expo"];
    const day = "day47";
    const dayNum = 47;

    const categories = ["Annual events in Los Angeles County, California",
        "2023 disestablishments in California",
        "Trade shows in the United States",
        "Organizations disestablished due to the COVID-19 pandemic",
        "Video gaming in the United States",
    ]

    const blurb = `E3 (short for Electronic Entertainment Expo) was an annual trade event for the video game industry organized and presented by the Entertainment Software Association (ESA). It was held principally in Los Angeles from 1995 to 2019, with its final iteration held virtually in 2021. The event hosted developers, publishers, hardware manufacturers, and other industry professionals who used the occasion to introduce and advertise upcoming games, hardware, and merchandise to the press. During its existence, E3 was the world's largest and most prestigious annual gaming expo.`;
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
