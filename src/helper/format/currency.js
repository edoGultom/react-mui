/*eslint no-extend-native: ["error",{"exceptions": ["Number"]}] */
if (!Number.hasOwnProperty("currency"))
  Number.prototype.currency = function (decimal = 0) {
    const currency = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    });
    return currency.format(this);
  };
