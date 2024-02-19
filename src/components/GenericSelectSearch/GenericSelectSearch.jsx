import React from 'react';
import { Select } from 'antd';

const onSearch = (value) => {
  console.log('search:', value);
};

// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
const GenericSelectSearch = ({options,placeholder,onChange}) => (
  
  <Select
    showSearch
    placeholder={placeholder}
    style={{width:'100%'}}
    optionFilterProp="children"
    onChange={(value,key)=>onChange(value,key)}
    onSearch={onSearch}
    filterOption={filterOption}
    options={options}
  />
);
export default GenericSelectSearch;