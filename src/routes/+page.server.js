import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Steinway_%26_Sons";
    const friendly = "Steinway & Sons";
    const acceptedGuesses = ["steinway", "steinway and sons", "steinway & sons"];
    const day = "day33";
    const dayNum = 33;

    const categories = ["Companies based in Queens, New York",
        "German brands",
        "Purveyors to the Russian imperial family",
        "Luxury brands",
        "Piano manufacturing companies",
    ]

    const blurb = `Steinway & Sons, also known as Steinway, is a German-American piano company, founded in 1853 in New York City by German piano builder Heinrich Engelhard Steinweg (later known as Henry E. Steinway). The company's growth led to a move to a larger factory in New York, and later opening an additional factory in Hamburg, Germany. The New York factory, in the borough of Queens, supplies the Americas, and the factory in Hamburg supplies the rest of the world.`;
    const img = "https://upload.wikimedia.org/wikipedia/commons/8/8d/Steinway_%26_Sons_concert_grand_piano%2C_model_D-274%2C_manufactured_at_Steinway%27s_factory_in_Hamburg%2C_Germany.png";

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
