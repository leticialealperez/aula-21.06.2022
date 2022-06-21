import * as React from 'react';
import BoxImage from '../BoxImage/BoxImage';
import SectionContentStyled from './SectionContentStyled';

interface SectionContentProps {
  titulo: string;
  texto: string;
  reverse?: boolean;
  imagem: string;
}

const SectionContent: React.FC<SectionContentProps> = ({
  titulo,
  texto,
  reverse,
  imagem,
}) => {
  return (
    <SectionContentStyled ordem={reverse}>
      <div className='container-text'>
        <h2>{titulo}</h2>
        <p>{texto}</p>
      </div>
      <BoxImage urlImagem={imagem} />
    </SectionContentStyled>
  );
};

export default SectionContent;
