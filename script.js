const button = document.getElementById("convert-button");

const select = document.getElementById("currency-select");

const dólar = 5.2;

const euro = 5.9;

const bitcoin = 122.00

const convertValues = () => {
  const inputReais = document.getElementById("input-real").value;
  const realValueText = document.getElementById("real-value-text");
  const currencyValueText = document.getElementById("currency-value-text");

  realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReais);
  if (select.value === "US$ Dólar Americano") {
    currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputReais / dólar);
  }

   else if(select.value === "€ Euro") {
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputReais / euro);
  }
  else ( currencyValueText.innerHTML = (inputReais / bitcoin))


};

changeCurrency = () => {
  const currencyName = document.getElementById("currency-name");
  const currencyImg = document.getElementById("currency-img");

  if (select.value === "US$ Dólar Americano") {
    currencyName.innerHTML = "Dólar Americano";
    currencyImg.src = "./img/dola.png";
  }
  if (select.value === "€ Euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./img/euro.png";
  }
  if (select.value === "₿ Bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImg.src = "./img/bitcoin.png";
  }

  convertValues();
};

select.addEventListener("change", changeCurrency);
button.addEventListener("click", convertValues);
