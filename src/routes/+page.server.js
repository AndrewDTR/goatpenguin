import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Great_Filter";
    const friendly = "Great Filter";
    const acceptedGuesses = ["great filter", "the great filter"];
    const day = "day71";
    const dayNum = 71;

    const categories = ["1996 in science",
        "Open problems",
        "Extraterrestrial life",
        "Doomsday scenarios",
        "Fermi paradox",
    ]

    const blurb = `The Great Filter is the idea that, in the development of life from the earliest stages of abiogenesis to reaching the highest levels of development on the Kardashev scale, there is a barrier to development that makes detectable extraterrestrial life exceedingly rare. The Great Filter is one possible resolution of the Fermi paradox. The main conclusion of the Great Filter is that there is an inverse correlation between the probability that other life could evolve to the present stage in which humanity is, and the chances of humanity to survive in the future.`;
    const img = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Meteosat-12-fci-march-equinox-2025-noon.jpg/1280px-Meteosat-12-fci-march-equinox-2025-noon.jpg";

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
