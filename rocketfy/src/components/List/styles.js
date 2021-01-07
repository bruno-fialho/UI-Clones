import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;

  // Avoid the element to grow or shrink and determine a base value
  // flex: flex-grow | flex-shrink | flex-basis
  flex: 0 0 320px;

  // style all div that has another div before
  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }

    button {
      width: 42px;
      height: 42px;
      border-radius: 18px;
      background: #3b5bfd;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 30px;
  }
`;
