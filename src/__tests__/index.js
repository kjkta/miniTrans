const { makeTranslations } = require("../index.js");

let translations = {
  da: {
    Hello: "Hej",
		"Hello %s": "Hej %s"
  }
};

test("returns default message", () => {
  let t = makeTranslations(translations);
  expect(t("Hello")).toBe("Hello");
});

test("returns translation", () => {
  let t = makeTranslations(translations, "da");
  expect(t("Hello")).toBe("Hej");
});

test("returns default message if no translation", () => {
  let t = makeTranslations(translations, "da");
  expect(t("Goodnight")).toBe("Goodnight");
});

test("return english with variable", function() {
	let t = makeTranslations(translations, "en")
	expect(t("Hello %s", ["Superman"])).toBe("Hello Superman")
})

test("return translation with variable", function() {
	let t = makeTranslations(translations, "da")
	expect(t("Hello %s", ["Superman"])).toBe("Hej Superman")
})

test("return translation with variable adding 's", function() {
	let t = makeTranslations(translations, "da")
	expect(t("Hello %s's beer in %s's fridge", ["there", "Barry"])).toBe("Hello there's beer in Barry's fridge")
})
