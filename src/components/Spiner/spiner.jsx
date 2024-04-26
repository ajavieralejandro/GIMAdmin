import React from 'react';
import { Flex, Spin } from 'antd';
const Spiner = () => (
    <div className="h-screen flex items-center justify-center">
        <Flex align="center" gap="middle">
            <Spin size="large" />
        </Flex>
  </div>
);
export default Spiner;