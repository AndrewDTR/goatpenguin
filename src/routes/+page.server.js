import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Yellowstone_National_Park";
    const friendly = "Yellowstone National Park";
    const acceptedGuesses = ["yellowstone", "yellowstone park", "yellowstone national park"];
    const day = "day30";
    const dayNum = 30;

    const categories = ["Protected areas established in 1872",
        "Biosphere reserves of the United States",
        "History of the Rocky Mountains",
        "National parks in Wyoming",
        "Geysers of Wyoming",
    ]

    const blurb = `Yellowstone National Park is a national park of the United States located in the northwest corner of the state of Wyoming, with small portions extending into Montana and Idaho. It was established by the 42nd U.S. Congress through the Yellowstone National Park Protection Act and signed into law by President Ulysses S. Grant on March 1, 1872. Yellowstone was the first national park in the US, and is also widely understood to be the first national park in the world. The park is known for its wildlife and its many geothermal features, especially the Old Faithful geyser, one of its most popular. While it represents many types of biomes, subalpine forest is the most abundant. It is part of the South Central Rockies forests ecoregion.`;
    const img = "https://upload.wikimedia.org/wikipedia/commons/7/73/Grand_Canyon_of_yellowstone.jpg";

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
