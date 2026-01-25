import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Geocaching";
    const friendly = "Geocaching";
    const acceptedGuesses = ["geocaching", "geocache"];
    const day = "day26";
    const dayNum = 26;

    const categories = ["2000 establishments in Oregon",
        "2000 neologisms",
        "Games and sports introduced in 2000",
        "Global Positioning System",
        "Internet object tracking",
    ]

    const blurb = `Geocaching is an outdoor recreational activity, in which participants use a Global Positioning System (GPS) receiver or mobile device and other navigational techniques to hide and seek containers, called geocaches or caches, at specific locations marked by coordinates all over the world. The first geocache was placed in 2000, and by 2023 there were over three million active caches worldwide.`;
    const img = "https://upload.wikimedia.org/wikipedia/commons/d/d7/Classic_Geocache.jpg";

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
