# Merkle Airdrop Distributor

This repository provides a production-ready solution for distributing ERC-20 tokens to a large list of addresses. Instead of storing every eligible address on-chain (which is extremely expensive), this contract only stores a single 32-byte **Merkle Root**.

## How it Works
1. **Off-Chain**: Generate a Merkle Tree from a list of addresses and amounts.
2. **On-Chain**: Deploy the contract with the Merkle Root.
3. **Claim**: Users provide a "Merkle Proof" to the contract. The contract verifies the proof against the root to validate the claim.



## Features
* **Massive Gas Savings**: Storage cost is constant regardless of whether you have 10 or 10,000,000 users.
* **Security**: Built-in protection against double-claiming using a bitmask or mapping.
* **Automation**: Includes a JavaScript utility to generate proofs and the root.

## Usage
1. Prepare your JSON list of winners.
2. Run the generator script to get the Root.
3. Deploy and fund the contract with tokens.

## License
MIT
