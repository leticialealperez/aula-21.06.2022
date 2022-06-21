import styled from 'styled-components';

const FooterStyled = styled.footer`
  width: 100vw;
  height: 30vh;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  display: flex;
  align-items: center;
  justify-content: space-around;

  li {
    list-style: none;
    display: inline-flex;
    margin: 10px;
  }

  small {
    margin-left: 10px;
  }

  a {
    text-decoration: none;
    font-weight: 700;
    color: ${(props) => props.theme.primary};
  }

  .social-midias > span {
    font-size: 25px;
    color: ${(props) => props.theme.primary};
    margin: 5px;
  }
`;

export default FooterStyled;
