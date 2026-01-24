import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Theremin";
    const friendly = "Theremin";
    const acceptedGuesses = ["theremin", "theramin"];
    const day = "day25";
    const dayNum = 25;

    const categories = ["1928 in the Soviet Union",
        "Musical instruments invented in the 1920s",
        "Continuous pitch instruments",
        "Monophonic synthesizers",
        "Experimental musical instruments",
    ]

    const blurb = `The theremin is an electronic musical instrument controlled without physical contact by the performer (who is known as a thereminist). It is named after its inventor, Leon Theremin, who patented the device in 1928. The instrument's controlling section usually consists of two metal antennas that function not as radio antennas but rather as position sensors. Each antenna forms one half of a capacitor with each of the thereminist's hands as the other half of the capacitor. These antennas capacitively sense the relative position of the hands and control oscillators for frequency with one hand, and amplitude (volume) with the other. The electric signals from the theremin are amplified and sent to a loudspeaker. The sound of the instrument is often associated with eerie situations.`;
    const img = "https://upload.wikimedia.org/wikipedia/commons/c/c8/Etherwave_Theremin_Kit.jpg";

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
