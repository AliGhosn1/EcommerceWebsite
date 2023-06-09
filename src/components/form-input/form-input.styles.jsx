import { styled, css } from "styled-components";

const colors = {
  subColor: 'grey',
  mainColor: 'black'
}

const ShrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: ${colors.mainColor};
`

export const Group = styled.div`
  position: relative;
  margin: 45px 0;

  .form-input {
    background: none;
    background-color: white;
    color: ${colors.subColor};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${colors.subColor};
    margin: 25px 0;

    &:focus {
      outline: none;
    }
  }

  input[type='password'] {
    letter-spacing: 0.3em;
  }

  .form-input-label {
    color: ${colors.subColor};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    &.shrink {
      ${ShrinkLabel}
    }
  }
`
