export const get_price_api_name = (idC: string) => {
  return `https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=${idC}`;
};
