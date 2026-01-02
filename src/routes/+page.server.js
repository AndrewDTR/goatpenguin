export async function load() {
    const article = "Tamagotchi";
    const friendly = "Tamagotchi";
    const acceptedGuesses = ["tamogachi", "tamagachi", "tamagatchi", "tamagachi", "tamagotchi"];
    const day = "day3";
    const dayNum = 3;

    const categories = ["1996 establishments in Japan",
        "2000s fads and trends",
        "Bandai Namco Entertainment franchises",
        "Fictional extraterrestrial species and races",
        "Handheld virtual pets"
    ]

    return {
        article,
        friendly,
        categories,
        day,
        dayNum,
        acceptedGuesses
    };
}