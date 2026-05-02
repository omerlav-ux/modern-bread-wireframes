import { Link } from 'react-router-dom'
import AnnouncementBar from '../components/global/AnnouncementBar'
import Navigation from '../components/global/Navigation'
import Footer from '../components/global/Footer'
import ComesSayHello from '../components/global/ComesSayHello'

const customers = [
  {
    quote: '“these are hands down the most amazing gluten free bagels i have ever tried.”',
    name: 'Christina',
  },
  {
    quote: '“So beyond grateful my kids know what a real NY bagel tastes like.”',
    name: 'Kristin',
  },
  {
    quote: '“I\'m not even gluten-free and would choose this bread over nearly every gluteny bread available.”',
    name: 'Benjamin',
  },
  {
    quote: '“I\'m not even gluten-free and would choose this bread over nearly every gluteny bread available.”',
    name: 'Benjamin',
  },
]

const gfBoxes = [
  {
    title: 'Nut-free',
    body: 'Our facility is also entirely nut-free — safe for those with nut allergies.',
  },
  {
    title: 'Proprietary Ancient Grain blends',
    body: 'Our blends are developed for real texture and chew.',
  },
  {
    title: 'Dedicated facility',
    body: 'No shared equipment with gluten-containing products. Ever.',
  },
]

const kosherBoxes = [
  {
    title: 'Certification',
    body: (
      <>
        <p className="mb-0">Certified by the International Kosher Council (IKC) under Rabbi Zev Schwartz.</p>
        <p className="text-wire-mid mt-2">
          For questions regarding certification contact Rabbi Zev directly at 718-635-1037.
        </p>
      </>
    ),
  },
  {
    title: 'Shabbat & holidays',
    body: (
      <>
        <p className="mb-0">All locations are closed on Saturdays.</p>
        <p className="text-wire-mid mt-2">
          Special hours apply for Passover, Rosh Hashanah, Yom Kippur, Sukkot and Chanukah. Check individual
          location pages for details.
        </p>
      </>
    ),
  },
]

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navigation />

      <div className="bg-[#d1d1d1] min-h-[400px] flex flex-col justify-end pb-10 pt-24 px-6 max-w-[1920px] mx-auto">
        <div className="max-w-[1440px] mx-auto w-full">
          <h1 className="text-[55px] leading-[1.2] font-normal text-wire-black">About us</h1>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="img-placeholder min-h-[480px] lg:min-h-[640px] w-full text-xs">Bakery hero image</div>
          <div className="flex flex-col gap-5 text-left">
            <p className="text-lg text-[#7b7b7b]">Our story</p>
            <blockquote className="text-[55px] leading-[1.2] font-normal text-wire-black">
              “Brunch isn&apos;t just for weekends - it&apos;s a daily indulgence”
            </blockquote>
            <div className="text-lg text-wire-black leading-[1.4] space-y-4">
              <p>
                Modern Bread & Bagels was born from a simple belief: that gluten-free doesn&apos;t mean compromise.
                We set out to create bagels so good that nobody would miss the gluten. Our menu is entirely
                gluten-free and nut-free, offering a safe and delicious experience for all. Every bagel, bread and
                pastry is made with the same care as a neighborhood bakery that&apos;s been doing it for generations.
                Everything is baked fresh daily and made in-house.
              </p>
              <p>
                With locations on both coasts in LA, NYC, and NJ - and now shipping nationwide - the mission has never
                changed: make the best baked goods, full stop.
              </p>
              <p>
                Every month, we develop fun and unique specials because it&apos;s our mission to recreate treats and
                items that may be missed when living a gluten-free, nut-free lifestyle. Exclusive to our Upper East
                Side location, we also offer pan pizzas by the slice, with plans to bring this option to more of our
                locations soon!
              </p>
              <p>
                We take pride in our signature blend of coffee beans, crafted especially for us, delivering exceptional
                espresso drinks to complement your meal.
              </p>
              <p>Experience our commitment to artisan production—come visit us at Modern Bread & Bagel!</p>
            </div>
            <Link to="/contact" className="btn-secondary inline-block self-start mt-2">
              Contact us
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-wire-pale">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="flex flex-col gap-5 text-left order-2 lg:order-1">
              <p className="text-lg text-[#7b7b7b]">Meet Orly & Josh</p>
              <h2 className="text-[55px] leading-[1.2] font-normal text-wire-black">
                Modern Bread and Bagel was born out of love.
                <br />
                Love for food, travel, and each other.
              </h2>
              <div className="text-lg text-wire-black leading-[1.4] space-y-4">
                <p>
                  When Orly Gottesman&apos;s husband, Josh Borenstein, was diagnosed with celiac disease, she became
                  determined to recreate his favorite foods without gluten, but with all the flavor and texture he
                  loved. The two met in an a cappella group at NYU and quickly bonded over music and their shared
                  passion for food.
                </p>
                <p>
                  After college, they moved to Paris, where Josh launched a startup and Orly, unable to work without a
                  visa, began apprenticing at a local pastry shop. What started as a way to learn the classics soon
                  ignited a passion for baking. Orly continued her culinary training at Le Cordon Bleu in Sydney,
                  where she also conducted an independent study in gluten-free patisserie. After years of research,
                  she created Blends by Orly - a line of gluten-free flour blends and baking mixes now used by
                  professional chefs, bakeries, and home bakers alike.
                </p>
                <p>
                  While walking through the Upper West Side, Josh spotted a bagel shop for rent and turned to Orly:
                  &quot;You make the most amazing gluten-free food - it&apos;s time to open our own place.&quot; That
                  spark became Modern Bread and Bagel.
                </p>
                <p>
                  At Modern, everything is 100% gluten-free and inspired by the flavors of the cities Orly and Josh
                  have called home - New York, Paris, Sydney, and Tel Aviv. From freshly baked bagels to signature
                  pastries and vibrant brunch dishes, Modern is redefining gluten-free food - one bite at a time.
                </p>
                <p>Come visit us in NYC, LA, or find us online to taste what gluten-free should be.</p>
              </div>
            </div>
            <div className="img-placeholder min-h-[480px] lg:min-h-[640px] w-full text-xs order-1 lg:order-2">
              Orly & Josh image
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-wire-pale bg-white px-6 py-14 lg:py-[75px]">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-[32px] font-medium leading-[1.4] text-wire-black mb-10">Straight from our customers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7">
            {customers.map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className="bg-[#f6f6f6] p-7 min-h-[162px] flex flex-col justify-between gap-4"
              >
                <p className="text-lg font-semibold leading-[1.4] text-wire-black">{c.quote}</p>
                <p className="text-lg font-normal leading-[1.4] text-wire-black">{c.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-wire-pale">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-5">
                <p className="text-lg text-[#7b7b7b]">Our gluten free commitment</p>
                <h2 className="text-[55px] leading-[1.2] font-normal text-wire-black">100% gluten free</h2>
                <div className="text-lg text-wire-black leading-[1.4] space-y-4">
                  <p>
                    Our entire menu - every bagel, every bread, every pastry - is made in our dedicated gluten-free,
                    nut-free kitchen. If you&apos;re celiac, highly sensitive, or simply choosing to live gluten-free,
                    you can order anything on our menu with complete confidence.
                  </p>
                  <p>100% dedicated facility with zero shared equipment, zero cross-contamination risk, and zero compromises.</p>
                </div>
              </div>
              <div className="flex flex-col gap-[22px]">
                {gfBoxes.map((box) => (
                  <div
                    key={box.title}
                    className="border border-[#7b7b7b] px-5 py-4 flex flex-col gap-3 max-w-[437px]"
                  >
                    <p className="text-lg font-semibold leading-[1.4]">{box.title}</p>
                    <p className="text-lg leading-[1.4]">{box.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="img-placeholder min-h-[480px] lg:min-h-[640px] w-full text-xs">Gluten-free kitchen photo</div>
          </div>
        </div>
      </div>

      <div className="border-t border-wire-pale bg-wire-bg">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-5">
                <p className="text-lg text-[#7b7b7b]">Kashrut</p>
                <h2 className="text-[55px] leading-[1.2] font-normal text-wire-black">Certified Kosher.</h2>
                <div className="text-lg text-wire-black leading-[1.4] space-y-4">
                  <p>
                    All Modern Bread & Bagels products and locations are under the Kosher certification of IKC (Rabbi Zev
                    Schwartz).
                  </p>
                  <p>
                    Click{' '}
                    <a href="#" className="underline hover:text-wire-dark">
                      HERE
                    </a>{' '}
                    to watch a Facebook live interview discussing our kashrut with Great Kosher Restaurant Foodies.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[22px]">
                {kosherBoxes.map((box) => (
                  <div
                    key={box.title}
                    className="border border-[#7b7b7b] px-5 py-4 flex flex-col gap-3 max-w-[437px]"
                  >
                    <p className="text-lg font-semibold leading-[1.4]">{box.title}</p>
                    <div className="text-lg leading-[1.4]">{box.body}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="img-placeholder min-h-[480px] lg:min-h-[640px] w-full text-xs">Kosher kitchen photo</div>
          </div>
        </div>
      </div>

      <ComesSayHello showEyebrow={false} buttonVariant="outline" />
      <Footer />
    </div>
  )
}
