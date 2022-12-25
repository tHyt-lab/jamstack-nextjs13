import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'tnvi6sdqrh',
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY ?? ''
})