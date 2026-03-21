import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Dyson_(company)";
    const friendly = "Dyson (company)";
    const acceptedGuesses = ["dyson"];
    const day = "day67";
    const dayNum = 67;

    const categories = ["Companies of Singapore",
        "Electronics companies established in 1993",
        "Companies named after their founders",
        "Engineering companies of the United Kingdom",
        "Vacuum cleaner manufacturers",
    ]

    const blurb = `Dyson Limited, d.b.a Dyson, is a Singaporean–British multinational technology company. Founded in 1991 by James Dyson in Malmesbury, Wiltshire, England, the company designs and manufactures household appliances such as vacuum cleaners, air purifiers, hand dryers, bladeless fans, heaters, hair dryers, and lights. As of 2022 Dyson has more than 14,000 employees worldwide. In 2019, Dyson moved its headquarters from the United Kingdom to Singapore to be closer to its manufacturing and supply-chain hubs and Asian customer base.`;
    const img = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Dyson_Demo_Store%2C_London.jpg/1280px-Dyson_Demo_Store%2C_London.jpg";

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
