import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";


const images = [
  {
    original: "img/gallery/1.jpg",
    thumbnail: "img/gallery/1.jpg",
  },
  {
    original: "img/gallery/2.jpg",
    thumbnail: "img/gallery/2.jpg",
  },
  {
    original: "img/gallery/3.jpg",
    thumbnail: "img/gallery/3.jpg",
  },
  {
    original: "img/gallery/4.jpg",
    thumbnail: "img/gallery/4.jpg",
  },
  {
    original: "img/gallery/5.jpg",
    thumbnail: "img/gallery/5.jpg",
  },
  {
    original: "img/gallery/6.jpg",
    thumbnail: "img/gallery/6.jpg",
  },
  {
    original: "img/gallery/7.jpg",
    thumbnail: "img/gallery/7.jpg",
  },
  {
    original: "img/gallery/8.jpg",
    thumbnail: "img/gallery/8.jpg",
  },
  {
    original: "img/gallery/9.jpg",
    thumbnail: "img/gallery/9.jpg",
  },
  {
    original: "img/gallery/10.jpg",
    thumbnail: "img/gallery/10.jpg",
  },
  {
    original: "img/gallery/11.jpg",
    thumbnail: "img/gallery/11.jpg",
  },
  {
    original: "img/gallery/12.jpg",
    thumbnail: "img/gallery/12.jpg",
  },
  {
    original: "img/gallery/13.jpg",
    thumbnail: "img/gallery/13.jpg",
  },
  {
    original: "img/gallery/14.jpg",
    thumbnail: "img/gallery/14.jpg",
  },
  {
    original: "img/gallery/15.jpg",
    thumbnail: "img/gallery/15.jpg",
  },
  {
    original: "img/gallery/16.jpg",
    thumbnail: "img/gallery/16.jpg",
  },

  {
    original: "img/gallery/17.jpg",
    thumbnail: "img/gallery/17.jpg",
  },
];

class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <h3>This is an independent customer review of Maestro Renovation LLC (maestro-renovation.com),
           <br></br>located at 27 Chatham St, Lynn, MA 01902, United States. This website reflects my own personal 
           experience and documented interactions with the company. It is not affiliated with, endorsed by, 
           or sponsored by Maestro Renovation in any way.</h3>
        <img
  src={require('/static/img/under-construction.gif').default}
  alt="Under Construction banner"
/>
        {/* <img src={useBaseUrl('/static/img/under-construction.gif')} alt="Site Logo" width="200" /> */}
        {/* <Box sx={{ display: 'flex' }}>
          <Box m="auto">
            <Avatar
              alt="Work in Progress"
              src={useBaseUrl('/static/img/under-construction.gif')}
              sx={{ width: 150, height: 150, m: 2 }}
            />
          </Box>
        </Box> */}
        <p className="hero__subtitle">{siteConfig.tagline}</p>
              <h1 className="hero__title">Photo Gallery (In Progress)</h1>
      </div>
    </header>
  );
}



export default function Home() {
  return (
    <Layout title="Customer Review of Maestro Renovation" description="This is an independent customer review of Maestro Renovation LLC (maestro-renovation.com),
located at 27 Chatham St, Lynn, MA 01902, United States. This website reflects my own personal experience and documented interactions with the company. It is not affiliated with, endorsed by, or sponsored by Maestro Renovation in any way.
">
      <HomepageHeader />
      <MyGallery/>
    </Layout>
  );
}