import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "BeareruR0W8plL0utmRA2a8xN_d_Hk5Bc5gFDgUBml5Is6bOQWbnFrG46hhIcxPb6jYeaj-WLTyMi1qSmPrI4eOFDHwQrszFdlLNYAg_QVwtwxrkwUXaCp1UnoK-CiBWzHZnYx",
  },
});
