import { CoinGeckoClient } from "coingecko-api-v3"

const client = new CoinGeckoClient({
  timeout: 10000,
  autoRetry: false,
})

export async function fetchCoin() {
  const data = await client.coinMarket({
    vs_currency: "usd",
    ids: "pepe, shiba-inu, floki, lube, ethereum, badger-dao, wrapped-bitcoin",
    price_change_percentage: "1h, 24h, 7d",
  })

  return data
}
