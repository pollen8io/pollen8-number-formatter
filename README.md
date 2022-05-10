# Number Formatter

This is a simple micro-utility that helps you format a number and add
prefixes and suffixes - most likely a currency or percentage and adding the
appropriate commas.

We use it when we have a field configuration that might store a currency code
and we need to be able to easily choose the currency simple based on that
code, or if it's a percentage to add that symbol too. 

## Usage

There are two functions, they're pretty similar. Most likely you want to
apply different styles to the components for legibility so you would use
`formatNumber` like so:

```javascript
import { formatNumber } from 'pollen8-number-formatter'
const { prefix, suffix, value } = formatNumber(4000, { currency: 'GBP' })

console.log(prefix, suffix, value) // logs '£', 'GBP', '4,000' 

```

For example:

```vue
<template>
  <div>
    <span v-if="formatted.prefix" class="light-grey">
      {{ formatted.prefix }}
    </span>
    {{ value }}
    <span v-if="formatted.suffix"  class="light-grey">
      {{ formatted.suffix }}
    </span>
  </div>
</template>

<script>
import { formatNumber } from 'pollen8-number-formatter'

export default {
  computed: {
    formatted () {
      return formatNumber(4000, { currency: 'GBP' })
    }
  }
}
</script>
```

### Simpler usage:

You can just output a joined string if you wish:

```javascript
import { formatNumberString } from 'pollen8-number-formatter'
const formatted = formatNumberString(4000, { currency: 'GBP' })
console.log(formatted) // logs '£4,000GBP'

```