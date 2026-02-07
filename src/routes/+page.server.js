import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Slinky";
    const friendly = "Slinky";
    const acceptedGuesses = ["slinky", "slinkey"];
    const day = "day39";
    const dayNum = 39;

    const categories = ["1950s fads and trends",
        "Goods manufactured in the United States",
        "Collection of the Museum of Modern Art",
        "Metal toys",
        "Springs (mechanical)",
    ]

    const blurb = [`The Slinky is a helical spring toy invented and developed by American naval engineer Richard T. James in 1943 and successfully demonstrated at Gimbels department store in Philadelphia on November 27, 1945.`, `It can perform a number of tricks, including travelling down a flight of steps end-over-end as it stretches and re-forms itself with the aid of gravity and its own momentum; and appearing to levitate for a period of time after it has been dropped. These interesting characteristics have contributed to its success in its home country of the United States, and it has inspired many popular toys with Slinky-like components, in a wide range of countries.`];
    const img = "https://upload.wikimedia.org/wikipedia/commons/f/f3/2006-02-04_Metal_spiral.jpg";

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
