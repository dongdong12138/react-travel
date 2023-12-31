import React from 'react';
import { Layout, Typography, Input, Menu } from 'antd';

import styles from './Header.module.css';
import logo from '../../assets/logo.svg';

const Header: React.FC = () => {
  return (
      <div className={styles['app-header']}>

        <Layout.Header className={styles['main-header']}>
          <img src={logo} alt="logo" className={styles['App-logo']} />
          <Typography.Title level={3} className={styles.title}>React 旅游网</Typography.Title>
          <Input.Search placeholder="请输入旅游目的地、主题、或关键字" className={styles['search-input']} />
        </Layout.Header>

        <Menu
            mode={'horizontal'}
            items={[
              { key: '1', label: '旅游首页' }, { key: '2', label: '周末游' }, { key: '3', label: '跟团游' }, { key: '4', label: '自由行' },
              { key: '5', label: '私家团' }, { key: '6', label: '邮轮' }, { key: '7', label: '酒店+景点' }, { key: '8', label: '当地玩乐' },
              { key: '9', label: '主题游' }, { key: '10', label: '定制游' }, { key: '11', label: '游学' }, { key: '12', label: '签证' },
              { key: '13', label: '企业游' }, { key: '14', label: '高端游' }, { key: '15', label: '爱玩户外' }, { key: '16', label: '保险' }
            ]}
            className={styles['main-menu']}
        />

      </div>
  );
};

export default Header;
