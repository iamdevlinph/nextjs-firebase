import React from 'react';
import Head from 'next/head';
import Topbar from '../Topbar/Topbar';

const HeadComponent = () => {
  return (
    <>
      <Head>
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        {/* <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-xxxxxxxxx-x"
      /> */}
        {/* eslint-disable react/no-danger */}
        {/* <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments)
          }
          gtag('js', new Date());
          gtag('config', 'UA-xxxxxxxxx-x');`,
        }}
      /> */}
        {/* eslint-enable react/no-danger */}
        <title>NextJS + Firebase</title>

        {/* <!-- META --> */}
        <meta charSet="utf-8" />
        <meta name="description" content="Website description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="NextJS + Firebase" />
        <meta
          property="og:description"
          content="Website description for Twitter"
        />
        <meta property="og:image" content="/static/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/static/logo.png" />

        {/* <!-- Resources --> */}
        <link rel="shortcut icon" href="/static/logo.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans|Raleway|Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Topbar />
    </>
  );
};

export default HeadComponent;
