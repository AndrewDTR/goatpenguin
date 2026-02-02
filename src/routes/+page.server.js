import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Doomsday_Clock";
    const friendly = "Doomsday Clock";
    const acceptedGuesses = ["doomsday clock"];
    const day = "day34";
    const dayNum = 34;

    const categories = ["Doomsday scenarios",
        "Political symbols",
        "Symbols introduced in 1947",
        "Alert measurement systems",
        "Clocks",
    ]

    const blurb = [`The Doomsday Clock is a symbol that represents the estimated likelihood of a human-made global catastrophe, in the opinion of the nonprofit organization Bulletin of the Atomic Scientists.`, `The Clock's original setting in 1947 was seven minutes to midnight. It has since been set backward eight times and forward 19 times. The farthest time from midnight was 17 minutes in 1991, and the closest is 85 seconds in 2026.`, `The Clock was moved to 150 seconds (2 minutes, 30 seconds) in 2017, then forward to two minutes to midnight in 2018, and left unchanged in 2019. It was moved forward to 100 seconds (1 minute, 40 seconds) in 2020, 90 seconds (1 minute, 30 seconds) in 2023, 89 seconds (1 minute, 29 seconds) in 2025, and 85 seconds (1 minute, 25 seconds) in 2026.`]
    const img = "/clock.jpg";

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
