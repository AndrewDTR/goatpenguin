import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "WinRAR";
    const friendly = "WinRAR";
    const acceptedGuesses = ["winrar", "win rar"];
    const day = "day52";
    const dayNum = 52;

    const categories = ["1995 software",
        "Disk image extractors",
        "Windows-only trialware",
        "File archivers",
        "Windows compression software",
    ]

    const blurb = `WinRAR is a trialware file archiver and compression utility for Microsoft Windows, developed by Eugene Roshal of win.rar GmbH (RARLAB) since 1995. It can create and view archives in RAR (a format created by Roshal) or ZIP file formats, and unpack numerous archive file formats. To enable the user to test the integrity of archives, WinRAR embeds CRC-32 or BLAKE2 checksums for each file in each archive. WinRAR supports creating encrypted, multi-part and self-extracting archives.`;
    const img = "https://upload.wikimedia.org/wikipedia/en/4/43/WinRAR_7.10_screenshot.png";

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
