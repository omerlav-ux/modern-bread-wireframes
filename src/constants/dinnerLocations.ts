export type DinnerLocation = {
  name: string
  concept: string
  hours: string
  slug: string
}

export const dinnerLocations: DinnerLocation[] = [
  {
    name: 'Midtown',
    concept: 'BigFish by Modern',
    hours: 'Sunday to Thursday: 5:00 PM to 9:30 PM',
    slug: 'midtown-east',
  },
  {
    name: 'Upper East Side',
    concept: 'Modern Italia',
    hours: 'Sun-Wed: 5-10 PM | Thu-Sat: 5 PM-Midnight',
    slug: 'upper-east-side',
  },
  {
    name: 'Englewood',
    concept: 'Good Food for Dinner',
    hours: 'Thursday: 5:00 PM to 10:00 PM',
    slug: 'englewood',
  },
]
