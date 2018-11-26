function MiniTrans(messages = {}, locale = "en") {
  this.getTranslation = function(msgId) {
    if (locale === "en") return msgId;
    let msg = messages[locale] ? messages[locale][msgId] : false;
    if (msg) return msg;
    else return msgId;
    return "";
  };
}

function makeTranslations(messages, locale) {
  let miniTrans = new MiniTrans(messages, locale);
  return miniTrans.getTranslation;
}

export { makeTranslations };
