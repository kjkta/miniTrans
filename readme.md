# Install
```
yarn add mini-trans
```

# Use
```js
import { makeTranslations } from "mini-trans"

const translations = {
  da: {
    "Hello World": "Hej Verden"
  },
  de: {
    "Hello World: "Hallo Welt"
  }
}

let t = makeTranslations(translations, "de")
t("Hello World")
// Hallo Welt

t = makeTranslations(translations, "da")
t("Hello World")
// Hej Verden
```
