import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnnouncementBar from '../components/global/AnnouncementBar'
import Navigation from '../components/global/Navigation'
import Footer from '../components/global/Footer'
import ComesSayHello from '../components/global/ComesSayHello'

const amounts = ['$25', '$50', '$100', '$150', '$200']

const favoriteCategories = [
  { title: 'Bagels & breads', href: '/shipping', bg: 'bg-[#f6f6f6]', imgBg: 'bg-[#d1d1d1]' },
  { title: 'Cakes & sweets', href: '/shipping', bg: 'bg-[#f6f6f6]', imgBg: 'bg-[#d1d1d1]' },
  { title: 'Baking mixes', href: '/shipping', bg: 'bg-[#f6f6f6]', imgBg: 'bg-[#d1d1d1]' },
  {
    title: 'Order same day delivery/pickup',
    href: '/home',
    bg: 'bg-[#e8e8e8]',
    imgBg: 'bg-[#aeaeae]',
    cta: true,
  },
]

export default function GiftCardPage() {
  const [amount, setAmount] = useState('$50')
  const [quantity, setQuantity] = useState(0)
  const [recipient, setRecipient] = useState<'someone' | 'myself'>('someone')

  const decQty = () => setQuantity((q) => Math.max(0, q - 1))
  const incQty = () => setQuantity((q) => q + 1)

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navigation />

      <div className="bg-[#d1d1d1] min-h-[400px] flex flex-col justify-end pb-10 pt-24 px-6 max-w-[1920px] mx-auto">
        <div className="max-w-[1440px] mx-auto w-full">
          <h1 className="text-[55px] leading-[1.2] font-normal text-wire-black">Online gift card</h1>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-14 lg:py-16">
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,589px)_1fr] gap-12 xl:gap-16 xl:gap-x-24 items-start">
          <div className="text-lg text-wire-black leading-[1.4] max-w-xl">
            <p>
              Treat yourself or a loved one to a Modern Bread and Bagel gift card. Use this gift for any Nationwide
              Shipping or Pre-orders. Choose an amount and write a personalized message for the best gift!
            </p>
          </div>

          <div className="flex flex-col gap-8 w-full max-w-xl xl:max-w-none xl:justify-self-end">
            <div className="flex flex-col gap-3">
              <div className="flex items-baseline gap-1 pb-2">
                <label className="text-base text-wire-black leading-[1.4]">Amount</label>
                <span className="text-sm text-wire-black leading-5">*</span>
              </div>
              <div className="flex gap-3 flex-wrap sm:flex-nowrap">
                {amounts.map((a) => (
                  <button
                    key={a}
                    type="button"
                    onClick={() => setAmount(a)}
                    className={`flex-1 min-w-[72px] min-h-[51px] border border-wire-black text-lg leading-[1.4] transition-colors ${
                      amount === a ? 'bg-[rgba(217,217,217,0.4)]' : 'bg-transparent hover:bg-wire-ghost'
                    }`}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-base text-wire-black leading-[1.4]">Quantity</label>
              <div className="flex items-center gap-2 border border-wire-dark/60 bg-white h-10 px-1.5 w-full max-w-[200px]">
                <button
                  type="button"
                  onClick={decQty}
                  className="w-6 h-6 flex items-center justify-center text-wire-black shrink-0 hover:bg-wire-ghost"
                  aria-label="Decrease quantity"
                >
                  <span className="block w-[15px] h-px bg-wire-black" />
                </button>
                <span className="flex-1 text-center text-lg text-wire-mid tabular-nums">{quantity}</span>
                <button
                  type="button"
                  onClick={incQty}
                  className="w-6 h-6 flex items-center justify-center text-wire-black shrink-0 hover:bg-wire-ghost text-lg leading-none pb-0.5"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-base text-wire-black leading-[1.4] pb-2 block">Who is the gift card for?</label>
              <div className="flex gap-3 flex-wrap">
                <button
                  type="button"
                  onClick={() => setRecipient('someone')}
                  className={`min-h-[51px] px-8 border border-wire-black text-lg leading-[1.4] transition-colors ${
                    recipient === 'someone' ? 'bg-[rgba(217,217,217,0.4)]' : 'bg-transparent hover:bg-wire-ghost'
                  }`}
                >
                  For someone else
                </button>
                <button
                  type="button"
                  onClick={() => setRecipient('myself')}
                  className={`min-h-[51px] px-8 border border-wire-black text-lg leading-[1.4] transition-colors ${
                    recipient === 'myself' ? 'bg-[rgba(217,217,217,0.4)]' : 'bg-transparent hover:bg-wire-ghost'
                  }`}
                >
                  For myself
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <div className="flex items-baseline gap-1 pb-2">
                  <label className="text-base text-wire-black leading-[1.4]">
                    {recipient === 'myself' ? 'Your email' : 'Recipient email'}
                  </label>
                  <span className="text-sm text-wire-black leading-5">*</span>
                </div>
                <div className="flex gap-2 items-stretch">
                  <input
                    type="email"
                    placeholder=""
                    className="input-field flex-1 py-3 px-3 border-wire-dark/60 text-lg"
                  />
                  <Link
                    to="/contact"
                    className="btn-secondary whitespace-nowrap shrink-0 px-4 py-3 text-base inline-flex items-center gap-2 self-stretch"
                  >
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Contact us
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-base text-wire-black leading-[1.4] pb-2 block">
                  {recipient === 'myself' ? 'Your name' : 'Recipient name'}
                </label>
                <input type="text" placeholder="" className="input-field py-3 px-3 border-wire-dark/60 text-lg" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-base text-wire-black leading-[1.4] pb-2 block">Delivery date</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Select a Date"
                    className="input-field py-3 px-3 pr-11 border-wire-dark/60 text-lg text-wire-mid placeholder:text-wire-mid w-full"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-wire-dark">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-base text-wire-black leading-[1.4] pb-2 block">Add a message</label>
                <textarea
                  rows={5}
                  placeholder="Write your message here"
                  className="input-field resize-none py-3 px-3 border-wire-dark/60 text-lg placeholder:text-wire-mid min-h-[140px]"
                />
              </div>
            </div>

            <button type="button" className="w-full min-h-[58px] bg-wire-black text-white text-lg leading-[1.4] rounded-[5px] border border-[#626060] hover:bg-wire-dark transition-colors">
              Purchase gift card
            </button>
          </div>
        </div>

        <div className="mt-20 lg:mt-24 pt-12 border-t border-wire-pale">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <h2 className="text-[32px] font-medium leading-[1.4] text-wire-black">Shop our favorites</h2>
            <Link to="/shipping" className="text-lg underline underline-offset-2 text-wire-black hover:text-wire-dark">
              View all products
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {favoriteCategories.map((cat) => (
              <Link
                key={cat.title}
                to={cat.href}
                className={`flex flex-col gap-3 ${cat.bg} pb-4 group`}
              >
                <div className={`${cat.imgBg} aspect-[438/430] w-full max-h-[320px] lg:max-h-[430px]`} />
                <div className="px-4 flex flex-col gap-3">
                  <p className="text-lg font-semibold leading-[1.4] text-wire-black">{cat.title}</p>
                  {cat.cta && (
                    <span className="inline-flex items-center gap-1.5 text-lg text-wire-black group-hover:underline">
                      Shop now
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <ComesSayHello showEyebrow={false} buttonVariant="outline" />
      <Footer />
    </div>
  )
}
