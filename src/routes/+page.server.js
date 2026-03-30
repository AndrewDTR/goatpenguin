import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Sundial";
    const friendly = "Sundial";
    const acceptedGuesses = ["sundial", "sun dial"];
    const day = "day70";
    const dayNum = 70;

    const categories = ["Outdoor sculptures",
        "Egyptian inventions",
        "Garden ornaments",
        "Horology",
        "Clocks",
    ]

    const blurb = `A sundial is a horological device that tells the time of day (referred to as civil time in modern usage) when direct sunlight shines by the apparent position of the Sun in the sky. In the narrowest sense of the word, it consists of a flat plate (the dial) and a gnomon, which casts a shadow onto the dial. As the Sun appears to move through the sky, the shadow aligns with different hour-lines, which are marked on the dial to indicate the time of day. The style is the time-telling edge of the gnomon, though a single point or nodus may be used. The gnomon casts a broad shadow; the shadow of the style shows the time. The gnomon may be a rod, wire, or elaborately decorated metal casting. The style must be parallel to the axis of the Earth's rotation for the sundial to be accurate throughout the year. The style's angle from horizontal is equal to the sundial's geographical latitude.`;
    const img = "https://upload.wikimedia.org/wikipedia/commons/8/86/MootHallSundial.JPG";

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
