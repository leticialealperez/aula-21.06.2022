import * as React from 'react';
import { BsBoxSeam, BsHandThumbsUp, BsLaptop } from 'react-icons/bs';
import styled from 'styled-components';
import ContainerIcon from '../ContainerIcon/ContainerIcon';

const SectionIconStyled = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
`;

const SectionIcons = () => {
  return (
    <SectionIconStyled>
      <ContainerIcon titulo='Titulo 1' texto='Texto 1' icon={<BsLaptop />} />
      <ContainerIcon titulo='Titulo 2' texto='Texto 2' icon={<BsBoxSeam />} />
      <ContainerIcon
        titulo='Titulo 3'
        texto='Texto 3'
        icon={<BsHandThumbsUp />}
      />
    </SectionIconStyled>
  );
};

export default SectionIcons;
