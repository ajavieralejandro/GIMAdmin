import ClientCard from "../../components/ClientCard/ClientCard";
import { useEffect, useState } from "react";
import { fetchClients } from "../../utils/fetchs";
import SearchInput from '../../components/SearchInput/search.input';
import { Pagination } from 'antd';
const Clients = () =>{
    const handleSearch = (text)=>{
      console.log(clientes);
      setData(clientes.filter(client => client.name.toLowerCase().includes(text.target.value.toLowerCase()) || client.last_name.toLowerCase().includes(text.target.value.toLowerCase() 
              )
      ));
      if(text.target.value==='') setData(clientes);
    }
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [index,setIndex] = useState(5);
    const[ clientes,setClients] = useState([]);
    const onChange = (page) =>{
      setClients(data.slice())
    }


    useEffect(() => {
         fetch("http://127.0.0.1:8000/api/v1/clients")
        .then((response) => response.json())
        .then((data) => { 
          console.log("hola");
            setLoading(false)
            setData(data.data);
            setClients(data.data);
         })
           

      }, []);
    return(
        
    <>
    <section className="bg-white ">
   
        <SearchInput onChange={handleSearch} />
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
          {loading?null:
            data.map(element => <ClientCard key={element.dni} name={element.name} last_name={element.last_name} 
                                phone={element.phone_number} email={element.email} dni={element.dni}
            />)
          }
           

    </div>
</section>
    </>)
}

export default Clients;