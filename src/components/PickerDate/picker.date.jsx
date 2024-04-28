import React from 'react';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
const PickerDate = ({setDates}) => {
  
  return(
  <Space direction="vertical" size={12}>
  

    <RangePicker
      picker="year"
      id={{
        start: 'startInput',
        end: 'endInput',
      }}
      onChange={e=>setDates(e[0].$d,e[1].$d)}
      onFocus={(_, info) => {
        console.log('Focus:', info.start);
      }}
      onBlur={(_, info) => {
        console.log('Blur:', info.end);
      }}
    />
  </Space>
);

}
export default PickerDate;