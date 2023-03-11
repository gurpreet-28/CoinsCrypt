export const TrendingCoins = () => {
  return "https://api.coingecko.com/api/v3/search/trending";
};

export const CoinList = () => {
  return "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
};

export const SingleCoin = (id) => {
  return `https://api.coingecko.com/api/v3/coins/${id}`;
};

export const HistoricalChart = (id, days = 365) => {
  return `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`;
};
