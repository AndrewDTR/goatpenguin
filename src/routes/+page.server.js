import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Flappy_Bird";
    const friendly = "Flappy Bird";
    const acceptedGuesses = ["flappy bird"];
    const day = "day58";
    const dayNum = 58;

    const categories = ["2010s fads and trends",
        "Plagiarism controversies in video games",
        "Side-scrolling video games ",
        "IOS games",
        "Video games about birds",
    ]

    const blurb = `Flappy Bird is a 2013 casual mobile game developed by Vietnamese video game artist and programmer Dong Nguyen (Vietnamese: Nguyễn Hà Đông), under his game development company .Gears. The game is a side-scroller where the player controls a bird, Faby, attempting to fly between columns of green pipes without hitting them. The player's score is determined by the number of pipes they pass. Nguyen created the game over a period of several days, using the bird from a cancelled game made in 2012.`;
    const img = "https://upload.wikimedia.org/wikipedia/en/0/0a/Flappy_Bird_icon.png";
    
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
