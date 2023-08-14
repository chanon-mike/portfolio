export const generateStripeTexture = (
  text: string,
  colors = { main: '#ffa1a1', secondary: 'blue' },
): HTMLCanvasElement => {
  const copyAmount = 2;
  const canvasSize = 640;
  const fontSize = canvasSize / copyAmount;
  const fontStyle = `bold ${fontSize}px`;

  const bitmap = document.createElement('canvas');
  const g = bitmap.getContext('2d');

  if (g) {
    g.font = fontStyle;
    bitmap.width = g.measureText(text).width;
    bitmap.height = fontSize * 2;

    const generateTextRow = (shift: number, i: number) => {
      g.fillStyle = Object.values(colors)[i];
      g.fillRect(0, shift * i, bitmap.width, bitmap.height);

      g.font = `Bold ${fontSize}px`;
      // g.fillStyle = Object.values(colors)[i];
      g.fillText(text, 0, fontSize * i - 40);
      g.fillStyle = Object.values(colors)[0];
    };

    Array(copyAmount + 1)
      .fill(0)
      .forEach((item, i) => {
        generateTextRow(bitmap.height / 2, i);
      });
  }

  return bitmap;
};
