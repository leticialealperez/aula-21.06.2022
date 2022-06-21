import styled from 'styled-components';

interface SectionProps {
  ordem?: boolean;
}

const SectionContentStyled = styled.section<SectionProps>`
  width: 100vw;
  height: 400px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  flex-direction: ${(props) => (props.ordem ? 'row-reverse' : 'row')};

  .container-text {
    width: 50vw;
    padding: 50px;
  }
`;

export default SectionContentStyled;
