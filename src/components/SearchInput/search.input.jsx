import Search from "antd/es/input/Search";
const SearchInput = ({onSearch,placeholder})=>{
  
    return(
        <>
           <Search
      placeholder={placeholder}
      allowClear
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />
        </>
    )
}

export default SearchInput;