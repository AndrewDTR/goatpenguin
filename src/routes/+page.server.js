import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
		redirect(308, 'https://goatpenguin.com');
	}

    const article = "Wii";
    const friendly = "Wii";
    const acceptedGuesses = ["wii", "nintendo wii", "wii nintendo"];
    const day = "day5";
    const dayNum = 5;

    const categories = ["2000s toys",
        "2010s in video gaming",
        "Spike Video Game Award winners",
        "Backward-compatible video game consoles",
        "Discontinued video game consoles",
    ]

    return {
        article,
        friendly,
        categories,
        day,
        dayNum,
        acceptedGuesses
    };
}