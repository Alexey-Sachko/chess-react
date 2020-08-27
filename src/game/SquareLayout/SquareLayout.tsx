import React, { ReactNode } from "react";
import cn from "classnames";
import { Color } from "../core/color.enum";
import "./SquareLayout.css";

type Props = {
  color: Color;
  children: ReactNode;
};

export default function SquareLayout({ color, children }: Props) {
  const className = cn("square-layout", {
    ["bg-white"]: color === Color.WHITE,
    ["bg-black"]: color === Color.BLACK,
  });
  return <div className={className}>{children}</div>;
}
