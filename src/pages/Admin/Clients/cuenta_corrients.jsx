import Input from "antd/es/input/Input";
import Date from '../../../components/Date/Date';
import GenericSelect from '../../../components/GenericSelect/GenericSelect';
import GenericSelectSearch from "../../../components/GenericSelectSearch/GenericSelectSearch";
import GenericTable from "../../../components/GenericTable/GenericTable";
import { useState,useEffect } from "react";
import { Button,Space,Modal } from "antd";
import ItemsCobros from "../../../components/ItemsCobros/items.cobros";
import DeudasModal from "../../../components/DeudasModal/deudas.modal";
import CobrosModal from "../../../components/CobrosModal/cobros.modal";
import ProductsCobros from "../../../components/ProductsCobro/products.cobro";
const CuentaCorriente = ({clientKey}) =>{
  const [items,setItems] = useState([<ItemsCobros />]);
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

  const handleClose = (index) =>{
      console.log("hola");
      setItems(items.filter((element,position)=>position!=0));}

  const handleClick = () =>{
      setItems([...items,<ItemsCobros />]);
      console.log(items);

  }
  const [modal,setModal] = useState(false);

 
 

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
    <div class="w-full bg-slate-100 border-2 border-slate-300">
          <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3  gap-2">
                <GenericSelect options={[]} placeholder={"Cliente"} />
                  <GenericSelect options={[
                      {
                          label : 'Monica',
                          value:1
                      },
                      {
                          label : 'Josefina',
                          value:2
                      }

                  ]} placeholder={"Vendedor"} />
                  <GenericSelect options={[
                      { value:'mp',
                          label:'mercado Pago'
                      }
                  ]} placeholder={"Medio de Pago"} />

              </div>
              <div className="pt-2">
              {items.length>0?items.map((element,index)=><ProductsCobros index={index} handleClose={handleClose} />):null}

              </div>
              <div className="text-right pt-8">
                  <Button type="text"   onClick={handleClick} className="text-rigth" >Agregar Item</Button>
                  <Button type="text" onClick={()=>setModal(true)}    className="text-rigth" >Deudas</Button>


              </div>
          </div>
          <Modal title="Deudas" open={modal} onCancel={()=>setModal(false)}>
              <DeudasModal />
    </Modal>
          
          </div>
          


        
          <div className="text-right pt-12">
              <CobrosModal />
          </div>  
      </>
  )
}

export default CuentaCorriente;