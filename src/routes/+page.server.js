import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Trolley_problem";
    const friendly = "Trolley problem";
    const acceptedGuesses = ["trolley problem", "the trolley problem"];
    const day = "day64";
    const dayNum = 64;

    const categories = ["1967 introductions",
        "Moral psychology",
        "Philosophical problems",
        "Thought experiments in ethics",
        "Dilemmas",
    ]

    const blurb = `The trolley problem is a series of thought experiments in ethics, psychology and artificial intelligence involving stylized ethical dilemmas in a scenario of whether to sacrifice one person to save a larger number. The series usually begins with a scenario in which a runaway trolley (tram) or train is on course to collide with and kill a number of people (traditionally five) down the railway track, but a driver or bystander can intervene and divert the vehicle to kill just one person on a different track. Then other variations of the runaway vehicle, and analogous life-and-death dilemmas (medical, judicial, etc.) are posed, each containing the option either to do nothing—in which case several people will be killed—or to intervene and sacrifice one initially "safe" person to save the others.`;
    const img = "a.png";

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
