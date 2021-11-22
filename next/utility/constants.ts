const sortOptions = {
  PRICE_LOW_TO_HIGH: 0,
  PRICE_HIGH_TO_LOW: 1,
  ALPHABETICAL_COMMON: 2,
  ALPHABETICAL_COMMON_DESCENDING: 3,
  ALPHABETICAL_SCIENTIFIC: 4,
  ALPHABETICAL_SCIENTIFIC_DESCENDING: 5,
}

export const SORT_BY = {
  ...sortOptions,
  DEFAULT: sortOptions.ALPHABETICAL_COMMON,
}

export const FILTER = {
  CARES_LIST: 0,
  IN_STOCK: 1,
  ORIGIN: 2,
  SEARCH: 3,
}

export const SOCIAL_MEDIA = [
  {
    id: 'Facebook',
    href: 'https://www.facebook.com/Meys-Aquatics-LLC-163514463696339/',
  },
  {
    id: 'Instagram',
    href: 'https://www.instagram.com/mey_aquatics/',
  },
  {
    id: 'YouTube',
    href: 'https://www.youtube.com/channel/UCHz4QnaCjtgRpn5Zzei4ejw/',
  },
]
