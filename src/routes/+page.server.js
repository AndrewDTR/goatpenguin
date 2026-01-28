import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "MythBusters";
    const friendly = "MythBusters";
    const acceptedGuesses = ["mythbusters", "myth busters"];
    const day = "day29";
    const dayNum = 29;

    const categories = ["2003 Australian television series debuts",
        "Discovery Channel original programming",
        "American educational television series",
        "Scientific skepticism mass media",
        "Television series about urban legends",
    ]

    const blurb = `MythBusters is a science entertainment television series created by Peter Rees, and produced by Beyond International, in Australia. The series premiered on the Discovery Channel in 2003. It was broadcast on television networks and other Discovery channels worldwide. The show's original hosts, special effects experts Adam Savage and Jamie Hyneman, used elements of the scientific method to test the validity of rumors, myths, movie scenes, adages, Internet videos, and news stories.`;
    const img = "https://upload.wikimedia.org/wikipedia/en/2/24/MythBusters_title_screen.jpg";

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
