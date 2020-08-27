import React from "react";
import cn from "classnames";

import "./FigureLayout.css";
import { Figure } from "../core/figures";
import { Color } from "../core/color.enum";

type FigureLayoutProps = {
  figure: Figure;
};

export default function FigureLayout({ figure }: FigureLayoutProps) {
  const className = cn("figure", figure.type, {
    black: figure.color === Color.BLACK,
    white: figure.color === Color.WHITE,
  });
  return <div className={className}></div>;
}
