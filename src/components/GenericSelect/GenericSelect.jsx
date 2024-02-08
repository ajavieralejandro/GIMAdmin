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
const GenericSelect = ({options,placeholder}) => (
  
  <Select
    
    placeholder={placeholder}
    style={{width:'100%'}}
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={filterOption}
    options={options}
  />
);
export default GenericSelect;