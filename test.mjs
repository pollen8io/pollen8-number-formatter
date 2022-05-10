import { formatNumber } from './index.mjs'

const { prefix, suffix, value } = formatNumber(4000, { currency: 'GBP' })

console.log(prefix, suffix, value)