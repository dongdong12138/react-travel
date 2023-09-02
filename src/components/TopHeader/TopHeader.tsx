import React from 'react';
import styles from './TopHeader.module.css';
import { Typography, Space, Dropdown, Button } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';

const TopHeader: React.FC = () => {
  return (
      <div className={styles['top-header']}>
        <div className={styles.inner}>

          <Typography.Text>让旅游更幸福</Typography.Text>

          <Space>
            <Dropdown.Button
                menu={{ items: [{ key: '1', label: '中文' }, { key: '2', label: 'English' }] }}
                icon={<GlobalOutlined />}
                style={{ marginLeft: 15 }}
            >语言</Dropdown.Button>
          </Space>

          <Button.Group className={styles['button-group']}>
            <Button>注册</Button>
            <Button>登陆</Button>
          </Button.Group>

        </div>
      </div>
  );
};

export default TopHeader;
