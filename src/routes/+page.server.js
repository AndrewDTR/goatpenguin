import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    if (url.host !== 'goatpenguin.com' && url.hostname !== "localhost") {
        redirect(308, 'https://goatpenguin.com');
    }

    const article = "American_Pie_(song)";
    const friendly = "American Pie (song)";
    const acceptedGuesses = ["american pie", "bye bye miss american pie", "miss american pie"];
    const day = "day24";
    const dayNum = 24;

    const categories = ["1971 singles",
        "Billboard Hot 100 number-one singles",
        "Commemoration songs",
        "Songs based on American history",
        "Songs written by Don McLean",
    ]

    const blurb = `"American Pie" is a song by American singer and songwriter Don McLean. Recorded and released in 1971 on the album of the same name, the single was the number-one US hit for four weeks in 1972 starting January 15 after just eight weeks on the US Billboard charts (where it entered at number 69). The song also topped the charts in Australia, Canada, and New Zealand. In the United Kingdom, the single reached number 2, where it stayed for three weeks on its original 1971 release, and a reissue in 1991 reached No. 12. The song was listed as the No. 5 song on the RIAA project Songs of the Century. A truncated version of the song was covered by Madonna in 2000 and reached No. 1 in at least 15 countries, including the UK, Canada, and Australia. At 8 minutes and 42 seconds, McLean's combined version is the sixth longest song to enter the Billboard Hot 100 (at the time of release it was the longest). The song also held the record for almost 50 years for being the longest song to reach number one before Taylor Swift's "All Too Well (10 Minute Version)" broke the record in 2021. Due to its exceptional length, it was initially released as a two-sided 7-inch single. "American Pie" has been described as "one of the most successful and debated songs of the 20th century".`;
    const img = "https://upload.wikimedia.org/wikipedia/en/b/b9/American_Pie_by_Don_McLean.png";

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
