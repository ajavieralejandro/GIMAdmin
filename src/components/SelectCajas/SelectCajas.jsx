import React from 'react';
import { Select } from 'antd';
const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log('search:', value);
};

// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
const SelectCajas = () => (
  <Select
    showSearch
    placeholder="Caja"
    style={{width:'50%'}}
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={filterOption}
        options={[
        {
            value: 'Caja Lomas',
            label: 'Caja Lomas',
        },
        {
            value: 'Lomas',
            label: 'Lomas',
        }
        ]}
  />
);
export default SelectCajas;