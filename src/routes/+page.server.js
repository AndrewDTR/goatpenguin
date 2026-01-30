import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "The_Blue_Marble";
    const friendly = "The Blue Marble";
    const acceptedGuesses = ["the blue marble", "blue marble"];
    const day = "day31";
    const dayNum = 31;

    const categories = ["1972 works",
        "Harrison Schmitt",
        "Apollo 17",
        "Color photographs",
        "Photographs of Earth from outer space",
    ]

    const blurb = `The Blue Marble is a photograph of Earth taken on December 7, 1972, by Harrison Schmitt aboard the Apollo 17 spacecraft on its way to the Moon. Viewed from around 29,400 km (18,300 mi) from Earth's surface, a cropped and rotated version has become one of the most reproduced images in history.`;
    const img = "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg";

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
