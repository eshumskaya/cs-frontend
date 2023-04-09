export default class BitHelper {
    arr: Uint8Array;

    constructor(arr: Uint8Array){
        this.arr = arr;
    }

    get(elementIndex: number, bitIndex: number): number {
        return (this.arr[elementIndex] & (1 << bitIndex)) > 0 ? 1 : 0;
    }

    set(elementIndex: number, bitIndex: number, newValue: number): void {
        if(newValue === 0){
            this.arr[elementIndex] &= ~(1 << bitIndex);
        }
        else {
            this.arr[elementIndex] |= (1 << bitIndex);
        }
        
    }
}