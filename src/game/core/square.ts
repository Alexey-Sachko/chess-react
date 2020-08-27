import { Figure } from './figures';
import { Color } from './color.enum';

export class Square {
  private _figure: Figure | null = null;

  constructor(public readonly color: Color) {}

  get isBusy(): boolean {
    return !!this._figure;
  }

  get figure(): Figure | null {
    return this._figure;
  }

  applyFigure(f: Figure) {
    this._figure = f;
  }

  removeFigure(): Figure {
    const figure = this._figure;
    if (!figure) {
      throw new Error('');
    }

    this._figure = null;
    return figure;
  }
}
