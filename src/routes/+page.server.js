import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Major-General%27s_Song";
    const friendly = "Major-General's Song";
    const acceptedGuesses = ["modern major general", "major general", "major general song", "major general's song", "major-general's song", "i am the very model of a modern major general", "i am the very model of a modern-major general", "i am the very model of", "i'm the very model of", "i'm the very model of a modern major general"];
    const day = "day61";
    const dayNum = 61;

    const categories = ["Gilbert and Sullivan",
        "1879 songs",
        "The Pirates of Penzance",
        "Songs about science",
        "Songs about military officers",
    ]

    const blurb = `"I Am the Very Model of a Modern Major-General" (often referred to as the "Major-General's Song" or "Modern Major-General's Song") is a patter song from Gilbert and Sullivan's 1879 comic opera The Pirates of Penzance. It has been called the most famous Gilbert and Sullivan patter song. Sung by Major-General Stanley at his first entrance, towards the end of Act I, the character introduces himself by presenting his résumé as a polymath but admitting to fundamental shortcomings. He claims a wide range of classical, historical and scientific knowledge but admits that he knows little of military tactics, weapons or jargon. The song thereby satirises the idea of the "modern" educated British Army officer of the latter 19th century.`
    const img = "https://upload.wikimedia.org/wikipedia/commons/d/dd/LyttonMajorGeneral.gif";

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
