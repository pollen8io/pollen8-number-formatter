import data from './data.mjs'

export const currencyOptions = Object.values(data).map(
  ({ code, name_plural }) => ({
    value: code,
    label: `${code} - ${name_plural}`,
  })
)

export const currencyKeys = Object.keys(data).map(key => `${key}`)

export const currencies = data
export default { 
  currencies,
  currencyKeys,
  currencyOptions
}
