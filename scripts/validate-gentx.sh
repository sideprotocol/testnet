#!/bin/sh
# This script validates a genesis transaction and sets up the node

# Constants
APP_HOME="/tmp/sided$(date +%s)"
RANDOM_KEY="randomosmosisvalidatorkey"
CHAIN_ID=side-testnet-3
DENOM=uside
MAXBOND=50000000000000 # 500 Million OSMO

# Gentx Start and End Dates
start="2024-03-03 15:00:00Z"
end="2024-03-26 23:59:59Z"

# Calculate Epoch Times
stTime=$(date --date="$start" +%s)
endTime=$(date --date="$end" +%s)
curTime=$(date +%s)

# Check Gentx Submission Dates
check_submission_dates() {
    if [[ $curTime < $stTime ]]; then
        echo "Gentx submission is not open yet. Please close the PR and raise a new PR after $end"
        exit 0
    elif [[ $curTime > $endTime ]]; then
        echo "Gentx submission is closed"
        exit 0
    else
        echo "Gentx submission is now open"
    fi
}

# Validate JSON Files
validate_json() {
    local file=$1
    jq -e . "$file" > /dev/null
    if [ $? -ne 0 ]; then
        echo "Invalid $file"
        exit 1
    fi
}

# Main Function
main() {
    GENTX_FILE=$(find ./$CHAIN_ID/gentxs -iname "*.json")
    LEN_GENTX=$(echo ${#GENTX_FILE})

    if [ $LEN_GENTX -eq 0 ]; then
        echo "No new gentx file found."
        exit 0
    fi

    # Validate JSON Files
    validate_json "$GENTX_FILE"
    
    # Initialize Sided
    echo "Init Sided"
    rm -rf side
    git clone https://github.com/sideprotocol/side.git
    cd side
    git checkout v0.7.0-rc2
    make build
    chmod +x ./build/sided

    ./build/sided keys add $RANDOM_KEY --keyring-backend test --home $APP_HOME
    ./build/sided init --chain-id $CHAIN_ID validator --home $APP_HOME

    # Fetch Genesis
    echo "Fetching genesis"
    rm -rf $APP_HOME/config/genesis.json
    curl -s https://raw.githubusercontent.com/sideprotocol/testnet/main/$CHAIN_ID/pregenesis.json >$APP_HOME/config/genesis.json

    # Modify Genesis Time
    sed -i '/genesis_time/c\   "genesis_time" : "2021-03-29T00:00:00Z",' $APP_HOME/config/genesis.json

    GENACC=$(cat ../$GENTX_FILE | jq -r '.body.messages[0].delegator_address')
    denomquery=$(jq -r '.body.messages[0].value.denom' ../$GENTX_FILE)
    amountquery=$(jq -r '.body.messages[0].value.amount' ../$GENTX_FILE)

    # Validate Denomination and Amount
    if [ "$denomquery" != "$DENOM" ]; then
        echo "invalid denomination"
        exit 1
    fi

    if [ $amountquery -gt $MAXBOND ]; then
        echo "bonded too much: $amountquery > $MAXBOND"
        exit 1
    fi

    ./build/sided add-genesis-account $GENACC ${amountquery}${DENOM} --home $APP_HOME --keyring-backend test
    ./build/sided add-genesis-account $RANDOM_KEY 10000000000000000$DENOM --home $APP_HOME --keyring-backend test
    ./build/sided gentx $RANDOM_KEY 90000000000000$DENOM --home $APP_HOME --keyring-backend test --chain-id $CHAIN_ID

    cp ../$GENT