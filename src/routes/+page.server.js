import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Snow_leopard";
    const friendly = "Snow leopard";
    const acceptedGuesses = ["snow leopard", "snep"];
    const day = "day69";
    const dayNum = 69;

    const categories = ["National symbols of Pakistan",
        "Fauna of the Himalayas",
        "Vulnerable animals",
        "Felids of Asia",
        "Big cats",
    ]

    const blurb = `The snow leopard (Panthera uncia) is a species of large cat in the genus Panthera of the family Felidae. It is native to the mountain ranges of Central and South Asia, ranging from eastern Afghanistan, the Himalayas and the Tibetan Plateau to southern Siberia, Mongolia and Western China. It inhabits alpine and subalpine zones at elevations of 3,000–4,500 m (9,800–14,800 ft), but also lives at lower elevations in the northern part of its range.`
    const img = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/1280px-Irbis4.JPG";

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
