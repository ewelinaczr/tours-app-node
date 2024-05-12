const screenWidth = parseFloat("1000vw");
const realScreenWidth = window.innerWidth;

const vwToPxConvFactor = realScreenWidth / screenWidth;

export function convertVwToPx(value) {
  return Math.round(value * vwToPxConvFactor);
}

export function convert1080Px(value) {
  return Math.round((value * realScreenWidth) / 1920);
}

export function convert1080PxToVw(value) {
  return convertVwToPx(pxTo1080Vw(value));
}

export function pxTo1080Vw(lengthInPx) {
  return `${convert1080PxToVw(lengthInPx)}vw`;
}
