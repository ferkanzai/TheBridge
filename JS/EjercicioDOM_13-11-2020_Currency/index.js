const apiUrl =
  'https://api.currencyfreaks.com/latest?apikey=1b6d259d54c04f2cba93a873c1667db3';

function getValues() {
  const ogCurrency = document.querySelector('#ogCurrency').value
  const endCurrency = document.querySelector('#endCurrency').value
  const amount = Number(document.querySelector('#amount').value)
  
  return [ogCurrency, endCurrency, amount]
}

const exchangeBtn = document.querySelector('#exchange')
const div = document.querySelector("#result");

const exchangeBtnHandler = () => {
  fetch(apiUrl, { method: 'GET' })
    .then((res) => res.json())
    .then((result) => {
      
      // console.log(result)

      const [originalCurrency, endCurrency, amount] = getValues()

      div.innerHTML = ''

      const baseValue = result.rates[result.base];
      const ogCurrencyValue = result.rates[originalCurrency];
      const endCurrencyValue = result.rates[endCurrency];

      console.log('Nuestros cambios de divisa son:', {
        baseValue,
        ogCurrencyValue,
        endCurrencyValue,
      });

      const baseAmount = (amount * baseValue) / ogCurrencyValue;
      console.log(`Tenemos ${baseAmount} como ${result.base}`);

      const endAmount = (baseAmount * endCurrencyValue) / baseValue;
      console.log(`Tenemos ${endAmount} como ${endCurrency}`);

      const h3 = document.createElement("h3")
      const h3Text = document.createTextNode(`Tu cambio de ${amount} ${originalCurrency} son ${endAmount} ${endCurrency}`);
      h3.appendChild(h3Text);
      
      div.appendChild(h3);
    })
    .catch((error) => {
      console.log(error);
      console.log(error.message);
    });
};

exchangeBtn.addEventListener('click', exchangeBtnHandler)