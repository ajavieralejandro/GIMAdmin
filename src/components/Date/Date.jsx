import React from 'react';
import { DatePicker, Space } from 'antd';
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const Date = () => (
  <Space direction="horizontal" size={12}>
    <DatePicker placeholder='Desde' onChange={onChange} />
    <DatePicker placeholder='hasta' onChange={onChange}    />
  </Space>
);
export default Date;