import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--white);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text);

      &:first-child {
        font-weight: bold;
        border-radius: 0.25rem 0 0 0.25rem;
      }
      &:last-child {
        border-radius: 0 0.25rem 0.25rem 0;
      }
      &.entrada {
        color: var(--green);
      }
      &.saida {
        color: var(--red);
      }

      button {
        width: 100%;
        background-color: transparent;
        border: 0;

        p {
          font-size: 2rem;
          margin-top: -1rem;
          opacity: 40%;
        }
      }
    }
  }
`;
