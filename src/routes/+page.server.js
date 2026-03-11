import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Google_Glass";
    const friendly = "Google Glass";
    const acceptedGuesses = ["google glass"];
    const day = "day57";
    const dayNum = 57;

    const categories = ["Products introduced in 2013",
        "Android (operating system) devices",
        "Google hardware",
        "Wearable computers",
        "Eyewear brands of the United States",
    ]

    const blurb = [`Google Glass, or simply Glass, is a discontinued brand of smart glasses developed by Google's X Development (formerly Google X), with a mission of producing a ubiquitous computer. Google Glass displays information to the wearer using a head-up display. Wearers communicate with the Internet via natural language voice commands.`, `Google started selling a prototype of Google Glass to qualified "Glass Explorers" in the US on June 27, 2012, for a limited period for $1,500, (with distribution of those purchases beginning on April 16, 2013), before it became available to the public on April 15, 2014. It has an integrated 5 megapixel still/720p video camera. The headset received a great deal of criticism amid concerns that its use could violate existing privacy laws.`];
    const img = "https://upload.wikimedia.org/wikipedia/commons/7/7b/Google_Glass_photo.JPG";
    
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
