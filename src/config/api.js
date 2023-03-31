export const GetStats = () => {
  return "https://api.coinranking.com/v2/stats";
};

export const CoinList = () => {
  return "https://api.coinranking.com/v2/coins/?orderBy=price";
};

export const SingleCoin = (uuid) => {
  return `https://api.coinranking.com/v2/coin/${uuid}`;
};

export const HistoricalChart = (uuid, period) => {
  return `https://api.coinranking.com/v2/coin/${uuid}/history/?timePeriod=${period}`;
};
