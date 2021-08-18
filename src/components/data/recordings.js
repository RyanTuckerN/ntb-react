class Recording {
  constructor(title, year, band, url, photo) {
    this.title = title
    this.year = year
    this.band = band
    this.url = url
    this.photo = photo
  }
}

const TwoParts = new Recording(
  "Two Parts",
  2019,
  "The Tucker Brothers",
  "https://tuckerbrothersgroup.bandcamp.com/album/two-parts",
  "https://f4.bcbits.com/img/a0337381415_16.jpg"
)

const WriitingPrompts = new Recording(
  "Writing Prompts",
  2017,
  "The Tucker Brothers",
  "https://open.spotify.com/album/174eimMiehT3aRA6XzrGnI",
  "https://f4.bcbits.com/img/a0012220658_16.jpg"
)
const Nine = new Recording(
  "Nine is the Magic Number",
  2015,
  "The Tucker Brothers",
  "https://tuckerbrothersgroup.bandcamp.com/album/nine-is-the-magic-number",
  "https://f4.bcbits.com/img/a1897186986_16.jpg"
)
const SpaceOcean = new Recording(
  "Space Ocean",
  2021,
  "Eliot Bigger",
  "https://eliotbigger.bandcamp.com/album/space-ocean",
  "https://f4.bcbits.com/img/a1212299151_16.jpg"
)
const EndtimeOverture = new Recording(
  'Endtime Overture',
  2020,
  'Clint Breeze and the Groove',
  'https://clintbreeze.bandcamp.com/album/endtime-overture',
  'https://f4.bcbits.com/img/a2159801753_16.jpg'
)
const Arrival = new Recording(
  'Arrival',
  2019,
  'Clint Breeze and the Groove',
  'https://clintbreeze.bandcamp.com/album/arrival', 
  'https://f4.bcbits.com/img/a1867655297_16.jpg'
)
const JazzOnCanvas = new Recording(
  'Jazz on Canvas',
  2015,
  'Indianapolis Jazz Collective',
  'https://www.allmusic.com/album/jazz-on-canvas-mw0002879982?1629210339857',
  'https://images-na.ssl-images-amazon.com/images/I/81D%2BRxjqnwL._SL1425_.jpg'
)
const ThreeMuses = new Recording(
  'Three Muses',
  2015,
  'Sophie Faught',
  'https://sophiefaught.bandcamp.com/album/three-muses',
  'https://f4.bcbits.com/img/a1275293635_16.jpg'
)
const DayOne = new Recording(
  'Day One', 2013, 'Sophie Faught', 'https://sophiefaught.bandcamp.com/album/day-one', 'https://f4.bcbits.com/img/a2465219673_16.jpg'
)
const NappyHead = new Recording(
  'Nappy Head', 2016, 'Clint Breeze', 'https://fromthegroundupmusic.bandcamp.com/album/clint-breeze-nappy-head', 'https://f4.bcbits.com/img/a3652121452_16.jpg'
)

const recordings = [TwoParts, WriitingPrompts, Nine, SpaceOcean, EndtimeOverture, Arrival, JazzOnCanvas, ThreeMuses, DayOne, NappyHead]

console.log(recordings)

export default recordings
