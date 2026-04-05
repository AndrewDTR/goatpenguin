import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "LaTeX";
    const friendly = "LaTeX";
    const acceptedGuesses = ["latex"];
    const day = "day73";
    const dayNum = 73

    const categories = ["1983 software",
        "Open formats",
        "Declarative markup languages",
        "Free typesetting software",
        "Formula editors",
    ]

    const blurb = `LaTeX is a software system for typesetting documents, based on the TeX typesetting system. LaTeX provides a high-level, descriptive markup language to use TeX more easily: TeX handles the document layout, while LaTeX handles the content side for document processing. Because the plain TeX formatting commands are elementary, it provides authors with ready-made commands for formatting and layout requirements such as chapter headings, footnotes, cross-references and bibliographies.`;
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
