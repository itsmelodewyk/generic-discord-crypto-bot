# Building a Discord Bot that periodically queries cryptocurrency metrics
A simple template that can be used to gather cryptocurrency metrics and post it to a Discord channel.

## Requirements

- [Node.js](http://nodejs.org/)
- [Discord](https://discordapp.com/) account

## Installation Steps (if applicable)

1. Clone repo
2. Run `npm install`
3. Add environment variables and Discord Bot credentials to `.env` file
4. Run `node index.js`

## Environment Variables

1. `BOT_TOKEN` : Token assigned to your Discord Bot upon creation.
2. `COINGECKO_TOKEN_ID` : ID used by CoinGecko to identify the cryptocurrency.
3. `COIN_TICKER` : Ticker assigned to the cryptocurrency.
4. `CHANNEL_ID` : The ID of the channel you wish to publish the metrics in.
