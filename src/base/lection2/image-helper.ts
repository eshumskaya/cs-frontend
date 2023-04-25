import { createCanvas, loadImage } from 'canvas';
import * as fs  from 'fs';

export default class ImageHelper {
    filePath: string;

    constructor(filePath: string){
        this.filePath = filePath;
    }

    inverseColours(){
        loadImage(this.filePath).then((image) => {
            const canvas = createCanvas(image.width, image.height)
            const ctx = canvas.getContext('2d');
            ctx.drawImage(image, 0, 0);
            const imgData = ctx.getImageData(0, 0, image.width, image.height);
            const pix = imgData.data;
            const pixLen = pix.length;
            for (let pixel = 0; pixel < pixLen; pixel += 4) {
              pix[pixel] = 255 - pix[pixel];
              pix[pixel + 1] = 255 - pix[pixel + 1];
              pix[pixel + 2] = 255 - pix[pixel + 2];
            }
            ctx.putImageData(imgData, 0, 0);
            const buffer = canvas.toBuffer("image/jpeg");
            fs.writeFileSync("./images/result.jpg", buffer);
        });
    }    
}