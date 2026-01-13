import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Vocaloid";
    const friendly = "Vocaloid";
    const acceptedGuesses = ["vocaloid"];
    const day = "day14";
    const dayNum = 14;

    const categories = ["2000 establishments in Spain",
        "2004 software",
        "Japanese inventions",
        "Music production software",
        "Singing software synthesizers",
    ]

    const blurb = `Vocaloid (ボーカロイド, Bōkaroido) is a singing voice synthesizer software product. Its signal processing part was developed through a joint research project between Yamaha Corporation and the Music Technology Group at Pompeu Fabra University, Barcelona. The software was ultimately developed into the commercial product "Vocaloid" that was released in 2004.`;
    const img = "https://upload.wikimedia.org/wikipedia/en/1/14/VOCALOID_6.png";

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