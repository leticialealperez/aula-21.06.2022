import * as React from 'react';
import ContainerIconStyled from './ContainerIconStyled';

interface ContainerIconProps {
  icon: React.ReactNode;
  titulo: string;
  texto: string;
}

const ContainerIcon: React.FC<ContainerIconProps> = ({
  icon,
  titulo,
  texto,
}) => {
  return (
    <ContainerIconStyled>
      <span>{icon}</span>
      <h2>{titulo}</h2>
      <p>{texto}</p>
    </ContainerIconStyled>
  );
};

export default ContainerIcon;
