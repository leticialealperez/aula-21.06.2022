import styled from 'styled-components';
import img1 from '../../assets/image-bg.jpg';

interface BannerProps {
  tamanho?: boolean;
}

const BannerStyled = styled.header<BannerProps>`
  background-image: url(${img1});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: ${(props) => (props.tamanho ? '30vh' : '50vh')};
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: #fff;
  }
`;

export default BannerStyled;
