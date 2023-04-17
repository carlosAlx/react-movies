import { MouseEventHandler } from "react";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

interface customArrow {
    onClick?: MouseEventHandler;
  }
  export const NextArrow = ({ onClick }: customArrow) => {
    return (
      <a onClick={onClick}>
        <i className="control_right">
          <SlArrowRight className="arrow" />
        </i>
      </a>
    );
  };
  
  export const PrevArrow = ({ onClick }: customArrow) => {
    return (
      <a onClick={onClick}>
        <i className="control_left">
          <SlArrowLeft className="arrow" />
        </i>
      </a>
    );
  };