declare class ColorThief {
  constructor();
  getColor(image: HTMLImageElement, quality?: number): [number, number, number];
  getPalette(
    image: HTMLImageElement,
    colorCount?: number,
    quality?: number
  ): [number, number, number][];
}
