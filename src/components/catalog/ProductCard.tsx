import { Link } from 'react-router-dom'

interface Props {
  name: string
  price: string
  href: string
  tag?: string
  tagColor?: 'blue' | 'amber' | 'purple'
  serves?: string
  badge?: string
  addToCart?: boolean
  addToCartLabel?: string
}

const tagClasses = {
  blue: 'border-wire-dark text-wire-dark',
  amber: 'border-wire-mid text-wire-mid',
  purple: 'border-wire-black text-wire-black bg-wire-ghost',
}

export default function ProductCard({ name, price, href, tag, tagColor = 'blue', serves, badge, addToCart = false, addToCartLabel = 'Add to Cart' }: Props) {
  return (
    <div className="group flex flex-col">
      <Link to={href} className="block flex-1">
        <div className="img-placeholder aspect-square mb-3 relative overflow-hidden">
          <span className="text-xs text-wire-light">Product image</span>
          {badge && (
            <div className="placeholder-badge absolute top-2 left-2 bg-wire-black text-white text-[10px] font-bold px-2 py-0.5 tracking-wider">
              {badge}
            </div>
          )}
          {serves && (
            <div className="placeholder-badge absolute bottom-2 left-2 bg-white border border-wire-pale text-[10px] font-semibold px-2 py-0.5 tracking-wider" style={{ color: '#333' }}>
              SERVES {serves}
            </div>
          )}
        </div>
        <div className="space-y-1 mb-3">
          {tag && (
            <span className={`tag ${tagClasses[tagColor]}`}>{tag}</span>
          )}
          <h3 className="text-sm font-medium leading-snug group-hover:underline">{name}</h3>
          <p className="text-sm text-wire-dark font-semibold">{price}</p>
        </div>
      </Link>
      {addToCart && (
        <button className="w-full py-2.5 bg-wire-black text-white text-xs font-medium hover:bg-wire-dark transition-colors mt-auto">
          {addToCartLabel}
        </button>
      )}
    </div>
  )
}
