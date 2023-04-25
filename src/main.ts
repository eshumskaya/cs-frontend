import { link } from 'fs';
import BitHelper from './base/lection1/bit-helper';
import ImageHelper from './base/lection2/image-helper';
import LinkedList from './base/lection3/linked-list';

// Lection 1
/*const bitHelper = new BitHelper(new Uint8Array([0b1110, 0b1101]));
console.log(bitHelper.get(0, 1));
console.log(bitHelper.get(1, 1));
bitHelper.set(0, 1, 0);
console.log(bitHelper.get(0, 1));
bitHelper.set(1, 1, 1);
console.log(bitHelper.get(1, 1));*/

// Lection 2. Task 1
/*const imageHelper = new ImageHelper('./images/IMG_20210705_114803.jpg');
imageHelper.inverseColours();*/

// Lection 2. Task 2

// Lection 2. Task 3

// Lection 3. Task 1
const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);
/*console.log(linkedList.first.value);           // 1
console.log(linkedList.last.value);            // 3
console.log(linkedList.first.next.value);      // 2
console.log(linkedList.first.next.prev.value); // 1;*/
for (const value of linkedList) {
    console.log(value.value);
}