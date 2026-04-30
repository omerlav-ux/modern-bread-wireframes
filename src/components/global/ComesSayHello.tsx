import { Link } from 'react-router-dom'

export default function ComesSayHello() {
  return (
    <section>
      <div className="max-w-[1440px] mx-auto px-8 py-20 grid grid-cols-2 gap-16 items-center">
        <div>
          <p className="section-label mb-3">Find us in person</p>
          <h2 className="text-4xl font-semibold leading-tight mb-4">Come say hello</h2>
          <p className="text-wire-mid leading-relaxed mb-8 max-w-sm">
            From the iconic streets of the Upper West Side to our sunny kitchens in California, our doors are open and the ovens are on. Come say hello at your neighborhood Modern.
          </p>
          <Link to="/locations" className="btn-primary inline-block">To all locations</Link>
        </div>
        <div className="relative">
          {/* Map placeholder */}
          <div className="img-placeholder h-80 w-full relative">
            <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
              <svg className="w-8 h-8 text-wire-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <span className="text-wire-light text-sm">Map - NY · NJ · CA locations</span>
            </div>
            {/* Location pins */}
            {[
              { top: '30%', left: '60%', label: 'NY' },
              { top: '45%', left: '62%', label: 'NJ' },
              { top: '55%', left: '18%', label: 'CA' },
            ].map((pin) => (
              <div key={pin.label} className="absolute" style={{ top: pin.top, left: pin.left }}>
                <div className="w-5 h-5 bg-wire-black rounded-full flex items-center justify-center">
                  <span className="text-white text-[8px] font-bold">{pin.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
