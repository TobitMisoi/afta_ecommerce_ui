import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} AFTA`}
      // links={[
      //   {
      //     key: 'AFTA',
      //     title: 'AFTA',
      //     href: 'https://AFTA.com',
      //     blankTarget: true,
      //   },
      // ]}
    />
  );
};

export default Footer;
