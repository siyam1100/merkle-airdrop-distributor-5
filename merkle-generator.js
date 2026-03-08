const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');
const { ethers } = require('ethers');

// Example data: [index, address, amount]
const elements = [
    { index: 0, address: "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2", amount: "100" },
    { index: 1, address: "0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db", amount: "200" }
];

const leaves = elements.map(x => 
    keccak256(ethers.solidityPacked(["uint256", "address", "uint256"], [x.index, x.address, x.amount]))
);

const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
const root = tree.getHexRoot();

console.log("Merkle Root:", root);

// Generate proof for the first element
const proof = tree.getHexProof(leaves[0]);
console.log("Proof for Index 0:", proof);
