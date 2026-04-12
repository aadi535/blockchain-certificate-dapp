# Blockchain Certificate Verification DApp

## Overview
This project is a blockchain-based certificate verification system that securely stores and verifies certificates using smart contracts.
It prevents fake certificates by ensuring data is tamper-proof and verifiable.

## Features
- Secure certificate storage using blockchain
- SHA-256 hashing for data integrity
- QR code-based verification
- Admin-only certificate addition
- Input validation and error handling
- Interactive UI with success/failure animation

## Tech Stack
- Solidity (Smart Contracts)
- Hardhat (Local Blockchain)
- Ethers.js
- MetaMask
- HTML, CSS, JavaScript

## How it Works
1- Admin enters certificate details
2- Data is hashed using SHA-256
3- Stored in blockchain via smart contract
4- QR code is generated
5- User verifies certificate using ID or QR

## 📸 Screenshots
🔹 Add Certificate
<img width="1104" height="949" alt="Screenshot 2026-04-11 215154" src="https://github.com/user-attachments/assets/58a39b4d-b59b-45fe-8dc4-5c5994cc25ed" />
🔹 MetaMask Transaction
<img width="1464" height="884" alt="Screenshot 2026-04-11 215311" src="https://github.com/user-attachments/assets/da61f570-1eba-4215-9180-f6991e582208" />
🔹 Verification UI with QR Code Output
<img width="1028" height="909" alt="Screenshot 2026-04-11 215326" src="https://github.com/user-attachments/assets/5a8fd2ed-fe8e-4b5d-a630-0d51aadc822d" />
<img width="1041" height="962" alt="Screenshot 2026-04-11 215429" src="https://github.com/user-attachments/assets/3d8c2356-dff0-446f-b061-10d3b198b553" />
<img width="945" height="919" alt="Screenshot 2026-04-11 215448" src="https://github.com/user-attachments/assets/72337750-c095-4e24-9fd5-65e1ab989c48" />

## ▶️ How to Run
- npx hardhat node
- npx hardhat run scripts/deploy.js --network localhost
- live-server
- Then update the contract address in app.js.

## ⚠️ Note
- Every time the Hardhat node restarts, the contract must be redeployed and the address updated.

## 📈 Future Improvements
- Deploy on Ethereum testnet
- Real QR scanning using the camera
- Multi-admin support

## 👨‍💻 Author
 Aditya Raj
 
## Contributors
Simna karengal niyaz
