/** @type {import('./$types').PageLoad} */
export async function load() {
    const article = "Times_Square_Ball";
    const friendly = "Times Square Ball";
    const acceptedGuesses = ["times square ball", "ball drop", "times square ball drop", "new years eve ball drop"];
    const day = "day1";

    const categories = ["December", "Winter traditions", "Culture of New York City", "Festivals established in 1907", "New Year in the United States"]

    return {
        article,
        friendly,
        categories,
        day,
        acceptedGuesses
    };
}