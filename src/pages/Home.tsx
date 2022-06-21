import React from 'react';
import Banner from '../components/Banner/Banner';
import SectionContent from '../components/SectionContent/SectionContent';
import SectionIcons from '../components/SectionIcons/SectionIcons';
import img1 from '../assets/image1.jpg';
import img2 from '../assets/image2.jpg';
import img3 from '../assets/image3.jpg';
import Footer from '../components/Footer/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Banner titulo='Minha primeira aplicação em ReactJs.' />
      <SectionIcons />
      <SectionContent
        titulo='Titulo 1'
        texto='Texto 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque totam, adipisci ullam repellat debitis accusantium assumenda delectus magnam? Facere perspiciatis temporibus odit quae quo vel tempora suscipit optio nam sint? Ipsam sint dolores vero sed impedit magni a repellat dolorem accusantium, ipsum inventore non cum maiores, id omnis numquam, incidunt magnam sunt sit ab enim in repudiandae est fugiat. Veritatis.'
        imagem={img1}
      />
      <SectionContent
        titulo='Titulo 2'
        texto='Texto 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque totam, adipisci ullam repellat debitis accusantium assumenda delectus magnam? Facere perspiciatis temporibus odit quae quo vel tempora suscipit optio nam sint? Ipsam sint dolores vero sed impedit magni a repellat dolorem accusantium, ipsum inventore non cum maiores, id omnis numquam, incidunt magnam sunt sit ab enim in repudiandae est fugiat. Veritatis.'
        reverse
        imagem={img2}
      />
      <SectionContent
        titulo='Titulo 3'
        texto='Texto 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque totam, adipisci ullam repellat debitis accusantium assumenda delectus magnam? Facere perspiciatis temporibus odit quae quo vel tempora suscipit optio nam sint? Ipsam sint dolores vero sed impedit magni a repellat dolorem accusantium, ipsum inventore non cum maiores, id omnis numquam, incidunt magnam sunt sit ab enim in repudiandae est fugiat. Veritatis.'
        imagem={img3}
      />
      <Banner titulo='Contato' footer />
      <Footer />
    </>
  );
};

export default Home;
