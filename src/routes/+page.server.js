import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "E-ZPass";
    const friendly = "E-ZPass";
    const acceptedGuesses = ["ezpass", "ez pass", "e-zpass", "easy pass", "easypass"];
    const day = "day36";
    const dayNum = 36;

    const categories = ["1987 introductions",
        "Companies based in New Jersey",
        "Toll road authorities of the United States",
        "Transportation in the United States",
        "Electronic toll collection",
    ]

    const blurb = `E-ZPass Interagency Group (E-ZPass Group trade name and E-ZPass product brand) is an electronic toll collection system used on toll roads, toll bridges, and toll tunnels in the eastern half of the United States. The group itself is composed of several states' member agencies, which share the same technology and allow travelers to use the same transponder on toll facilities throughout the network. It was created in 1987, since which time several states' compatible systems have rebranded to E-ZPass. Negotiations for nationwide interoperability are ongoing.`;
    const img = "https://upload.wikimedia.org/wikipedia/commons/c/c7/E-ZPass_Toll_Plaza_-_Spaulding_Turnpike.jpg";

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
