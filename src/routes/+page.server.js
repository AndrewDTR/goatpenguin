export async function load() {
    const article = "The_Stanley_Parable";
    const friendly = "The Stanley Parable";
    const acceptedGuesses = ["the stanley parable", "the stanly parable", "stanley parable", "stanly parable"];
    const day = "day2";
    const dayNum = 2;

    const categories = ["2011 video games", "First-person adventure games", "Fiction with unreliable narrators", "Self-reflexive video games", "Office work in popular culture"]

    return {
        article,
        friendly,
        categories,
        day,
        dayNum,
        acceptedGuesses
    };
}