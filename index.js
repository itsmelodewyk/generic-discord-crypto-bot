// imports
const dotenv = require('dotenv')
const cron = require('node-cron');
const axios = require('axios');
const discord = require('discord.js');

// load environment variables
dotenv.config();

// variables
const BOT_TOKEN = process.env.BOT_TOKEN;
const COINGECKO_URL = "https://api.coingecko.com/api/v3/coins/" + process.env.COINGECKO_TOKEN_ID
const COIN_TICKER = process.env.COIN_TICKER;
const CHANNEL_ID = process.env.CHANNEL_ID;

// initialize bot
const bot = new discord.Client();
bot.login(BOT_TOKEN);

bot.on('ready', () => {
  console.info("[INFO]: " + ${bot.user.tag} + ", initialized.");
});

cron.schedule('*/5 * * * *', () => {
  console.log("[INFO]: querying CoinGecko.");
  queryCoinGecko();
})

function queryCoinGecko() {
  axios.get(COINGECKO_URL)
    .then(response => {
      try {
        var stats =
        COIN_TICKER + "/USD: $" + response.data.market_data.current_price.usd + "\n" +
        COIN_TICKER + "/EUR: €" + response.data.market_data.current_price.eur + "\n" +
        "Market Cap Rank: " + response.data.market_cap_rank + "\n" +
        "Circulating Supply/Total Supply : " + response.data.market_data.circulating_supply + "/" + response.data.market_data.total_supply

        // send update to CHANNEL_ID
        bot.channels.get(CHANNEL_ID).send(stats);
      } catch (error) {
        console.log(error);
      }
    })
    .catch(error => {
      console.log(error);
    });
}
