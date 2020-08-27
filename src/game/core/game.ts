import { Field } from './field';
import { Figure, Rook, Knight, Bishop, King, Queen, Pawn } from './figures';
import { Color } from './color.enum';

const pawns = (color: Color): Figure[] => {
  const arr: Figure[] = [];
  for (let x = 0; x < 8; x++) {
    arr.push(new Pawn(color));
  }
  return arr;
};

const empty = (): null[] => {
  return Array(8).fill(null);
};

export const field = new Field();

field.initFigures([
  [
    new Rook(Color.WHITE),
    new Knight(Color.WHITE),
    new Bishop(Color.WHITE),
    new King(Color.WHITE),
    new Queen(Color.WHITE),
    new Bishop(Color.WHITE),
    new Knight(Color.WHITE),
    new Rook(Color.WHITE),
  ],
  pawns(Color.WHITE),
  empty(),
  empty(),
  empty(),
  empty(),
  pawns(Color.BLACK),
  [
    new Rook(Color.BLACK),
    new Knight(Color.BLACK),
    new Bishop(Color.BLACK),
    new King(Color.BLACK),
    new Queen(Color.BLACK),
    new Bishop(Color.BLACK),
    new Knight(Color.BLACK),
    new Rook(Color.BLACK),
  ],
]);
