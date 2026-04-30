import AnnouncementBar from '../components/global/AnnouncementBar'
import Navigation from '../components/global/Navigation'
import Footer from '../components/global/Footer'
import ComesSayHello from '../components/global/ComesSayHello'

// Press grid - every entry links out to the actual article or video.
// Title is the publication, blurb is a few-word summary of the piece.
const press = [
  { title: 'TODAY', blurb: 'Gluten-free bagels segment' },
  { title: "Arizona's Family", blurb: 'Restaurant feature' },
  { title: 'The Times of Israel', blurb: 'Gluten-free bagel restaurant' },
  { title: 'West Side Rag', blurb: '"Westside Wednesdays" profile' },
  { title: 'Wheat Out', blurb: 'International coverage' },
  { title: "Yeah That's Kosher", blurb: 'Nationwide kosher GF guide' },
  { title: 'The Trail to Health', blurb: 'NYC gluten-free dining' },
  { title: 'Emunah', blurb: 'Founder interview' },
  { title: 'New York Press', blurb: 'Kosher gluten-free offerings' },
  { title: 'West Side Herald', blurb: 'Business profile' },
  { title: 'I Love the Upper West Side', blurb: 'Best cheesecake feature' },
  { title: 'Eat It', blurb: 'Show appearance' },
  { title: 'Gluten-Free Living', blurb: 'Innovation coverage' },
  { title: 'Gluten Free Mollie', blurb: 'NYC dining guide' },
  { title: 'Gluten-Free Haven', blurb: 'Must-try foods in NYC' },
  { title: 'Broadway World', blurb: 'Chef spotlight: Orly Gottesman' },
  { title: 'Glutenfrei Durch', blurb: 'Café & bakery feature' },
  { title: 'Haaretz', blurb: 'Israeli chef opens NYC GF spot' },
  { title: "Crain's New York Business", blurb: 'Goldbelly partnership' },
  { title: 'GFF Magazine', blurb: 'Gluten-free pastry flour' },
  { title: 'Secret NYC', blurb: 'Best BEC in NYC' },
  { title: 'Edible', blurb: '"Bagels with Everything but the Gluten"' },
  { title: 'East Side Feed', blurb: 'Upper East Side expansion' },
  { title: 'LA List', blurb: 'Celiac dining in Los Angeles' },
  { title: 'Santa Monica Mirror', blurb: 'New GF bakery opening' },
  { title: 'Bergen Magazine', blurb: 'Snacks for celiac sufferers' },
  { title: 'New York Simply', blurb: 'Best bakeries in Chelsea' },
  { title: 'USA Today 10 Best', blurb: 'Top GF bakeries nationwide' },
  { title: 'The Strategist', blurb: 'Celebrity favorites feature' },
  { title: 'The New York Times', blurb: 'Gluten-free friendly restaurants' },
  { title: 'NY Jewish Week', blurb: 'Kosher GF bakery profile' },
  { title: 'Live with Kelly and Ryan', blurb: 'Instagram feature' },
  { title: '36 to Watch (JTA)', blurb: 'Emerging entrepreneur' },
  { title: 'NY Live', blurb: 'Television segment' },
  { title: 'Patch', blurb: 'Upper West Side bagel shop' },
  { title: 'Eater Los Angeles', blurb: 'Venue coverage' },
  { title: 'The Infatuation', blurb: 'Restaurant review' },
  { title: 'Tripping Kosher', blurb: 'NYC dining guide' },
  { title: 'The Nosher', blurb: 'GF kosher restaurants' },
  { title: 'US Weekly', blurb: 'Celebrity lifestyle' },
  { title: 'Eater New York', blurb: 'NYC dining guide' },
  { title: 'Jewish Link NJ', blurb: 'Community honor' },
  { title: 'Apple Podcasts', blurb: '"Someone\'s Thunder" episode' },
  { title: 'Scripps News', blurb: 'Minority-owned business feature' },
  { title: 'Wix Blog', blurb: 'Business platform feature' },
]

export default function PressPage() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navigation />

      {/* Page header strip - matches /about styling */}
      <div className="bg-wire-bg py-16">
        <div className="max-w-[1440px] mx-auto px-6">
          <h1 className="text-4xl font-semibold">Press</h1>
        </div>
      </div>

      {/* Hero quote section - mirrors the AboutUsPage hero layout
          (left: image, right: section label + large quote + body) */}
      <div className="max-w-[1440px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="img-placeholder aspect-[4/3] text-xs">Press hero image</div>
          <div>
            <p className="section-label mb-4">In the news</p>
            <blockquote className="text-3xl font-semibold leading-tight mb-6">
              "Everyone wants to do something in their lives that is meaningful."
            </blockquote>
            <p className="text-sm text-wire-dark leading-relaxed mb-4">
              The series of events that happened in my life, from meeting Josh to his celiac diagnosis to our travels around the world, culminated in this moment.
            </p>
            <p className="text-sm text-wire-mid">- Orly Gottesman, founder</p>
          </div>
        </div>
      </div>

      {/* Press grid - image / title / short blurb. Each card links out to the
          actual article or video. */}
      <div className="border-t border-wire-pale py-16">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-3xl font-semibold">Featured coverage</h2>
            <p className="text-sm text-wire-mid">{press.length} stories</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 gap-y-8">
            {press.map((p) => (
              <a
                key={p.title}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="img-placeholder aspect-[4/3] mb-4 relative overflow-hidden">
                  <span className="placeholder-badge absolute top-2 right-2 w-7 h-7 bg-white border border-wire-pale flex items-center justify-center group-hover:bg-wire-black group-hover:border-wire-black transition-colors">
                    <svg className="w-3 h-3" fill="none" stroke="#444" viewBox="0 0 24 24" style={{ color: undefined }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
                <p className="text-sm font-semibold text-wire-black group-hover:underline mb-1">{p.title}</p>
                <p className="text-xs text-wire-mid leading-relaxed">{p.blurb}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      <ComesSayHello />
      <Footer />
    </div>
  )
}
