require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture stove dash sad artwork give praise army gift'; 
let testAccounts = [
"0x94479267efd15d65cab16613c7d77fd09557523ba571dc635be6870287074f15",
"0xc68e4fcbc15f285347f56fc2a56b8daf100325c5ffad193b6870a12dd8235415",
"0x74ab6d25a15870aba3cbad06e33d926da0d45887ac0226452637f6e92861d466",
"0xb7fe5f296e8f16828437028d1d9ead22f7c29e2540521a81e97afca68c0dc69f",
"0x56be758ceb168735d27fe84a0eaadde2d87bc7718a13484978df87099e4be63a",
"0x5d92bea0d40a35834945b06cd601ace9f24d3218d9de93239223c1dc47321f0e",
"0x639681ee960669c2c2cbc27919dc0ffbed249d213d3daa5cb78df4bceaf88837",
"0xd9607210bfc3b0085cca2b8ee8c2c9e35a70a74b7fc47a1e2af888893b281aa6",
"0xfa50dc8328c5be1673f89666fe43b7e4dc7eb4adfa1b63b6cef715a2c306e127",
"0xbb2f600ed9a4b640a719501aa84e47272c1983cf9a1f5a9eff2210a9523fc641"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
