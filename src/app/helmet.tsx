import React from 'react';
import { Helmet } from 'react-helmet';

interface ComponentProps {
  title:string;
}

const HelmetComponent: React.FC<ComponentProps> = ({ title }) => {

  return (
    <>
    {/* using hardcoded value in some tags for now */}
      <Helmet>
        {/* Title */}
        <title>{title}</title>

        {/* website icon */}
        <link rel="icon" href="./logoIcon.svg" />

        {/* Meta Tags */}
        <meta name="description" content="Stack, a react application that interacts with API." />
        <meta name="keywords" content="stack, api, react application" />

        {/* OpenGraph Tags */}
        <meta property="og:title" content={title}/>
        <meta property="og:description" content="Stack, a react application that interacts with API." />
        <meta property="og:image" content="https://www.stack.com/image.jpg" />
        <meta property="og:url" content="https://www.stack.com" />

        {/* Twitter Tags */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content="Stack, a react application that interacts with API." />
        <meta name="twitter:image" content="https://www.example.com/image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
    </>
  )
}

export default HelmetComponent;