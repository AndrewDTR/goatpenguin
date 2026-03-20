import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Boomerang";
    const friendly = "Boomerang";
    const acceptedGuesses = ["boomerang"];
    const day = "day66";
    const dayNum = 66;

    const categories = ["1790s neologisms",
        "Sports equipment",
        "Physical activity and dexterity toys",
        "Hunting equipment",
        "Throwing clubs",
    ]

    const blurb = `A boomerang is a thrown tool typically constructed with airfoil sections and designed to spin about an axis perpendicular to the direction of its flight, designed to return to the thrower. The origin of the word is from an Aboriginal Australian language of the Sydney region. Its original meaning, which is preserved in official competitions, refers only to returning objects, not to throwing sticks, which were also used for hunting by various peoples both in Australia and around the world. However, the term "non-returning boomerang" is also in general use. Various forms of boomerang-like designs were traditionally and in some cases are still used by some groups of Aboriginal Australians for hunting. The tools were known by various names in the many Aboriginal languages prior to colonisation. The oldest surviving Aboriginal boomerang, now held in the South Australian Museum, was found in a peat bog in South Australia, dated to 10,000 BC. Historically, boomerangs have been used for hunting, sport, and entertainment, and are made in various shapes and sizes to suit different purposes. Ancient "boomerangs", used for hunting, have also been discovered in Egypt, the Americas, and Europe, although it is unclear whether any of these were of the returning type.`
    const img = "https://upload.wikimedia.org/wikipedia/commons/9/91/Boomerangs_-_melbourne_show_2005.jpg";

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
