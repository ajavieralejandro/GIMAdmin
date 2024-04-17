import GenericTable from '../GenericTable/GenericTable';
import Input from 'antd/es/input/Input';
import { Space } from 'antd';
import { useState } from 'react';
const ProductosTable = ({productos}) =>{
    const [total,setTotal] = useState(0);
    const handleChange = (e,key)=>{
      if(!isNaN(e.target.value)){ 
        let cantidad = parseInt(e.target.value);
        key.cantidad = cantidad;
      }
      if(isNaN(e.target.value) || e.target.value=='')
      {
       key.cantidad = 0;
      }
      let aux =0;
      productos.map(producto=>{
          if(producto.cantidad && !isNaN(producto.cantidad))
            aux += producto.price * producto.cantidad;
      });
      setTotal(aux);
   
    
    }
    console.log("Productos es :",productos)
    const columns = [{
        title: 'Nombre',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: 'Precio',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: 'Cantidad',
        render: (key) => (
        <Space size="middle">
        <Input onChange={(e)=>handleChange(e,key)} placeholder='Cantidad' />
        </Space>
      )}
    ];
    return(
        <div className='pt-4'>
            <GenericTable columns={columns} data={productos} />
            <h1 className='text-xl text-left'>Total : ${total}</h1>
        </div>
    )
}

export default ProductosTable;