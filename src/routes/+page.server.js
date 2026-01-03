export async function load() {
    const article = "Microplastics";
    const friendly = "Microplastics";
    const acceptedGuesses = ["microplastics", "microplastic", "micro plastic", "micro plastics"];
    const day = "day4";
    const dayNum = 4;

    const categories = ["2004 neologisms",
        "Clothing and the environment",
        "Environmental impact of products",
        "Water pollution",
        "Plastics and the environment"
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