/*
 * reviewData.ts — Structured content for the Maestro Renovation review.
 * All image/video URLs point to the original site's hosted assets.
 */

const BASE = "https://www.maestro-renovation-review.com";

export interface Exhibit {
  id: string;
  src: string;
  caption: string;
  type: "image" | "video";
}

export interface ReviewSection {
  id: string;
  title: string;
  severity: "critical" | "major" | "minor";
  content: string[];
  exhibits: Exhibit[];
  subsections?: ReviewSection[];
}

export const siteInfo = {
  title: "Customer Review of Maestro Renovation",
  subtitle: "An Independent, Documented Account of a Home Renovation Experience",
  company: "Maestro Renovation LLC",
  companyUrl: "maestro-renovation.com",
  companyAddress: "27 Chatham St, Lynn, MA 01902, United States",
  legalNote:
    "This review reflects my personal experience and opinions as a homeowner. All statements are based on events I personally observed, documents I received, and work performed in my home. Others may have different experiences.",
  disclaimer:
    "This is an independent customer review of Maestro Renovation LLC (maestro-renovation.com), located at 27 Chatham St, Lynn, MA 01902, United States. This website reflects my own personal experience and documented interactions with the company. It is not affiliated with, endorsed by, or sponsored by Maestro Renovation in any way.",
};

export const introContent = [
  "This is my personal review of Maestro Renovation LLC, whom I hired to do a complete renovation of my two-story house. They changed the flooring, demolished several walls, and redid two of my bathrooms, which included electrical, plumbing, and heating-related work as part of the renovation. Unfortunately, I couldn't find a good way to post this review, so I created this page to share my personal, honest opinion based on my experience.",
];

export const overallExperience = [
  "Working with their team was very difficult. I had to monitor everything daily and call the company's owner several times a day. As a homeowner, I had to do a lot of handholding to ensure the work got done and met the standard. This was especially challenging with small kids at home. Their team would frequently complain that I was asking for too many fixes or being too demanding, but on this page, I hope to at least share some of the concerns I had about their work during the many months they worked on my house.",
];

