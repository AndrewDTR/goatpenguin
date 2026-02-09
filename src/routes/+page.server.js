import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Richter_scale";
    const friendly = "Richter scale";
    const acceptedGuesses = ["richter scale", "richter"];
    const day = "day40";
    const dayNum = 40;

    const categories = ["American inventions",
        "California Institute of Technology",
        "1935 in science",
        "Logarithmic scales of measurement",
        "Seismic magnitude scales",
    ]

    const blurb = `The Richter scale, also called the Richter magnitude scale, Richter's magnitude scale, and the Gutenberg-Richter scale, is a measure of the strength of earthquakes, developed by Charles Richter in collaboration with Beno Gutenberg, and presented in Richter's landmark 1935 paper, where he called it the "magnitude scale". This was later revised and renamed the local magnitude scale, denoted as ML.`;
    const img = "https://upload.wikimedia.org/wikipedia/commons/6/62/CharlesRichter.jpg";

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
