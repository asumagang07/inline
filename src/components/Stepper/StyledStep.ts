import styled from "styled-components";
import { colorConfig } from "../../common/colors";

export const StyledStep = styled.div<{
  $current?: any;
  $index?: any;
  $length?: any;
  $color?: any;
}>`
  &:before {
    content: "";
    display: ${(props) =>
      props.$length === props.$index + 1 ? "none" : "flex"};
    position: absolute;
    left: 15px;
    top: 0;
    width: 2px;
    height: 100%;
    background: ${(props) =>
      props.$color === "blue" && props.$current > props.$index
        ? colorConfig.blue[500]
        : props.$color === "green" && props.$current > props.$index
        ? colorConfig.green[500]
        : props.$color === "red" && props.$current > props.$index
        ? colorConfig.red[500]
        : props.$color === "orange" && props.$current > props.$index
        ? colorConfig.orange[500]
        : props.$color === "yellow" && props.$current > props.$index
        ? colorConfig.yellow[500]
        : props.$color === "purple" && props.$current > props.$index
        ? colorConfig.purple[500]
        : props.$color === "default" && props.$current > props.$index
        ? colorConfig.default[500]
        : colorConfig.default[200]};
  }
`;