export const sections: ReviewSection[] = [
  {
    id: "licenses-permits",
    title: "Licenses and Permits",
    severity: "critical",
    content: [
      "One of the most significant issues I encountered was that the required permits were not obtained before work began. While working on the first floor, the City of Watertown discovered that no permits had been secured for any of the work. The City of Watertown later confirmed that electrical, plumbing, and other permits were required but had not been secured. Ultimately, the city put a Stop-Work order, making any future work impossible until the permits were secured.",
      "While this was transpiring, I was on vacation with my family, so imagine how it felt when we came back to our home to find the first floor completely demolished, and no work could be done on it.",
    ],
    exhibits: [
      {
        id: "A",
        src: `${BASE}/img/content/no-permit.png`,
        caption: "Stop Work Order issued by City of Watertown due to lack of permits",
        type: "image",
      },
      {
        id: "B",
        src: `${BASE}/video/home-condition.mp4`,
        caption:
          "Video showing the condition of my home when I returned from vacation to find out that no work could be done due to lack of permits",
        type: "video",
      },
    ],
  },
  {
    id: "timing-timelines",
    title: "Timing and Timelines",
    severity: "major",
    content: [
      'If you have a long-term project with their team, you might run into the same time management issues I did. Although we would agree for them to come at a specific time (let\'s say 9 am), almost always, they would come at random hours. It could be 10 am, 11 am, or in the afternoon. While they had the flexibility to come on some Saturdays, their arrivals were inconsistent and unpredictable.',
      "Talking about the project's timelines was pointless, since we would constantly run over what we originally planned. While it's understandable that things change along the way, the most frustrating thing was the lack of focus: you might have just one person working on your project at a time, while there could have been more people doing the work.",
      "I will give a concrete example. Their team agreed to repaint the kitchen cabinets. It's obviously an inconvenience for us as a family, since we couldn't use the kitchen during the process. However, Maestro Renovation agreed to finish everything in two days. So, the first day a single person comes, they begin their work, and it becomes clear to me right away that there is no way they could finish this entire painting job in just two days. So I had to call the owner of Maestro Renovation and ask them to send this guy some help. They agreed, but the project still took longer than expected, even with additional help. Again, this should have been handled by the company, not left to me, a homeowner, to figure out how many people are needed to do the job.",
    ],
    exhibits: [],
  },
  {
    id: "incorrect-plumbing",
    title: "Incorrect Plumbing",
    severity: "critical",
    content: [
      "One significant challenge in finding a licensed plumber after the city's Stop Work order was that some plumbing work had already been performed before permits were obtained, and a licensed plumber was later required to inspect and correct the installation.",
    ],
    exhibits: [
      {
        id: "C",
        src: `${BASE}/img/content/IMG_0829.jpg`,
        caption: "Incorrect piping that had to be later fixed by a licensed plumber",
        type: "image",
      },
      {
        id: "D",
        src: `${BASE}/img/content/IMG_2062.jpg`,
        caption: "Piping after inspection and correction by a licensed plumber",
        type: "image",
      },
    ],
  },
  {
    id: "water-shutoff",
    title: "Forgetting to Turn Off the Water",
    severity: "major",
    content: [
      "As part of the project, Maestro Renovation cut a pipe that connects one of the kitchen sinks to the sewer, leaving it hanging on the open wall. Because they didn't shut off the faucet, when we used the sink, water was pouring down the wall. Fortunately, I caught it fast enough:",
    ],
    exhibits: [
      {
        id: "E",
        src: `${BASE}/img/content/IMG_0825.jpg`,
        caption: "Water pouring down the wall because the pipe was cut and the water wasn't turned off",
        type: "image",
      },
    ],
  },
  {
    id: "electrical-scare",
    title: "Electrical Scare",
    severity: "critical",
    content: [
      "As part of the project, they removed a kitchen island that had several outlets. During the demolition process, Maestro Renovation didn't fully disconnect and secure the wire, leaving it hanging in the basement. One day, their workers were working in the basement when one of them touched a wire, which connected to a copper pipe, sparking and making a hole in the pipe. Fortunately, we drained the water fairly quickly, and there wasn't much water damage, but this unsecured wire created a potentially dangerous situation. It's still not fully disconnected, but at least it's isolated:",
    ],
    exhibits: [
      {
        id: "F",
        src: `${BASE}/img/content/IMG_2058.jpg`,
        caption: "Copper pipe with a hole patched caused by an unsecured electrical wire touching it",
        type: "image",
      },
      {
        id: "G",
        src: `${BASE}/img/content/IMG_2059.jpg`,
        caption: "Wire that was originally left unsecured and caused the hole in the copper pipe",
        type: "image",
      },
    ],
  },
  {
    id: "flooring",
    title: "Flooring",
    severity: "major",
    content: [
      "This is one of the most frustrating issues that I am dealing with to this day. In my opinion, the flooring installation resulted in persistent squeaking despite repeated attempts to fix it. Although I was very clear about how important it is to me to have new, silent flooring, as soon as they put down the first set, I could hear squeaks nonstop. I can't tell you how many hours they spent trying to fix it, but now it has to be done from under the floor. I will just say that the floor is still very loud while walking on it, and I will leave a few pictures to illustrate condition of the work as it appears from underneath:",
    ],
    exhibits: [
      {
        id: "H",
        src: `${BASE}/img/content/1.jpg`,
        caption: "Flooring installation as seen from underneath #1",
        type: "image",
      },
      {
        id: "I",
        src: `${BASE}/img/content/IMG_2064.jpg`,
        caption: "Flooring installation as seen from underneath #2",
        type: "image",
      },
      {
        id: "J",
        src: `${BASE}/img/content/IMG_2065.jpg`,
        caption: "Flooring installation as seen from underneath #3",
        type: "image",
      },
      {
        id: "K",
        src: `${BASE}/img/content/IMG_1972.jpg`,
        caption: "Flooring installation as seen from underneath #4",
        type: "image",
      },
    ],
  },
  {
    id: "garbage",
    title: "Garbage Disposal",
    severity: "minor",
    content: [
      "As a part of the renovation project, Maestro Renovation replaced two small parts of shingles on my roof. During the replacement, they had to throw away some old shingles, nails, and other garbage. So one of their workers went to my parking lot, where I had the garbage bins. There I had three storage bins and two garbage bins (one for recycling and one for landfill).",
      "In this instance, the worker placed garbage into a storage bin rather than the designated trash bins.",
    ],
    exhibits: [
      {
        id: "L",
        src: `${BASE}/img/content/IMG_2069.jpg`,
        caption: "My parking lot with garbage and storage bins",
        type: "image",
      },
      {
        id: "M",
        src: `${BASE}/img/content/IMG_2071.jpg`,
        caption: "Garbage mistakenly placed in a storage bin instead of trash bins",
        type: "image",
      },
    ],
  },
  {
    id: "trims-baseboards",
    title: "Trims and Baseboards",
    severity: "minor",
    content: [
      'Baseboards and trims are an important part of any renovation. However, in my project, I had to talk to this contractor again to make sure they fix the trim and baseboards around the fireplace. While I understand they attempted to "save" the original trim around the fireplace, I wouldn\'t call this an acceptable end product:',
    ],
    exhibits: [
      {
        id: "N",
        src: `${BASE}/img/content/6%202.jpg`,
        caption: "Trim around the fireplace that was not properly aligned",
        type: "image",
      },
    ],
  },
  {
    id: "tiling",
    title: "Tiling",
    severity: "major",
    content: [
      "Maestro Renovation renovated both our bathrooms: one on the 2nd floor and another on the 1st floor. What we asked of them on the first floor is to ensure there is a shelf inside the shower wall. We requested that the shelf have two compartments and look exactly like the one upstairs (they did the 2nd floor first).",
      "However, the final result did not match what we had clearly requested, and they made the shelf way smaller, so nothing could fit.",
      "More importantly, instead of making a continuous tile pattern as we had upstairs on the shelf wall, they just slabbed one tile to cover the side of the shelf! It looked completely out of place.",
      "So I requested that they redo the shelf, and they complied. However, even this rework couldn't go without issues. While cutting the shelf, they damaged the tile. As I said earlier, I had to ask them to fix these issues again. I would like to note that they also expressed their grievances because I requested that the shelves be redone, and because of this request, they declined to complete the previously discussed fireplace tiling, stating that my requests were too demanding. Since we had already agreed to tile the fireplace (although no payment has been made yet), I had to cancel the fireplace tile order and handle the returns myself.",
      "While they filed a few of the spots, some still remain, so to achieve the end result I wanted (i.e., proper shelf size and no damage to the tiles), I should have been monitoring their work even more closely.",
    ],
    exhibits: [
      {
        id: "O",
        src: `${BASE}/img/content/shelf.png`,
        caption: "Shower shelf on the 1st floor that is too small and doesn't match the one on the 2nd floor",
        type: "image",
      },
      {
        id: "P",
        src: `${BASE}/img/content/IMG_1300.jpeg`,
        caption: "Shower shelf side view — single tile slabbed to cover the side, completely out of place",
        type: "image",
      },
      {
        id: "Q",
        src: `${BASE}/img/content/2.jpg`,
        caption: "Shower shelf on the 1st floor after rework with damaged tile",
        type: "image",
      },
      {
        id: "R",
        src: `${BASE}/img/content/IMG_2060.jpg`,
        caption: "Shower shelf on the 1st floor after rework with some spots still needing attention",
        type: "image",
      },
    ],
  },
  {
    id: "repainting-door",
    title: "Repainting Door",
    severity: "minor",
    content: [
      "This part of the door had to be repainted about three times, since every time it was painted, they would close the door, so the paint would get stuck to the doorframe, leaving a spot.",
    ],
    exhibits: [
      {
        id: "S",
        src: `${BASE}/img/content/12%202.jpg`,
        caption: "Door that had to be repainted multiple times due to paint getting stuck to the doorframe",
        type: "image",
      },
    ],
  },
  {
    id: "why-fix",
    title: '\u201CWhy Fix If You Will Just Break It?\u201D',
    severity: "major",
    content: [
      "At the end of the project, I noticed that the newly repainted front door had an indentation in its trim from an open deadlock. Instead of fixing it, Maestro Renovation just painted over it.",
      'When I asked to actually fix the indentation, I got a reply to the extent of "Why would you fix it if someone will just break it again?" I was stunned by this reply \u2014 what is the point of making anything look nice if it will just get broken? I replied that since we don\'t usually use the front door (we use the back door most of the time), this indentation should definitely be fixed.',
    ],
    exhibits: [
      {
        id: "T",
        src: `${BASE}/img/content/15%202.jpg`,
        caption: "Indentation on the front door trim that was just painted over instead of being fixed",
        type: "image",
      },
    ],
  },
  {
    id: "caulking",
    title: "Caulking",
    severity: "major",
    content: [
      "Proper caulking is an essential part of any renovation. It prevents moisture and dirt from getting into cracks and makes things look complete. Unfortunately, the caulking work did not hold up and required multiple re-applications, which caused additional stress and ultimately led me to redo some of it myself. Here is an example of caulking around a bathtub. Their team had to redo this caulking several times over a span of approximately six months:",
      "Here is another example of silicone applied to a tile in front of the fireplace, where the material began peeling off within approximately one month:",
    ],
    exhibits: [
      {
        id: "U",
        src: `${BASE}/img/content/IMG_2077.jpg`,
        caption: "Caulking around the bathtub that had to be redone several times over six months",
        type: "image",
      },
      {
        id: "V",
        src: `${BASE}/img/content/IMG_2076.jpg`,
        caption: "Silicone caulking that began peeling off within one month",
        type: "image",
      },
    ],
  },
  {
    id: "straightening-walls",
    title: "Straightening Walls",
    severity: "minor",
    content: [
      "While working on the 2nd floor, they demolished a wall closet to expand the room. It had a sloped ceiling, which had to be extended. Unfortunately, I fully relied on the contractor to do the work and only noticed that the extension was not straight after the walls and ceiling already been painted. Here is the final product:",
    ],
    exhibits: [
      {
        id: "W",
        src: `${BASE}/img/content/10.jpg`,
        caption: "Wall that was not straight after being extended",
        type: "image",
      },
    ],
  },
  {
    id: "siding",
    title: "Siding",
    severity: "minor",
    content: [
      "After Maestro Renovation replaced a larger window in the 2nd-floor bathroom with a smaller one, they needed to fill the gap with siding. Luckily, I had plenty of siding left from another project. Here is how it looked after the contractor cut new siding and filled the hole:",
      "Fortunately, they agreed to fix it while finishing the siding around the other two windows. One could argue this wasn't the finished product, but when the first floor's outdoor wall was opened (to also accommodate window removal), Maestro Renovation did not install any temporary siding to close the wall. I also wasn't asked to put something temporary like this piece of siding since the new siding had to be cut to fill this hole.",
    ],
    exhibits: [
      {
        id: "X",
        src: `${BASE}/img/content/17%202.jpg`,
        caption: "Siding that was cut and installed to fill the gap after window replacement",
        type: "image",
      },
    ],
  },
];

// Table of contents derived from sections
export const tableOfContents = [
  { id: "overview", label: "Overview" },
  { id: "overall-experience", label: "The Overall Experience" },
  ...sections.map((s) => ({ id: s.id, label: s.title })),
];

// Summary stats
export const summaryStats = {
  totalIssues: sections.length,
  criticalIssues: sections.filter((s) => s.severity === "critical").length,
  majorIssues: sections.filter((s) => s.severity === "major").length,
  minorIssues: sections.filter((s) => s.severity === "minor").length,
  totalExhibits: sections.reduce((acc, s) => acc + s.exhibits.length, 0),
};
