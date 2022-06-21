import styled from 'styled-components';

const ContainerIconStyled = styled.div`
  text-align: center;

  span {
    font-size: 80px;
    color: ${(props) => props.theme.primary};
  }
`;

export default ContainerIconStyled;
