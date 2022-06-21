import * as React from 'react';
import BannerStyled from './BannerStyled';

interface BannerProps {
  titulo: string;
  footer?: boolean;
}

const Banner: React.FC<BannerProps> = ({ titulo, footer }) => {
  return (
    <BannerStyled tamanho={footer}>
      <h1>{titulo}</h1>
    </BannerStyled>
  );
};

export default Banner;
