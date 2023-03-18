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

export const GetNews = (apiKey) => {
  return `https://newsdata.io/api/1/news?apikey=${apiKey}&q=cryptocurrency&language=en`;
};

export const GetNextNews = (apiKey, page) => {
  return `https://newsdata.io/api/1/news?apikey=${apiKey}&page=${page}&q=cryptocurrency&language=en`;
};
