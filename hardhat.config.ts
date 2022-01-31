import { config as configDotenv } from "dotenv";
import type { HardhatUserConfig } from "hardhat/types";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";

configDotenv();

const config: HardhatUserConfig = {
    solidity: {
        version: "0.5.17",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
    defaultNetwork: "auroratestnet",
    networks: {
        hardhat: {},
        aurora: {
            chainId: 1313161554,
            url: `https://mainnet.aurora.dev/${process.env.AURORA_API_KEY}`,
            accounts: {
                mnemonic: process.env.MNEMONIC,
            },
        },
        auroratestnet: {
            chainId: 1313161555,
            url: "https://testnet.aurora.dev",
            accounts: {
                mnemonic: process.env.MNEMONIC,
            },
        },
    },
    typechain: {
        outDir: "typechain",
    },
};

export default config;
