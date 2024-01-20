import styled from "styled-components";

export const StyledDatePicker = styled.div`
  > .react-datepicker__tab-loop {
    .react-datepicker-popper {
      > div {
        .react-datepicker {
          padding: 10px;
          background-color: #fafafa;
          /* background-color: rgba(252, 252, 252, 0.55); */
          backdrop-filter: blur(4px);
          border: unset !important;
          box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
            0 4px 6px -4px rgb(0 0 0 / 0.1);
          > .react-datepicker__month-container {
            > .react-datepicker__header {
              background-color: transparent;
              border-bottom: unset !important;

              > .react-datepicker__current-month {
                font-size: 1rem;
                height: 2rem;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              > .react-datepicker__day-names {
                > .react-datepicker__day-name {
                  width: 3em !important;
                  line-height: 3em !important;
                  font-weight: 600;
                }
              }
            }
            > .react-datepicker__month {
              > .react-datepicker__week {
                > .react-datepicker__day {
                  width: 3em !important;
                  line-height: 3em !important;
                  background: white;
                  font-weight: 600;
                  &:hover {
                    background: #f0ebf9 !important;
                  }
                }
                > .react-datepicker__day--selected {
                  background: #5e35b1 !important;
                }
              }
            }
          }
        }
      }
    }
  }
`;
