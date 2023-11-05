import styled from "styled-components";

export const StyledStep = styled.div<{ $status?: any; $color?: any }>`
  &:before {
    content: "";
    position: absolute;
    left: 15px;
    top: 0;
    width: 2px;
    background: ${(props) =>
      props.$color === "blue" &&
      (props.$status === "active" || props.$status === "completed")
        ? "#2196F3"
        : props.$color === "green" &&
          (props.$status === "active" || props.$status === "completed")
        ? "#4CAF50"
        : props.$color === "red" &&
          (props.$status === "active" || props.$status === "completed")
        ? "#F44336"
        : props.$color === "orange" &&
          (props.$status === "active" || props.$status === "completed")
        ? "#FF9800"
        : props.$color === "yellow" &&
          (props.$status === "active" || props.$status === "completed")
        ? "#FFEB3B"
        : props.$color === "purple" &&
          (props.$status === "active" || props.$status === "completed")
        ? "#5E35B1"
        : props.$color === "default" &&
          (props.$status === "active" || props.$status === "completed")
        ? "#9E9E9E"
        : "#EBEBEB"};
    height: 100%;
  }
`;
