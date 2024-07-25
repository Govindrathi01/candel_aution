# Candle Auction

This project implements a candle auction using Solidity, Hardhat/Truffle.

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

- Node.js
- npm
- Hardhat or Truffle

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/candle-auction.git
    cd candle-auction
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

### Running the Auction

#### Using Hardhat

1. Compile the contract:
    ```bash
    npx hardhat compile
    ```

2. Deploy the contract:
    ```bash
    npx hardhat run scripts/deploy.js
    ```

#### Using Truffle

1. Compile the contract:
    ```bash
    truffle compile
    ```

2. Deploy the contract:
    ```bash
    truffle migrate
    ```

### Interacting with the Contract

Use the following commands to interact with the deployed contract.

```javascript
// Example of placing a bid
let bidTx = await auction.bid({ value: ethers.utils.parseEther("1.0") });
await bidTx.wait();

// Example of ending the auction
let endTx = await auction.auctionEnd();
await endTx.wait();
