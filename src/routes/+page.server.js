import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Redshift";
    const friendly = "Redshift";
    const acceptedGuesses = ["redshift", "red shift", "redshifting", "red shifting"];
    const day = "day45";
    const dayNum = 45;

    const categories = ["Concepts in astronomy",
        "Physical cosmology",
        "Effects of gravity",
        "Astronomical spectroscopy",
        "Doppler effects",
    ]

    const blurb = `In physics, a redshift is an increase in the wavelength, or equivalently, a decrease in the frequency, of electromagnetic radiation (such as light). The opposite change, a decrease in wavelength and increase in frequency and energy, is known as a blueshift.`;
    const img = "a.png";

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
