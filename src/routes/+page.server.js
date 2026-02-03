import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Deflategate";
    const friendly = "Deflategate";
    const acceptedGuesses = ["deflategate", "deflate gate", "deflation gate"];
    const day = "day35";
    const dayNum = 35;

    const categories = ["2015 in sports in Massachusetts",
        "New England Patriots postseason",
        "NFL controversies",
        "Banned sports tactics",
        "Cheating in sports",
    ]

    const blurb = `The Deflategate scandal was a National Football League (NFL) controversy in the United States involving the allegation that New England Patriots quarterback Tom Brady ordered the deliberate deflation of footballs that were used in the Patriots' victory against the Indianapolis Colts during the 2014 AFC Championship Game on January 18, 2015. The controversy resulted in Brady being suspended for the first four games of the 2016 NFL season, while the Patriots were fined $1 million and forfeited two draft selections in 2016.`;
    const img = "https://upload.wikimedia.org/wikipedia/commons/7/73/25th_Laureus_World_Sports_Awards_-_Red_Carpet_-_Tom_Brady_-_240422_191334_%28cropped%29_%28cropped%29.jpg";

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
