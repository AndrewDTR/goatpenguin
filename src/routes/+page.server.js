import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Big_Ben";
    const friendly = "Big Ben";
    const acceptedGuesses = ["big ben", "great clock of westminster"];
    const day = "day54";
    const dayNum = 54;

    const categories = ["1859 establishments in England",
        "Gothic Revival architecture in London",
        "National government buildings in London",
        "Tourist attractions in the City of Westminster",
        "Bell towers in the United Kingdom",
    ]

    const blurb = [`Big Ben is the nickname for the Great Bell of the Great Clock of Westminster, and, by extension, for the clock tower which stands at the north end of the Palace of Westminster in London, England. Originally named the Clock Tower, the structure was renamed the Elizabeth Tower in 2012 to mark the Diamond Jubilee of Queen Elizabeth II. The clock is a striking clock with five bells.`, `The tower was designed by Augustus Pugin and Sir Charles Barry in the Perpendicular Gothic style and was completed in 1859. It is decorated with stone carvings and features symbols related to the four countries of the United Kingdom and the Tudor dynasty. A Latin inscription celebrates Queen Victoria, under whose reign the palace was built. It stands 316 feet (96 m) tall, and the climb from ground level to the belfry is 334 steps. Its base is square, measuring 40 feet (12 m) on each side. The dials of the clock are 22.5 feet (6.9 m) in diameter.`];
    const img = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Elizabeth_Tower%2C_June_2022.jpg/960px-Elizabeth_Tower%2C_June_2022.jpg";

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
