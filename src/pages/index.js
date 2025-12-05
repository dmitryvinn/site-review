import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';


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
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title="Home" description="Customer">
      <HomepageHeader />
     
    </Layout>
  );
}