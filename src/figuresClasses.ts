export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

type Color = 'red' | 'green' | 'blue';

function round(area: number): number {
  return Math.floor((area) * 100) / 100;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const arr: number[] = [a, b, c]
      .sort((prev: number, next: number) => next - prev);

    if (a <= 0 || b <= 0 || c <= 0 || arr[0] >= arr[1] + arr[2]) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;

    return round(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)));
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`radius ${radius} can't form a circle`);
    }
  }

  getArea(): number {
    return round(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(`sides ${width} and ${height} can't form a rectangle`);
    }
  }

  getArea(): number {
    return round(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
