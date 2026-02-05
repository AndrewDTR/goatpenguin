import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Air_Force_One";
    const friendly = "Air Force One";
    const acceptedGuesses = ["air force one", "air force 1"];
    const day = "day37";
    const dayNum = 37;

    const categories = ["Boeing 747",
        "1953 establishments in the United States",
        "United States Air Force",
        "United States special-purpose aircraft",
        "Presidential aircraft",
    ]

    const blurb = `Air Force One is the official air traffic control-designated call sign for a United States Air Force aircraft carrying the president of the United States. The term is commonly used to denote U.S. Air Force aircraft modified and used to transport the president, and as a metonym for the primary presidential aircraft, VC-25, although it can be used to refer to any Air Force aircraft the president travels on.`;
    const img = "https://upload.wikimedia.org/wikipedia/commons/4/45/United_States_Air_Force_Boeing_VC-25_%2892-9000%29_landing_at_Dayton_International_Airport_%281%29.jpg";

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
