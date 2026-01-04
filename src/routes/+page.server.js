export async function load() {
    const article = "Wii";
    const friendly = "Wii";
    const acceptedGuesses = ["wii", "nintendo wii", "wii nintendo"];
    const day = "day5";
    const dayNum = 5;

    const categories = ["2000s toys",
        "2010s in video gaming",
        "Spike Video Game Award winners",
        "Backward-compatible video game consoles",
        "Discontinued video game consoles",
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