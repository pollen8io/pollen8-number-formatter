import data from './data/index.mjs'

/**
 * Formats a number by converting it into a string, formatting it appropriately
 * with commas, and offering a prefix and suffix string for you to join together
 *
 * @param {string,number} value Number to format
 * @param {options} options provide a currency code or a percentage boolean to
 *    format appropriately
 * @returns {object}
 */
export const formatNumber = (
  value,
  { currency = false, percent = false } = {}
) => {
  let prefix = ''
  let suffix = ''

  const formattedValue = parseFloat(value).toLocaleString()

  if (percent) {
    suffix = '%'
  } else if (currency) {
    const currencyData = data.currencies[currency]
    if (currencyData) {
      prefix = currencyData.symbol_native
      suffix = currency
    } else {
      prefix = currency
    }
  }

  return {
    prefix,
    value: formattedValue,
    suffix
  }
}

/**
 * Runs `formatNumber` but joins the parts as a string if you just want a simple
 * plaintext result
 * @param {string,number} value number to format
 * @param {object} options provide a currency code or a percentage boolean to
 *    format appropriately
 * @returns {string}
 */
export const formatNumberString = (rawValue, options) => {
  const { prefix, value, suffix } = formatNumber(rawValue, options)
  return `${prefix}${value}${suffix}`
}

export const currencyOptions = data.currencyOptions
export const currencyKeys = data.currencyKeys
export const currencies = data.currencies

export default {
  formatNumber,
  formatNumberString,
  currencyOptions,
  currencyKeys,
  currencies
}
