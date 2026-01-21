import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Kaleidoscope";
    const friendly = "Kaleidoscope";
    const acceptedGuesses = ["kaleidoscope", "kalidiscope", "kaelidiscope", "kuhlidoscope", "kuhlidiscope"];
    const day = "day22";
    const dayNum = 22;

    const categories = ["1817 introductions",
        "19th-century inventions",
        "Optical toys",
        "Scottish inventions",
        "Patterns",
    ]

    const blurb = `A kaleidoscope is an optical instrument with two or more reflecting surfaces (or mirrors) tilted to each other at an angle, so that one or more (parts of) objects on one end of these mirrors are shown as a symmetrical pattern when viewed from the other end, due to repeated reflection. These reflectors are often enclosed in a tube, usually containing on one end a cell with loose, colored pieces of glass or other transparent (and/or opaque) materials to be reflected into the viewed pattern. Rotation of the cell causes motion of the materials, resulting in an ever-changing view being presented.`;
    const img = "https://upload.wikimedia.org/wikipedia/commons/f/f4/Kaleidoscopes.jpg";

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
