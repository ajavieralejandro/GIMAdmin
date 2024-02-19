import Search from "antd/es/input/Search";
const SearchInput = ({onChange,placeholder})=>{
  
    return(
        <>
           <Search
      placeholder={placeholder}
      allowClear
      onChange={onChange}
      style={{
        width: 200,
      }}
    />
        </>
    )
}

export default SearchInput;