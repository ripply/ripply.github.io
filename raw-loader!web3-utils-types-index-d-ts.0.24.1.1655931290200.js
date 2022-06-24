(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ 2921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n    This file is part of web3.js.\n\n    web3.js is free software: you can redistribute it and/or modify\n    it under the terms of the GNU Lesser General Public License as published by\n    the Free Software Foundation, either version 3 of the License, or\n    (at your option) any later version.\n\n    web3.js is distributed in the hope that it will be useful,\n    but WITHOUT ANY WARRANTY; without even the implied warranty of\n    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n    GNU Lesser General Public License for more details.\n\n    You should have received a copy of the GNU Lesser General Public License\n    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.\n*/\n/**\n * @file index.d.ts\n * @author Josh Stevens <joshstevens19@hotmail.co.uk>\n * @date 2018\n */\n\nimport BN = require('bn.js');\n\nexport type Unit =\n    | 'noether'\n    | 'wei'\n    | 'kwei'\n    | 'Kwei'\n    | 'babbage'\n    | 'femtoether'\n    | 'mwei'\n    | 'Mwei'\n    | 'lovelace'\n    | 'picoether'\n    | 'gwei'\n    | 'Gwei'\n    | 'shannon'\n    | 'nanoether'\n    | 'nano'\n    | 'szabo'\n    | 'microether'\n    | 'micro'\n    | 'finney'\n    | 'milliether'\n    | 'milli'\n    | 'ether'\n    | 'kether'\n    | 'grand'\n    | 'mether'\n    | 'gether'\n    | 'tether';\n\nexport type Mixed =\n    | string\n    | number\n    | BN\n    | {\n          type: string;\n          value: string;\n      }\n    | {\n          t: string;\n          v: string | BN | number;\n      }\n    | boolean;\n\nexport type Hex = string | number;\n\n// utils types\nexport function isBN(value: string | number): boolean;\nexport function isBigNumber(value: BN): boolean;\nexport function toBN(value: number | string): BN;\nexport function toTwosComplement(value: number | string | BN): string;\nexport function isAddress(address: string, chainId?: number): boolean;\nexport function isHex(hex: Hex): boolean;\nexport function isHexStrict(hex: Hex): boolean;\nexport function asciiToHex(string: string, length?: number): string;\nexport function hexToAscii(string: string): string;\nexport function toAscii(string: string): string;\nexport function bytesToHex(bytes: number[]): string;\nexport function numberToHex(value: number | string | BN): string;\nexport function checkAddressChecksum(address: string, chainId?: number): boolean;\nexport function fromAscii(string: string): string;\nexport function fromDecimal(value: string | number): string;\nexport function fromUtf8(string: string): string;\nexport function fromWei(value: string | BN, unit?: Unit): string;\nexport function hexToBytes(hex: Hex): number[];\nexport function hexToNumber(hex: Hex): number;\nexport function hexToNumberString(hex: Hex): string;\nexport function hexToString(hex: Hex): string;\nexport function hexToUtf8(string: string): string;\nexport function keccak256(value: string | BN): string;\nexport function padLeft(value: string | number, characterAmount: number, sign?: string): string;\nexport function leftPad(string: string | number, characterAmount: number, sign?: string): string;\nexport function rightPad(string: string | number, characterAmount: number, sign?: string): string;\nexport function padRight(string: string | number, characterAmount: number, sign?: string): string;\nexport function sha3(value: string | BN): string | null;\nexport function sha3Raw(value: string | BN): string;\nexport function randomHex(bytesSize: number): string;\nexport function utf8ToHex(string: string): string;\nexport function stringToHex(string: string): string;\nexport function toChecksumAddress(address: string, chainId?: number): string;\nexport function toDecimal(hex: Hex): number;\nexport function toHex(value: number | string | BN): string;\nexport function toUtf8(string: string): string;\nexport function toWei(val: BN, unit?: Unit): BN;\nexport function toWei(val: string, unit?: Unit): string;\nexport function isBloom(bloom: string): boolean;\nexport function isInBloom(bloom: string, value: string | Uint8Array): boolean;\nexport function isUserEthereumAddressInBloom(bloom: string, ethereumAddress: string): boolean;\nexport function isContractAddressInBloom(bloom: string, contractAddress: string): boolean;\nexport function isTopicInBloom(bloom: string, topic: string): boolean;\nexport function isTopic(topic: string): boolean;\nexport function jsonInterfaceMethodToString(abiItem: AbiItem): string;\nexport function soliditySha3(...val: Mixed[]): string | null;\nexport function soliditySha3Raw(...val: Mixed[]): string;\nexport function encodePacked(...val: Mixed[]): string | null;\nexport function getUnitValue(unit: Unit): string;\nexport function unitMap(): Units;\nexport function testAddress(bloom: string, address: string): boolean;\nexport function testTopic(bloom: string, topic: string): boolean;\nexport function getSignatureParameters(signature: string): {r: string; s: string; v: number};\nexport function stripHexPrefix(str: string): string;\nexport function toNumber(value: number | string | BN): number;\n\n// interfaces\nexport interface Utils {\n    isBN(value: string | number): boolean;\n    isBigNumber(value: BN): boolean;\n    toBN(value: number | string): BN;\n    toTwosComplement(value: number | string | BN): string;\n    isAddress(address: string, chainId?: number): boolean;\n    isHex(hex: Hex): boolean;\n    isHexStrict(hex: Hex): boolean;\n    asciiToHex(string: string, length?: number): string;\n    hexToAscii(string: string): string;\n    toAscii(string: string): string;\n    bytesToHex(bytes: number[]): string;\n    numberToHex(value: number | string | BN): string;\n    checkAddressChecksum(address: string, chainId?: number): boolean;\n    fromAscii(string: string): string;\n    fromDecimal(value: string | number): string;\n    fromUtf8(string: string): string;\n    fromWei(value: string | BN, unit?: Unit): string;\n    hexToBytes(hex: Hex): number[];\n    hexToNumber(hex: Hex): number;\n    hexToNumberString(hex: Hex): string;\n    hexToString(hex: Hex): string;\n    hexToUtf8(string: string): string;\n    keccak256(value: string | BN): string;\n    padLeft(value: string | number, characterAmount: number, sign?: string): string;\n    leftPad(string: string | number, characterAmount: number, sign?: string): string;\n    rightPad(string: string | number, characterAmount: number, sign?: string): string;\n    padRight(string: string | number, characterAmount: number, sign?: string): string;\n    sha3(value: string | BN): string | null;\n    randomHex(bytesSize: number): string;\n    utf8ToHex(string: string): string;\n    stringToHex(string: string): string;\n    toChecksumAddress(address: string, chainId?: number): string;\n    toDecimal(hex: Hex): number;\n    toHex(value: number | string | BN): string;\n    toUtf8(string: string): string;\n    toWei(val: BN, unit?: Unit): BN;\n    toWei(val: string, unit?: Unit): string;\n    isBloom(bloom: string): boolean;\n    isInBloom(bloom: string, value: string | Uint8Array): boolean;\n    isUserEthereumAddressInBloom(bloom: string, ethereumAddress: string): boolean;\n    isContractAddressInBloom(bloom: string, contractAddress: string): boolean;\n    isTopicInBloom(bloom: string, topic: string): boolean;\n    isTopic(topic: string): boolean;\n    jsonInterfaceMethodToString(abiItem: AbiItem): string;\n    soliditySha3(...val: Mixed[]): string | null;\n    soliditySha3Raw(...val: Mixed[]): string;\n    encodePacked(...val: Mixed[]): string | null;\n    getUnitValue(unit: Unit): string;\n    unitMap(): Units;\n    testAddress(bloom: string, address: string): boolean;\n    testTopic(bloom: string, topic: string): boolean;\n    getSignatureParameters(signature: string): {r: string; s: string; v: number};\n    stripHexPrefix(str: string): string;\n    toNumber(value: number | string | BN): number;\n}\n\nexport interface Units {\n    noether: string;\n    wei: string;\n    kwei: string;\n    Kwei: string;\n    babbage: string;\n    femtoether: string;\n    mwei: string;\n    Mwei: string;\n    lovelace: string;\n    picoether: string;\n    gwei: string;\n    Gwei: string;\n    shannon: string;\n    nanoether: string;\n    nano: string;\n    szabo: string;\n    microether: string;\n    micro: string;\n    finney: string;\n    milliether: string;\n    milli: string;\n    ether: string;\n    kether: string;\n    grand: string;\n    mether: string;\n    gether: string;\n    tether: string;\n}\n\nexport type AbiType = 'function' | 'constructor' | 'event' | 'fallback';\nexport type StateMutabilityType = 'pure' | 'view' | 'nonpayable' | 'payable';\n\nexport interface AbiItem {\n    anonymous?: boolean;\n    constant?: boolean;\n    inputs?: AbiInput[];\n    name?: string;\n    outputs?: AbiOutput[];\n    payable?: boolean;\n    stateMutability?: StateMutabilityType;\n    type: AbiType;\n    gas?: number;\n}\n\nexport interface AbiInput {\n    name: string;\n    type: string;\n    indexed?: boolean;\n\tcomponents?: AbiInput[];\n    internalType?: string;\n}\n\nexport interface AbiOutput {\n    name: string;\n    type: string;\n\tcomponents?: AbiOutput[];\n    internalType?: string;\n}\n");

/***/ })

}]);
//# sourceMappingURL=raw-loader!web3-utils-types-index-d-ts.0.24.1.1655931290200.js.map
//# sourceMappingURL=raw-loader!web3-utils-types-index-d-ts.0.24.1.1655931290200.js.map