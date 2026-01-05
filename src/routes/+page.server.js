import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
		redirect(308, 'https://goatpenguin.com');
	}

    const article = "Git";
    const friendly = "Git";
    const acceptedGuesses = ["git"];
    const day = "day6";
    const dayNum = 6;

    const categories = ["2005 software",
        "Free software programmed in C",
        "Self-hosting software",
        "Linus Torvalds",
        "Version control systems",
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