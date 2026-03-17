import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Oyez";
    const friendly = "Oyez";
    const acceptedGuesses = ["oyez", "ohyez", "hear ye", "here ye", "hear ye!", "ohyay", "hear ye hear ye", "hear ye hear ye hear ye"];
    const day = "day63";
    const dayNum = 63;

    const categories = ["British traditions",
        "18th century neologisms",
        "Court administration",
        "Town criers",
        "Supreme Court of the United States",
    ]

    const blurb = [`Oyez (synonym: "hear ye") is a traditional interjection said two or three times in succession to introduce the opening of a court of law. The interjection was also traditionally used by town criers to attract the attention of the public to public proclamations.`, `The term is still in use by the Supreme Court of the United States. At the beginning of each session, the Marshal of the United States Supreme Court strikes a gavel and announces: "The Honorable, the Chief Justice and the Associate Justices of the Supreme Court of the United States. Oyez! Oyez! Oyez! All persons having business before the Honorable, the Supreme Court of the United States, are admonished to draw near and give their attention, for the Court is now sitting. God save the United States and this Honorable Court."`]
    const img = "https://upload.wikimedia.org/wikipedia/commons/c/ce/Have_bell_will_travel._Peter_Moore%2C_Town_Crier_to_the_Mayor_of_London_and_the_Greater_London_Authority_%E2%80%A6_promotions%2C_parades%2C_openings_etc._%281388747790%29.jpg";

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
