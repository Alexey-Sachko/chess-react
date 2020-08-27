import { Square } from './square';
import { Figure } from './figures';
import { flatten } from './utils';
import { Color } from './color.enum';

export class Field {
  private readonly _matrix: Square[][];
  private readonly _maxX = 8;
  private readonly _maxY = 8;

  constructor() {
    const matrix: Square[][] = [];

    for (let y = 0; y < this._maxX; y++) {
      if (!matrix[y]) {
        matrix.push([]);
      }

      for (let x = 0; x < this._maxY; x++) {
        const isEven = (x + y) % 2 === 0;
        matrix[y].push(new Square(isEven ? Color.BLACK : Color.WHITE));
      }
    }

    this._matrix = matrix;
  }

  get squares(): Readonly<Readonly<Square[]>[]> {
    return this._matrix;
  }

  addFigure(f: Figure, [x, y]: [number, number]) {
    this._matrix[y][x].applyFigure(f);
  }

  moveFigure(id: number, x: number, y: number) {
    const allSquares: Square[] = flatten(this._matrix);
    const foundSquare = allSquares.find((square) => square.figure?.id === id);
    if (!foundSquare) {
      throw new Error(
        `Not fouund square that contains figure with id: '${id}'`
      );
    }

    const targetSquare = this._matrix[y][x];
    if (targetSquare.isBusy) {
      throw new Error(`Target square is already busy`);
    }

    targetSquare.applyFigure(foundSquare.removeFigure());
  }

  initFigures(figuresMatrix: (Figure | null)[][]) {
    for (let y = 0; y < figuresMatrix.length; y++) {
      const xItems = figuresMatrix[y];
      for (let x = 0; x < xItems.length; x++) {
        const figure = xItems[x];
        if (figure) {
          this.addFigure(figure, [x, y]);
        }
      }
    }
  }
}
