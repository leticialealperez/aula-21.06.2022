import styled from 'styled-components';

interface BoxImageProps {
  urlImagem: string;
}

const BoxImage = styled.div<BoxImageProps>`
  width: 50vw;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.urlImagem});
`;

export default BoxImage;
