import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Conan_O%27Brien";
    const friendly = "Conan O'Brien";
    const acceptedGuesses = ["conan o brien", "conan o'brien", "conan o brian", "conan o'brian"];
    const day = "day9";
    const dayNum = 9;

    const categories = ["21st-century American male writers",
        "American comedy podcasters",
        "Late night television talk show hosts",
        "American writers of Irish descent",
        "Writers from Brookline, Massachusetts",
    ]

    const blurb = "Conan Christopher O'Brien (born April 18, 1963) is an American television host, comedian and writer. He is best known for having hosted late-night talk shows, beginning with Late Night with Conan O'Brien (1993–2009) and The Tonight Show with Conan O'Brien (2009–2010) on the NBC television network, and Conan (2010–2021) on the cable channel TBS. Before his hosting career, O'Brien was a writer for the NBC sketch comedy series Saturday Night Live from 1988 to 1991, and the Fox animated sitcom The Simpsons from 1991 to 1993. He has hosted the podcast series Conan O'Brien Needs a Friend since 2018, and starred in the 2024 travel show Conan O'Brien Must Go on Max.";
    const img = "https://upload.wikimedia.org/wikipedia/commons/c/c5/Conan_O%27Brien_at_the_2025_Sundance_Film_Festival_03_%28cropped%29.jpg";

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