import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Theranos";
    const friendly = "Theranos";
    const acceptedGuesses = ["theranos"];
    const day = "day7";
    const dayNum = 7;

    const categories = ["2003 establishments in California",
        "Biotechnology companies disestablished in 2018",
        "Confidence tricks",
        "Health fraud companies",
        "Corporate scandals in the United States",
    ];

    const blurb = "Theranos Inc. was an American privately held corporation that was touted as a breakthrough health technology company. Founded in 2003 by then 19-year-old Elizabeth Holmes, Theranos raised more than US$700 million from venture capitalists and private investors, resulting in a $9 billion valuation at its peak in 2013 and 2014. The company claimed that it had devised blood tests that could be performed rapidly and accurately, while requiring very small amounts of blood, all using compact automated devices that the company had developed. These claims were proven to be false.";
    const img = "https://upload.wikimedia.org/wikipedia/commons/e/eb/Theranos_Logo.svg";

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