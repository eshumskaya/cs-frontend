import BitHelper from './base/lection1/bit-helper';

const bitHelper = new BitHelper(new Uint8Array([0b1110, 0b1101]));
console.log(bitHelper.get(0, 1));
console.log(bitHelper.get(1, 1));
bitHelper.set(0, 1, 0);
console.log(bitHelper.get(0, 1));
bitHelper.set(1, 1, 1);
console.log(bitHelper.get(1, 1));
