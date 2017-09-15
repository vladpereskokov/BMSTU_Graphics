import Canvas from './canvas/canvas';
import Sobel from './sobel/sobel';
import * as constants from './constant/constant';

const canvas = new Canvas('picture', '2d', {
  width: constants.WIDTH,
  height: constants.HEIGHT
});
const ctx = canvas.context;

const image = new Image();
image.src = constants.IMAGE_URL;

image.addEventListener('load', () => {
  ctx.drawImage(image, 0, 0);
});

const sobel = new Sobel(canvas.canvas.getImageData(0, 0, canvas.canvas.width, canvas.canvas.height));
sobel.image;
