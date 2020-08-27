import { Color } from './color.enum';

export type FigureType =
  | 'rook'
  | 'knight'
  | 'bishop'
  | 'king'
  | 'queen'
  | 'pawn';

export class Figure {
  private static _lastId = 0;
  readonly id: number;
  constructor(public readonly type: FigureType, public readonly color: Color) {
    this.id = ++Figure._lastId;
  }
}

export class Knight extends Figure {
  constructor(color: Color) {
    super('knight', color);
  }
}

export class Rook extends Figure {
  constructor(color: Color) {
    super('rook', color);
  }
}

export class Bishop extends Figure {
  constructor(color: Color) {
    super('bishop', color);
  }
}

export class King extends Figure {
  constructor(color: Color) {
    super('king', color);
  }
}

export class Queen extends Figure {
  constructor(color: Color) {
    super('queen', color);
  }
}

export class Pawn extends Figure {
  constructor(color: Color) {
    super('pawn', color);
  }
}
