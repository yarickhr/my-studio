import React from 'react';
import Header from '../../components/Header/Header.jsx';
import ImageGallery from 'react-image-gallery';
import styled from 'styled-components';

const GalleryWrapper = styled.div`

    height: 80vh;

    .church-gallery
    {
        height: 100%;

        .image-gallery-content,
        .image-gallery-slide-wrapper,
        .image-gallery-swipe,
        .image-gallery-slides,
        .image-gallery-slide
        {
            height: 100%;
        }
    }
`;


const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

const HomePage = () => (
    <React.Fragment>
        <Header/>
        <GalleryWrapper>
            <ImageGallery
              infinite 
              showBullets
              autoPlay
              additionalClass='church-gallery'
              slideInterval={3000}
              showPlayButton={false}
              showThumbnails={false}
              showFullscreenButton={false}
              items={images}/>
        </GalleryWrapper>
    </React.Fragment>
);

export default HomePage;