import React from 'react';
import { Menu } from 'antd';
import { GifOutlined } from '@ant-design/icons';

import styles from './SideMenu.module.css';
import { sideMenuList } from './mockup';

const SideMenu: React.FC = () => {
  return (
      <Menu
          items={sideMenuList.map(item => ({
            label: item.title,
            key: item.title,
            icon: <GifOutlined />,
            children: item.subMenu.map(sm => ({
              label: sm.title,
              key: sm.title,
              icon: <GifOutlined />,
              children: sm.subMenu.map(sms => ({
                label: sms,
                key: sms,
                icon: <GifOutlined />,
              })),
            })),
          }))}
          mode="vertical"
          className={styles['side-menu']}
      />
  );
};

export default SideMenu;
