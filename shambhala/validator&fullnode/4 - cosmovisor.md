# What's Cosmovisor

`cosmovisor` is a process manager for Cosmos SDK application binaries that monitors the governance module for incoming chain upgrade proposals. If it sees a proposal that gets approved, `cosmovisor` can automatically download the new binary, stop the current binary, switch from the old binary to the new one, and finally restart the node with the new binary.

# Setup
## Installation
You can download Cosmovisor from the [GitHub releases](https://github.com/cosmos/cosmos-sdk/releases/tag/cosmovisor%2Fv1.5.0).

To install the latest version of cosmovisor, run the following command:
```shell
go install cosmossdk.io/tools/cosmovisor/cmd/cosmovisor@latest
```
To install a specific version, you can specify the version:
```shell
go install cosmossdk.io/tools/cosmovisor/cmd/cosmovisor@v1.5.0
```

## Setting up environmental variables

`cosmovisor` relies on the following environmental variables to work properly:

 - `DAEMON_HOME` is the location where upgrade binaries should be kept (e.g. $HOME/.sidechain).
 - `DAEMON_NAME` is the name of the binary itself (eg. sided).
 - `DAEMON_ALLOW_DOWNLOAD_BINARIES` (optional, default = false) if set to true will enable auto-downloading of new binaries (for security reasons, this is intended for full nodes rather than validators).
 - `DAEMON_RESTART_AFTER_UPGRADE` (optional, default = true) if set to true it will restart the sub-process with the same command line arguments and flags (but new binary) after a successful upgrade. By default, cosmovisor dies afterwards and allows the supervisor to restart it if needed. Note that this will not auto-restart the child if there was an error.
 - `DAEMON_POLL_INTERVAL` (optional, default = 300ms) is the interval length for polling the upgrade plan file. The value can either be a number (in milliseconds) or a duration (e.g. 1s).
 - `UNSAFE_SKIP_BACKUP` (optional, default = false), if set to true, upgrades directly without performing a backup. Otherwise (false) backs up the data before trying the upgrade. The default value of false is useful and recommended in case of failures and when a backup needed to rollback. We recommend using the default backup option `UNSAFE_SKIP_BACKUP=false`.

To properly set those variables, we suggest you to edit the ~/.profile file so that they are loaded when you log into your machine. To edit this file you can simply run

```shell
nano ~/.profile
```

Once you're in, we suggest you to set the following values:

```shell
export DAEMON_HOME=$HOME/.sidechaind
export DAEMON_NAME=sided
export DAEMON_ALLOW_DOWNLOAD_BINARIES=true
export DAEMON_RESTART_AFTER_UPGRADE=true
export UNSAFE_SKIP_BACKUP=true
```

Once you're done, `Ctrl+o` and `Ctrl+x`: To save the file. then reload the ~/.profile file by running

```shell
source ~/.profile
```
You can verify the values set by running

```shell
echo $DAEMON_NAME
```
If this outputs `sided` you are ready to go.

## Setting up folder structure

Cosmovisor expects a certain folder structure:
```shell
.
├── current -> genesis or upgrades/<name>
├── genesis
│   └── bin
│       └── $DAEMON_NAME
└── upgrades
    └── <name>
        └── bin
            └── $DAEMON_NAME
```
Don't worry about current - that is simply a symlink used by Cosmovisor. The other folders will need setting up, but this is easy:

```shell
mkdir -p $DAEMON_HOME/cosmovisor/genesis/bin && mkdir -p $DAEMON_HOME/cosmovisor/upgrades
```

## Copy binary to genesis folder
```shell
cp $HOME/go/bin/sided $DAEMON_HOME/cosmovisor/genesis/bin
```

You can verify it by running, (You should see version of sided):
```shell
cosmovisor version
```

## Starting your node
```shell
cosmovisor start
```

## Setup Service
First, create the service file:
```shell
sudo nano /etc/systemd/system/sided.service
```
Please copy `cosmovistor` to `/usr/local/bin`, 
```shell
[Unit]
Description=SIDE Blockchain Daemon (cosmovisor)
After=network-online.target

[Service]
User=ubuntu
ExecStart=/usr/local/bin/cosmovisor run start
Restart=always
RestartSec=3
LimitNOFILE=4096
Environment="DAEMON_NAME=sided"
Environment="DAEMON_HOME=$HOME/.sidechain"
Environment="DAEMON_ALLOW_DOWNLOAD_BINARIES=false"
Environment="DAEMON_RESTART_AFTER_UPGRADE=true"
Environment="DAEMON_LOG_BUFFER_SIZE=512"

[Install]
WantedBy=multi-user.target
```

Finally, enable the service and start it.
```shell
sudo -S systemctl daemon-reload
sudo -S systemctl enable sided
# check config one last time before starting!
sudo systemctl start sided
```