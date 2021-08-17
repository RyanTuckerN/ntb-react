class Recording {
  constructor(title, year, band, desc, url, photo) {
    this.title = title
    this.year = year
    this.band = band
    this.desc = desc
    this.url = url
    this.photo = photo
  }
}

const TwoParts = new Recording(
  "Two Parts",
  2019,
  [
    { name: "Joel Tucker", instrument: "🎸 " },
    { name: "Nick Tucker", instrument: "🎻 " },
    { name: "Sean Imboden", instrument: "🎷 " },
    { name: "Brian Yarde", instrument: "🥁 " },
    { name: "Ellie Pruneau", instrument: "🎹"  },
    { name: "Amanda Gardier", instrument: "🎷 " },
    { name: "Walter Smith III", instrument: "🎷 " },
    { name: "Elena Escudero", instrument: "🎤  " },

  ],
  "Dreamy thoughtful pop jazz lorem ipsum jazz jazz T Bros yada dada.",
  "https://tuckerbrothersgroup.bandcamp.com/album/two-parts",
  "https://f4.bcbits.com/img/a0337381415_16.jpg"
)

const recordings = [TwoParts]

console.log(recordings)

export default recordings
