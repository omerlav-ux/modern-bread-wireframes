export type StoreLocation = {
  id: string
  region: 'new-york' | 'new-jersey' | 'california'
  name: string
  address: string
  slug: string
  pickupUrl: string
  hasDinner: boolean
}

export const TOAST_BASE = 'https://order.toasttab.com/online/modern-bread-bagel'

export const storeLocations: StoreLocation[] = [
  { id: 'uws', region: 'new-york', name: 'Upper West Side', address: '472 Columbus Ave, New York, NY 10024', slug: 'upper-west-side', pickupUrl: `${TOAST_BASE}-upper-west-side`, hasDinner: false },
  { id: 'ues', region: 'new-york', name: 'Upper East Side', address: '1427 3rd Ave, New York, NY 10028', slug: 'upper-east-side', pickupUrl: `${TOAST_BASE}-upper-east-side`, hasDinner: true },
  { id: 'chelsea', region: 'new-york', name: 'Chelsea', address: '139 West 14th Street, New York, NY 10011', slug: 'chelsea', pickupUrl: `${TOAST_BASE}-chelsea`, hasDinner: false },
  { id: 'midtown-east', region: 'new-york', name: 'Midtown East', address: '630 Lexington Ave, New York, NY 10022', slug: 'midtown-east', pickupUrl: `${TOAST_BASE}-midtown-east`, hasDinner: true },
  { id: 'englewood', region: 'new-jersey', name: 'Good Food by Modern (Englewood)', address: '43 E Palisade Ave, Englewood, NJ 07631', slug: 'englewood', pickupUrl: `${TOAST_BASE}-englewood`, hasDinner: true },
  { id: 'woodland-hills', region: 'california', name: 'Woodland Hills', address: '6256 Topanga Canyon Blvd, Woodland Hills, CA 91367', slug: 'woodland-hills', pickupUrl: `${TOAST_BASE}-woodland-hills`, hasDinner: false },
  { id: 'santa-monica', region: 'california', name: 'Santa Monica', address: '1511c Montana Ave, Santa Monica, CA 90403', slug: 'santa-monica', pickupUrl: `${TOAST_BASE}-santa-monica`, hasDinner: false },
  { id: 'beverly-hills', region: 'california', name: 'Beverly Hills', address: '260 N Beverly Dr, Beverly Hills, CA 90210', slug: 'beverly-hills', pickupUrl: `${TOAST_BASE}-beverly-hills`, hasDinner: false },
  { id: 'silverlake', region: 'california', name: 'Silverlake', address: '1529 Griffith Park Boulevard, Los Angeles, CA 90026', slug: 'silverlake', pickupUrl: `${TOAST_BASE}-silverlake`, hasDinner: false },
]

export const DEFAULT_STORE_LOCATION_ID = 'uws'
