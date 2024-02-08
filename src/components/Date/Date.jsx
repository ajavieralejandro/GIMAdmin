import React from 'react';
import { DatePicker, Space } from 'antd';
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const Date = () => (
  <Space direction="horizontal" size={12}>
    <h1>Desde : </h1><DatePicker onChange={onChange} />
    <h1>Hasta : </h1><DatePicker onChange={onChange}    />
  </Space>
);
export default Date;