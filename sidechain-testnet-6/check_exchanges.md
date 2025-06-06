# 0. Install wscat
```sh
sudo apt update
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc   # or ~/.zshrc if using zsh
nvm install --lts
nvm use --lts
npm install -g wscat
```

# 1. Check the connectivity with binance
```sh
wscat -c wss://stream.binance.com:443/stream?streams=btcusdt@miniTicker/atomusdt@miniTicker
```
Expected output like:
```sh
Connected (press CTRL+C to quit)
< {"stream":"btcusdt@miniTicker","data":{"e":"24hrMiniTicker","E":1749183266025,"s":"BTCUSDT","c":"102492.27000000","o":"105121.06000000","h":"105909.71000000","l":"100372.26000000","v":"24032.63625000","q":"2472261593.19821790"}}
< {"stream":"atomusdt@miniTicker","data":{"e":"24hrMiniTicker","E":1749183267518,"s":"ATOMUSDT","c":"4.15900000","o":"4.31200000","h":"4.36100000","l":"4.02900000","v":"1895444.43000000","q":"7928978.87419000"}}
```

# 2. Check the connectivity with bitget
```sh
wscat -c wss://ws.bitget.com/v2/ws/public
```
Enter in the interactive command line
```sh
{"op": "subscribe", "args": [{"instType":"SPOT","channel":"ticker","instId":"BTCUSDT"}]}
```
Expected output like:
```sh
< {"event":"subscribe","arg":{"instType":"SPOT","channel":"ticker","instId":"BTCUSDT"}}
< {"action":"snapshot","arg":{"instType":"SPOT","channel":"ticker","instId":"BTCUSDT"},"data":[{"instId":"BTCUSDT","lastPr":"102610.25","open24h":"104535.01","high24h":"105872.37","low24h":"100408.16","change24h":"-0.02405","bidPr":"102605.04","askPr":"102615.2","bidSz":"0.04497","askSz":"0.001041","baseVolume":"10581.233204","quoteVolume":"1089394634.232052","openUtc":"101524.00","changeUtc24h":"0.01070","ts":"1749184322221"}],"ts":1749184322231}
< {"action":"snapshot","arg":{"instType":"SPOT","channel":"ticker","instId":"BTCUSDT"},"data":[{"instId":"BTCUSDT","lastPr":"102610.25","open24h":"104535.01","high24h":"105872.37","low24h":"100408.16","change24h":"-0.02405","bidPr":"102615.19","askPr":"102615.2","bidSz":"0.95461","askSz":"0.001041","baseVolume":"10581.233204","quoteVolume":"1089394634.232052","openUtc":"101524.00","changeUtc24h":"0.01070","ts":"1749184322519"}],"ts":1749184322523}
```

# 3. Check the connectivity with bybit:
```sh
wscat -c wss://stream.bybit.com/v5/public/spot
```
Enter in the interactive command line
```sh
{"op": "subscribe", "args": ["tickers.BTCUSDT", "tickers.ATOMUSDT"]}
```
Expected output like:
```sh
< {"success":true,"ret_msg":"subscribe","conn_id":"30ed27a8-ed96-41dd-8608-d239d11df3d6","op":"subscribe"}
< {"topic":"tickers.BTCUSDT","ts":1749185744881,"type":"snapshot","cs":76067784435,"data":{"symbol":"BTCUSDT","lastPrice":"102742.6","highPrice24h":"105920.1","lowPrice24h":"100403.7","prevPrice24h":"105221.8","volume24h":"12061.295487","turnover24h":"1242160016.20538339","price24hPcnt":"-0.0236","usdIndexPrice":"102810.374009"}}
< {"topic":"tickers.ATOMUSDT","ts":1749185744750,"type":"snapshot","cs":86170380697,"data":{"symbol":"ATOMUSDT","lastPrice":"4.166","highPrice24h":"4.5379","lowPrice24h":"4.028","prevPrice24h":"4.315","volume24h":"836887.238","turnover24h":"3512005.8668082","price24hPcnt":"-0.0345","usdIndexPrice":"4.168713"}}
```

# 4. Check the connectivity with coinbase:
```sh
wscat -c wss://ws-feed.exchange.coinbase.com
```
Enter in the interactive command line
```sh
{"type":"subscribe","product_ids":["BTC-USD"],"channels":[{"name":"ticker","product_ids":["BTC-USD"]}]}
```
Expected output like:
```sh
< {"type":"subscriptions","channels":[{"name":"ticker","product_ids":["BTC-USD"],"account_ids":null}]}
< {"type":"ticker","sequence":106614625991,"product_id":"BTC-USD","price":"102861.5","open_24h":"104700.88","volume_24h":"11263.64960739","low_24h":"100345.73","high_24h":"105999.68","volume_30d":"211070.41456874","best_bid":"102861.49","best_bid_size":"0.05883958","best_ask":"102861.50","best_ask_size":"0.15161616","side":"buy","time":"2025-06-06T05:00:31.886136Z","trade_id":834270521,"last_size":"0.00481191"}
< {"type":"ticker","sequence":106614626042,"product_id":"BTC-USD","price":"102861.5","open_24h":"104700.88","volume_24h":"11263.65145165","low_24h":"100345.73","high_24h":"105999.68","volume_30d":"211070.41641300","best_bid":"102861.49","best_bid_size":"0.05883958","best_ask":"102861.50","best_ask_size":"0.14977190","side":"buy","time":"2025-06-06T05:00:32.288092Z","trade_id":834270522,"last_size":"0.00184426"}
```

# 5. Check the connectivity with okx:
```sh
wscat -c wss://ws.okx.com:8443/ws/v5/public
```
Enter in the interactive command line
```sh
{"op": "subscribe", "args": [{"channel": "index-tickers", "instId": "BTC-USDT"}]}
```
Expected output like:
```sh
< {"event":"subscribe","arg":{"channel":"index-tickers","instId":"BTC-USDT"},"connId":"320a0cf9"}
< {"arg":{"channel":"index-tickers","instId":"BTC-USDT"},"data":[{"instId":"BTC-USDT","idxPx":"102765","open24h":"105088.5","high24h":"105916.6","low24h":"100399.9","sodUtc0":"101507.9","sodUtc8":"104532.6","ts":"1749186348230"}]}
< {"arg":{"channel":"index-tickers","instId":"BTC-USDT"},"data":[{"instId":"BTC-USDT","idxPx":"102765","open24h":"105088.5","high24h":"105916.6","low24h":"100399.9","sodUtc0":"101507.9","sodUtc8":"104532.6","ts":"1749186348596"}]}
```
