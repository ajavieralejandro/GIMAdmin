  import Input from "antd/es/input/Input";
  import Date from '../../../components/Date/Date';
  import GenericSelect from '../../../components/GenericSelect/GenericSelect';
  import GenericSelectSearch from "../../../components/GenericSelectSearch/GenericSelectSearch";
  import GenericTable from "../../../components/GenericTable/GenericTable";
  import { useState,useEffect } from "react";
  import { Button,Space } from "antd";
  
  const CobroCliente = ({clientKey}) =>{
    const [items,setItems] = useState([]);
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState([ {  
        id : '1',
        price : '0'

    

    }]);

    const handleItemChange = (value,key) =>{
        console.log("Hola me estan seleccionando");
        console.log(value);
        console.log(key);
        

    }

    const handleClick = () =>{
        let array = data.concat();

        array.push(
            {  
                id : '2',
                price : '0'
        
            
        
            }
        )
        setData(array);
        console.log(data);
    }

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/v1/items")
        .then((response) => response.json())
        .then((data) => { 
            setLoading(false);
             const options = data.map(item=>{return {
                'value' : item.id,
                'label' : item.name
            }});
            setItems(options);

         })

     }, []);

     useEffect(()=>{

     },[data])

     const columns = [
        {
            title: 'Item',
            key: 'item',
            render: (_, record) => (
              <Space size="middle">
                <GenericSelectSearch onChange={handleItemChange} options={items} placeholder={"Items"} />
              </Space>
            ),
          },
          {
            title: 'Precio',
            dataIndex: 'price',
            key: 'price',
          },
      ];
     
      
    return(
        <>
            <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <Input placeholder="Comprobante" />
                    <Date />
                    <GenericSelect options={[]} placeholder={"Vendedor"} />
                </div>
                <div className="text-right pt-2">
                    <Button onClick={handleClick} className="text-rigth" >Agregar Item</Button>
                    <GenericTable columns={columns} data={data} />

                </div>
            </div>
        </>
    )
  }

  export default CobroCliente;