require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remind pumpkin grace near outer trade'; 
let testAccounts = [
"0xee2eeb67da22faa788d13d7431640f6fd168845ddd3292af70045e84a8ed9959",
"0xa4663e2ced95292524ebaf9f0a6395f90a48f773456566a67eeb90f0997b5de9",
"0xbdd1c487bdd3e94b229d0c4540a1d84d245bae4530d186a9370955b066e5e26a",
"0x5f4bc68a0300018d36ca229f911b57359b6b3152b171bc5b7096f301f3679863",
"0x5c39f6185c9742f6650358d2f9bca997f0b9eb6e3c485449495e27a2b3eea487",
"0x537b0f1c42f53c82f9d659faec748564e8ee8c40b920b24a5c554a8bb127e2ab",
"0xbc65014589736af361d366c452c66d256e0234a8158d38020ef4d062a9268156",
"0xc3fc7ef337e90de4d6b03eea5bf94d1594d409b93ed73f1da9559eb472e47788",
"0xaf443ba3782429308252d7776d5d843cbca699ac26c1a45e3e30849283f2ec97",
"0x7d471746a1b4ddd9f7c64bd89cc368339faa515fa4a1cda2be7cbc874d444081"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

