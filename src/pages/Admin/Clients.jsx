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
            console.log(data.data);
            setClients(data.data);
            setData(data.data);
         })
           

      }, []);
    return(
        
    <>
    <section className="bg-white ">
        <div className="text-left"
        >
                  <SearchInput onChange={handleSearch} />

        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
          {loading?null:
            data.map(client => <ClientCard key={client.dni} client={client} 
            />)
          }
           

    </div>
</section>
    </>)
}

export default Clients;