import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Poland";
    const friendly = "Poland";
    const acceptedGuesses = ["poland"];
    const day = "day42";
    const dayNum = 42;

    const categories = ["States and territories established in 1918",
        "Republics",
        "Member states of the European Union",
        "Member states of the Union for the Mediterranean",
        "Member states of the Three Seas Initiative",
    ]

    const blurb = `Poland, officially the Republic of Poland, is a country in Central Europe. It extends from the Baltic Sea in the north to the Sudetes and Carpathian Mountains in the south. Poland borders Kaliningrad Oblast and Lithuania to the north; Belarus and Ukraine to the east; Slovakia and the Czech Republic to the south; and Germany to the west. The territory has a varied landscape, diverse ecosystems, and a temperate climate. Poland is composed of sixteen voivodeships and is the fifth most populous member state of the European Union (EU), with over 38 million people, and the fifth largest EU country by land area, covering 312,696 km2 (120,733 sq mi). The capital and largest city is Warsaw; other major cities include Kraków, Wrocław, Łódź, Poznań, and Gdańsk.`;
    const img = "https://upload.wikimedia.org/wikipedia/commons/8/87/Wawel_%284%29.jpg";

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
