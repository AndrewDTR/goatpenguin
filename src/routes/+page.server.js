import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Let_them_eat_cake";
    const friendly = "Let them eat cake";
    const acceptedGuesses = ["let them eat cake", "have them eat cake"];
    const day = "day59";
    const dayNum = 59;

    const categories = ["1760s neologisms",
        "English phrases",
        "Political quotes",
        "Metaphors referring to food and drink",
        "Works by Jean-Jacques Rousseau",
    ]

    const blurb = [`"Let them eat cake" is the traditional translation of the French phrase "Qu'ils mangent de la brioche", said to have been spoken in the 18th century by "a great princess" upon being told that the peasants had no bread. The French phrase mentions brioche, a bread enriched with butter and eggs, considered a luxury food. The quote is taken to reflect either the princess's frivolous disregard for the starving peasants or her poor understanding of their plight.`, `Although the phrase is conventionally attributed to Marie Antoinette, there is no evidence that she ever uttered it, and it is now generally regarded as a journalistic cliché. The phrase can actually be traced back to Jean-Jacques Rousseau's Confessions in 1765, 24 years prior to the French Revolution, and when Antoinette was nine years old and had never been to France. The phrase was not attributed to Antoinette until decades after her death.`];
    const img = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Allan_Ramsay_-_Jean-Jacques_Rousseau_%281712_-_1778%29_-_Google_Art_Project.jpg/1280px-Allan_Ramsay_-_Jean-Jacques_Rousseau_%281712_-_1778%29_-_Google_Art_Project.jpg";
    
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
