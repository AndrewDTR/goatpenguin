import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "Ambigram";
    const friendly = "Ambigram";
    const acceptedGuesses = ["ambigram"];
    const day = "day49";
    const dayNum = 49;

    const categories = ["1983 neologisms",
        "Calligraphy",
        "Constrained writing",
        "Wordplay",
        "Rotational symmetry",
    ]

    const blurb = [`An ambigram is a calligraphic composition of glyphs (letters, numbers, symbols or other shapes) that can yield different meanings depending on the orientation of observation. Most ambigrams are visual palindromes that rely on some kind of symmetry, and they can often be interpreted as visual puns. Although the concept is older, the term "ambigram" was coined by Douglas Hofstadter in 1983–1984.`, `Most often, ambigrams appear as visually symmetrical words. When flipped, they remain unchanged, or they mutate to reveal another meaning. "Half-turn" ambigrams undergo a point reflection (180-degree rotational symmetry) and can be read upside down (for example, the word "swims"), while mirror ambigrams have axial symmetry and can be read through a reflective surface like a mirror. Many other types of ambigrams exist.`]
    const img = "https://upload.wikimedia.org/wikipedia/commons/4/44/Ambigram_of_the_word_ambigram_-_rotation_animation.gif";

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
