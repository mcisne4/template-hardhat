require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-ethers')
require('hardhat-deploy')
require('dotenv').config()
require('hardhat-watcher')

module.exports = {
	defaultNetwork: 'hardhat',
	networks: {
		hardhat: { chainId: 31337 },
		localhost: { chainId: 31337 },
		ganache: {
			url: 'http://127.0.0.1:7545'
		},
		rinkeby: {
			url: process.env.NETWORK_RPC_URL,
			accounts: [process.env.ACCOUNT_PRIVATE_KEY],
			chainId: NETWORK_CHAIN_ID
		}
	},
	solidity: {
		version: '0.8.9',
		settings: {
			optimizer: {
				enabled: true,
				runs: 200
			}
		}
	},
	namedAccounts: {
		deployer: {
			default: 0,
			1: 0, // Mainnet
			4: 0 // Rinkeby
		},
		user1: {
			default: 1,
			1: 1, // Mainnet
			4: 1 // Rinkeby
		},
		user2: {
			default: 2,
			1: 2, // Mainnet
			4: 2 // Rinkeby
		},
		user3: {
			default: 3,
			1: 3, // Mainnet
			4: 3 // Rinkeby
		}
	},
	watcher: {
		retest: {
			tasks: [
				{
					command: 'test',
					params: {
						testFiles: ['{path}']
					}
				}
			],
			files: ['./test/**.*test.js'],
			verbose: true
		},
		recompile: {
			tasks: ['compile'],
			files: ['./contracts'],
			verbose: true
		},
		redeploy: {
			tasks: ['deploy'],
			files: ['./deploy'],
			verbose: true
		}
	}
}
