import AnnouncementBar from '../components/global/AnnouncementBar'
import Navigation from '../components/global/Navigation'
import Footer from '../components/global/Footer'
import ComesSayHello from '../components/global/ComesSayHello'

const founders = [
  { name: 'Orly Gottesman', title: 'Founder', quote: '"There are bakeries that produce more, but none that care more."' },
  { name: 'David Gottesman', title: 'Founder', quote: '"We had one goal: make food that everyone loves, regardless of limitations."' },
  { name: 'Maya Cohen', title: 'Head of Catering', quote: '"The best events start with food that feels like home."' },
  { name: 'Rachel Katz', title: 'Head Baker', quote: '"Every batch is a chance to get closer to perfect."' },
]

const gfPoints = [
  { label: 'Hub facility', body: 'Our facility is a dedicated gluten-free kitchen. No shared surfaces, no exceptions.' },
  { label: 'Proprietary test routine', body: 'Each batch undergoes third-party testing to below 10ppm.' },
  { label: 'Certified facility', body: 'We are certified by the Gluten Intolerance Group (GIG), the industry standard.' },
]

const kosherPoints = [
  { label: 'Under OU supervision', body: 'Certified by the Orthodox Union (OU), the most recognized Kosher authority.' },
  { label: 'Closed Saturdays', body: 'We observe Shabbat - all locations closed every Saturday.' },
  { label: 'Shabbat holidays', body: 'All locations are closed on Passover (Pesach) and other major Jewish holidays.' },
]

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navigation />

      {/* Page header */}
      <div className="bg-wire-bg py-16">
        <div className="max-w-[1440px] mx-auto px-8">
          <h1 className="text-4xl font-semibold">About us</h1>
        </div>
      </div>

      {/* Hero quote section */}
      <div className="max-w-[1440px] mx-auto px-8 py-16">
        <div className="grid grid-cols-2 gap-12 items-start">
          <div className="img-placeholder aspect-[4/3] text-xs">Bakery hero image</div>
          <div>
            <p className="section-label mb-4">Our story</p>
            <blockquote className="text-3xl font-semibold leading-tight mb-6">
              "Brunch isn't just for weekends - it's a daily indulgence"
            </blockquote>
            <p className="text-sm text-wire-dark leading-relaxed mb-4">
              Modern Bread & Bagels was established in 2018 with a simple but uncommon idea: that exceptional quality and inclusive baking go hand in hand. In our kitchens, gluten-free isn't a constraint, it's the starting point. Everything we make - from our legendary New York-style bagels to our holiday rugelach - is crafted with that ethos at the center.
            </p>
            <p className="text-sm text-wire-dark leading-relaxed mb-4">
              We've built a family of bakeries across New York, New Jersey, and California, and we've watched those neighborhoods become ours. Our regulars know our bakers by name. Parents bring their kids in every Sunday. Offices order catering every Friday. That familiarity is something we've worked hard to earn and something we protect every day.
            </p>
            <p className="text-sm text-wire-dark leading-relaxed mb-4">
              Modern is also certified Kosher under OU supervision, giving our observant customers confidence that every item they pick up meets the highest standards - not just in taste, but in trust.
            </p>
            <p className="text-sm text-wire-dark leading-relaxed">
              Experience our commitment to extraordinary baked goods at any of our Modern Bread & Bagel locations.
            </p>
            <button className="mt-8 px-8 py-2.5 border border-wire-black text-sm font-medium hover:bg-wire-black hover:text-white transition-colors">
              Continue
            </button>
          </div>
        </div>
      </div>

      {/* Origin story */}
      <div className="border-t border-wire-pale py-16">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-semibold leading-tight mb-6">
                Modern Bread and Bagel was born out of love. Love for food, travel, and each other.
              </h2>
            </div>
            <div className="text-sm text-wire-dark leading-relaxed space-y-4">
              <p>
                Orly Gottesman was diagnosed with celiac disease in 2015. At the time, she was working as a pastry chef in New York, surrounded by the foods she loved - and suddenly unable to eat any of them. The gluten-free alternatives she found were, without exception, disappointing.
              </p>
              <p>
                She spent three years in her home kitchen developing recipes from scratch. Testing flour blends. Experimenting with fermentation. Rebuilding the structure of bread without the protein that makes bread what it is. Her husband David - her business partner in every sense - supported the project until it became an obsession, and then a mission.
              </p>
              <p>
                In 2018, they opened the first Modern Bread & Bagels on the Upper West Side of Manhattan. The line stretched around the block on day one, and it hasn't shortened since. People who hadn't eaten a real bagel in years wept. That's not an exaggeration.
              </p>
              <p>
                All of this to say: we know what it means to miss food. And we know what it means to get it back.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Straight from our founders */}
      <div className="border-t border-wire-pale py-16 bg-wire-bg">
        <div className="max-w-[1440px] mx-auto px-8">
          <p className="section-label mb-8">Straight from our founders</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {founders.map(f => (
              <div key={f.name} className="bg-white border border-wire-pale p-6">
                <div className="img-placeholder aspect-square mb-4 text-xs">Portrait</div>
                <p className="font-semibold text-sm mb-0.5">{f.name}</p>
                <p className="text-xs text-wire-mid mb-4">{f.title}</p>
                <p className="text-xs text-wire-dark leading-relaxed italic">{f.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 100% Gluten Free */}
      <div className="border-t border-wire-pale py-16">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-2 gap-16">
            <div>
              <p className="section-label mb-3">100% gluten free</p>
              <h2 className="text-3xl font-semibold mb-6">Our gluten-free commitment</h2>
              <p className="text-sm text-wire-dark leading-relaxed mb-8">
                We are a dedicated gluten-free facility - meaning no wheat, barley, or rye ever enters our kitchens in any form. Not in ingredients, not in equipment, not in packaging, not from employees. This matters because cross-contamination is the single biggest risk for people with celiac disease, and we take it seriously.
              </p>
              <div className="space-y-5">
                {gfPoints.map(p => (
                  <div key={p.label}>
                    <p className="font-semibold text-sm mb-1">{p.label}</p>
                    <p className="text-sm text-wire-mid">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="img-placeholder aspect-[4/3] text-xs">Gluten-free kitchen photo</div>
          </div>
        </div>
      </div>

      {/* Certified Kosher */}
      <div className="border-t border-wire-pale py-16 bg-wire-bg">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-2 gap-16">
            <div>
              <p className="section-label mb-3">Certified Kosher</p>
              <h2 className="text-3xl font-semibold mb-6">Our Kashrut standards</h2>
              <p className="text-sm text-wire-dark leading-relaxed mb-8">
                Modern Bread & Bagels holds Kosher certification under the supervision of the Orthodox Union (OU). Every product, ingredient, and process in our kitchens meets the strictest Kosher standards.
              </p>
              <div className="space-y-5">
                {kosherPoints.map(p => (
                  <div key={p.label}>
                    <p className="font-semibold text-sm mb-1">{p.label}</p>
                    <p className="text-sm text-wire-mid">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="img-placeholder aspect-[4/3] text-xs">Kosher kitchen photo</div>
          </div>
        </div>
      </div>

      <ComesSayHello />
      <Footer />
    </div>
  )
}
