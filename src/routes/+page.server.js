import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Butterfly_effect";
    const friendly = "Butterfly effect";
    const acceptedGuesses = ["kombucha", "kombucha tea", "tea mushroom", "tea fungus"];
    const day = "day56";
    const dayNum = 56;

    const categories = ["Physical phenomena",
        "Causality",
        "Chaos theory",
        "Determinism",
        "Metaphors referring to insects",
    ]

    const blurb = [`In chaos theory, the butterfly effect is the sensitive dependence on initial conditions in which a small change in one state of a deterministic nonlinear system can result in large differences in a later state.`, `The term is closely associated with the work of the mathematician and meteorologist Edward Norton Lorenz. He noted that the butterfly effect is derived from the example of the details of a tornado (the exact time of formation, the exact path taken) being influenced by minor perturbations such as a distant butterfly flapping its wings several weeks earlier. Lorenz originally used a seagull causing a storm but was persuaded to make it more poetic with the use of a butterfly and tornado by 1972. He discovered the effect when he observed runs of his weather model with initial condition data that were rounded in a seemingly inconsequential manner. He noted that the weather model would fail to reproduce the results of runs with the unrounded initial condition data. A very small change in initial conditions had created a significantly different outcome.`];
    const img = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Double_pendulum_simultaneous_realisations.ogv/960px--Double_pendulum_simultaneous_realisations.ogv.jpg";
    
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
