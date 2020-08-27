import React from "react";
import { field } from "../core/game";
import SquareLayout from "../SquareLayout/SquareLayout";
import FigureLayout from "../FigureLayout";

import "../shared.css";
import "./FieldLayout.css";

export default function FieldLayout() {
  return (
    <div className="field-layout-wrapper">
      <div className="field-layout">
        {field.squares.map((el, idx) => (
          <div className="field-layout__row" key={idx}>
            {el.map((square, _idx) => (
              <SquareLayout key={_idx} color={square.color}>
                {square.figure ? <FigureLayout figure={square.figure} /> : null}
              </SquareLayout>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
