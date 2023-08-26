This page contains information about building SIDE blockchain node from sources

## Hardware Specifications

1. Minimum Requirements
   1. CPU: 2 cores
   2. RAM: 4 GB
   3. Storage: 200 GB
   4. Network: 1 Gbps
2. Recommended Specifications
   1. CPU: 4 cores
   2. RAM: 8 GB
   3. Storage: 500 GB
   4. Network: 1 Gbps

## Prerequisites
Golang v1.20 ([go releases and instructions](https://go.dev/dl/)).

## Build and run
1. Make sure you have the required golang version
```
go version
```
The output should comply with the golang version mentioned in the Prerequisites section.

 2. Clone source code from the repository and cd into it
```
git clone -b dev https://github.com/sideprotocol/sidechain.git
cd sidechain
```
 3. Build a sidechain node binary
```
make install
```
The command above will build a sidechain binary and store it under your $GOBIN directory. If you have it in your $PATH, sidechain binary should be available for execution:
```
sided version
1.0.4-rc1
```
If you have problems with PATH-related stuff, please refer to the go releases and instructions link in the prerequisites section.
