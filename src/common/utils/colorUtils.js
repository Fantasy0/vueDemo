/**
 * 随机颜色
 * @returns {string}
 */
export function getRandomColor() {
  const rgb = [];
  for (let i = 0; i < 3; ++i) {
    //let num = Math.random() * 256;
    //let color = Math.floor(num).toString(16);
    let color = Math.floor(Math.random() * 256).toString(16);
    color = color.length == 1 ? '0' + color : color;
    console.info("color.toString(16)======:" + color);
    rgb.push(color);
  }
  return '#' + rgb.join('');
}
