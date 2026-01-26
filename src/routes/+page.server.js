import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Minecraft_Earth";
    const friendly = "Minecraft Earth";
    const acceptedGuesses = ["minecraft earth", "earth minecraft"];
    const day = "day27";
    const dayNum = 27;

    const categories = ["2019 video games",
        "Online games shut down in 2021",
        "Location-based games",
        "Video games developed in Sweden",
        "Augmented reality games",
    ]

    const blurb = `Minecraft Earth was an augmented reality and geolocation-based sandbox game developed by Mojang Studios and Blackbird interactive and published by Xbox Game Studios. A spin-off of the video game Minecraft, it was first announced in May 2019, and was available on Android and iOS. The game was free-to-play, and was first released in early access on 17 October 2019. The game received its final update in January 2021 and officially shut down on 30 June 2021 due to the COVID-19 pandemic.`;
    const img = "https://upload.wikimedia.org/wikipedia/en/b/bb/Minecraft_Earth.png";

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
