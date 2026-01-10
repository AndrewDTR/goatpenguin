import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "SethBling";
    const friendly = "SethBling";
    const acceptedGuesses = ["sethbling", "seth bling"];
    const day = "day11";
    const dayNum = 11;

    const categories = ["American software engineers",
        "American gaming YouTubers",
        "Microsoft employees",
        "Minecraft YouTubers",
        "Mario players",
    ]

    const blurb = `SethBling (born April 3, 1987) is an American video game commentator and Twitch video game live streamer known for YouTube videos focused around the 1990 side-scrolling platform video game Super Mario World and the 2011 sandbox video game Minecraft. He created original and derivative video games, devices and phenomena in Minecraft, without using Minecraft mods. He created an interpreter for the programming language BASIC and an emulator for the 1977 home video game console Atari 2600 in Minecraft. In addition to Minecraft builds that run without mods, he created plugins for the game.`;
    const img = "https://upload.wikimedia.org/wikipedia/commons/1/12/Sethbling_Interview_%28cropped%29.jpg";

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