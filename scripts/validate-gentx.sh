#!/bin/sh
APP_HOME="/tmp/sided$(date +%s)"
RANDOM_KEY="randomosmosisvalidatorkey"
CHAIN_ID=side-testnet-3
DENOM=uside
MAXBOND=50000000000000 # 500 Million OSMO

GENTX_FILE=$(find ./$CHAIN_ID/gentxs -iname "*.json")
LEN_GENTX=$(echo ${#GENTX_FILE})

# Gentx Start date
start="2024-03-03 15:00:00Z"
# Compute the seconds since epoch for start date
stTime=$(date --date="$start" +%s)

# Gentx End date
end="2024-03-26 23:59:59Z"
# Compute the seconds since epoch for end date
endTime=$(date --date="$end" +%s)

# Current date
current=$(date +%Y-%m-%d\ %H:%M:%S)
# Compute the seconds since epoch for current date
curTime=$(date --date="$current" +%s)

if [[ $curTime < $stTime ]]; then
    echo "start=$stTime:current=$curTime:endTime=$endTime"
    echo "Gentx submission is not open yet. Please close the PR and raise a new PR after 04-June-2021 23:59:59"
    exit 0
else
    if [[ $curTime > $endTime ]]; then
        echo "start=$stTime:current=$curTime:endTime=$endTime"
        echo "Gentx submission is closed"
        exit 0
    else
        echo "Gentx is now open"
        echo "start=$stTime:current=$curTime:endTime=$endTime"
    fi
fi

if [ $LEN_GENTX -eq 0 ]; then
    echo "No new gentx file found."
else
    set -e

    echo "GentxFile::::"
    echo $GENTX_FILE

    echo "...........Init Sided.............."

    rm -rf side
    git clone https://github.com/sideprotocol/side.git
    cd side
    git checkout v0.7.0-rc2
    make build
    chmod +x ./build/sided

    ./build/sided keys add $RANDOM_KEY --keyring-backend test --home $APP_HOME

    ./build/sided init --chain-id $CHAIN_ID validator --home $APP_HOME

    echo "..........Fetching genesis......."
    rm -rf $APP_HOME/config/genesis.json
    curl -s https://raw.githubusercontent.com/sideprotocol/testnet/main/$CHAIN_ID/pregenesis.json >$APP_HOME/config/genesis.json

    # this genesis time is different from original genesis time, just for validating gentx.
    sed -i '/genesis_time/c\   \"genesis_time\" : \"2021-03-29T00:00:00Z\",' $APP_HOME/config/genesis.json

    GENACC=$(cat ../$GENTX_FILE | sed -n 's|.*"delegator_address":"\([^"]*\)".*|\1|p')
    denomquery=$(jq -r '.body.messages[0].value.denom' ../$GENTX_FILE)
    amountquery=$(jq -r '.body.messages[0].value.amount' ../$GENTX_FILE)

    echo $GENACC
    echo $amountquery
    echo $denomquery

    # only allow $DENOM tokens to be bonded
    if [ $denomquery != $DENOM ]; then
        echo "invalid denomination"
        exit 1
    fi

    # limit the amount that can be bonded

    if [ $amountquery -gt $MAXBOND ]; then
        echo "bonded too much: $amountquery > $MAXBOND"
        exit 1
    fi

    ./build/sided add-genesis-account $GENACC $amountquery$DENOM --home $APP_HOME \
        --keyring-backend test

    ./build/sided add-genesis-account $RANDOM_KEY 10000000000000000$DENOM --home $APP_HOME \
        --keyring-backend test

    #./build/sided add-genesis-account  $amountquery$DENOM --home $APP_HOME \
    #    --keyring-backend test
    ./build/sided gentx $RANDOM_KEY 90000000000000$DENOM --home $APP_HOME \
        --keyring-backend test --chain-id $CHAIN_ID

    # rm $APP_HOME/config/gentx/*.json
    cp ../$GENTX_FILE $APP_HOME/config/gentx/

    echo "..........Collecting gentxs......."
    ./build/sided collect-gentxs --home $APP_HOME
    # sed -i '/persistent_peers =/c\persistent_peers = ""' $APP_HOME/config/config.toml

    ./build/sided validate-genesis --home $APP_HOME

    echo "..........Starting node......."
    ./build/sided start --home $APP_HOME &

    sleep 18s

    echo "...checking network status.."

    ./build/sided status --node http://localhost:26657

    echo "...Cleaning the stuff..."
    killall sided >/dev/null 2>&1
    rm -rf $APP_HOME >/dev/null 2>&1
fi
