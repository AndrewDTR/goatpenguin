import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Boston_Tea_Party";
    const friendly = "Boston Tea Party";
    const acceptedGuesses = ["the boston tea party", "boston tea party", "tea party"];
    const day = "day19";
    const dayNum = 19;

    const categories = ["1770s riots",
        "Battles and conflicts without fatalities",
        "1773 in the Province of Massachusetts Bay",
        "Tax resistance in the United States",
        "History of tea",
    ]

    const blurb = `The Boston Tea Party was an act of protest on December 16, 1773 during the American Revolution. Initiated by the Sons of Liberty in Boston, the capital of Massachusetts, one of the Thirteen Colonies of British America, it escalated hostilities between Great Britain and the Patriots, who opposed British policy towards its American colonies.     Less than two years later, on April 19, 1775, the Battles of Lexington and Concord, also in Massachusetts, launched the eight-year American Revolutionary War, which resulted in the independence of the colonies as the United States.`;
    const img = "https://upload.wikimedia.org/wikipedia/commons/e/e6/Boston_Tea_Party_w.jpg";

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