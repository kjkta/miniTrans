import { makeTranslations } from "../";

let translations = {
  da: {
    Hello: "Hej"
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
