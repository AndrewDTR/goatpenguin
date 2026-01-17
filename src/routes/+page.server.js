import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Vine (service)";
    const friendly = "Vine";
    const acceptedGuesses = ["vine"];
    const day = "day18";
    const dayNum = 18;

    const categories = ["2010s in Internet culture",
        "2012 mergers and acquisitions",
        "Defunct social networking services",
        "Former video hosting services",
        "Twitter, Inc. acquisitions",
    ]

    const blurb = `Vine was an American short-form video hosting service where users could share up to 6-second-long looping video clips. Founded in June 2012 by Rus Yusupov, Dom Hofmann and Colin Kroll, the company was bought by Twitter, Inc., four months later for $30 million. Vine launched with its iOS app on January 24, 2013, with Android and Windows versions following.`;
    const img = "https://upload.wikimedia.org/wikipedia/commons/5/57/Vine_wordmark.svg";

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