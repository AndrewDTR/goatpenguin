import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Lorem_ipsum";
    const friendly = "Lorem ipsum";
    const acceptedGuesses = ["lorem ipsum", "lorem ispum", "lorum ipsum", "lorum ispum"];
    const day = "day65";
    const dayNum = 65;

    const categories = ["1960s neologisms",
        "Cicero",
        "Latin words and phrases",
        "Nonsense",
        "Filler text",
    ]

    const blurb = `Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. It is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words are the truncation of dolorem ipsum ("pain itself"). Lorem ipsum's purpose is to permit a page layout to be designed, independently of the copy that will subsequently populate it, or to demonstrate various fonts of a typeface without meaningful text that could be distracting.`;
    const img = "https://upload.wikimedia.org/wikipedia/commons/4/42/Letraset_Lorem_Ipsum.jpg";

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
