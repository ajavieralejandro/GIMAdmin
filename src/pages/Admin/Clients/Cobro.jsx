  import Input from "antd/es/input/Input";
  import Date from '../../../components/Date/Date';
  import GenericSelect from '../../../components/GenericSelect/GenericSelect';
  import GenericSelectSearch from "../../../components/GenericSelectSearch/GenericSelectSearch";
  import GenericTable from "../../../components/GenericTable/GenericTable";
  import { useState,useEffect } from "react";
  import { Button,Space,Modal } from "antd";
  import CobrosList from "../../../components/CobrosList/cobros.list";
  import ItemsCobros from "../../../components/ItemsCobros/items.cobros";
  import DeudasModal from "../../../components/DeudasModal/deudas.modal";
  import CobrosModal from "../../../components/CobrosModal/cobros.modal";
  import { useDispatch } from "react-redux";
import { cancelClientCobro } from "../../../store/client/client.actions";
import { setCobroCaja } from "../../../store/caja/caja.actions";
import { useSelector } from "react-redux";
import ProductsCobros from "../../../components/ProductsCobro/products.cobro";


  const CobroCliente = ({clientKey}) =>{ 
    let dispatch = useDispatch();
    const [items,setItems] = useState([<ItemsCobros />]);
    const [loading,setLoading] = useState(true);
    const [page,setPage] = useState(0);
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
        setItems([<ItemsCobros />]);
  
    }

    const handleCancel = () =>{
        setItems([]);
        dispatch(cancelClientCobro());

    }
    const [modal,setModal] = useState(false);
    const [debts,setDebts] = useState([]);
    const [isMixto,setIsMixto] = useState(false);
   
   

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
        <div className="w-full bg-slate-100 border-2 border-slate-300">
            <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <Date />
                    <GenericSelect options={[
                        {
                            label : 'Monica',
                            value:1
                        },
                        {
                            label : 'Josefina',
                            value:2
                        }

                    ]} placeholder={"Referido"} />
                    <GenericSelect
                    onChange={e=>{
                        
                        setIsMixto (e=='Mixto');
                        console.log("Selecciono mixto");
                        console.log(isMixto);
                

                    }}                     
                    options={[
                        { value:'mp',
                            label:'mercado Pago'
                        },
                        { value:'Debito',
                        label:'Debito'
                    },
                    { value:'Efectivo',
                    label:'efectivo'
                },{
                    value:'Credito',
                    label : 'Credito'
                }, {
                    value:'Mixto',
                    label : 'Mixto'
                }
                

                    ]} placeholder={"Medio de Pago"} />

                </div>
                <div className="pt-2">
                {page == 1 ? <ProductsCobros onExit={()=>setPage(1)} /> : null }
                {page == 2   ? <ItemsCobros handleClose={()=>setPage(0)}/> : null }

                

                </div>
                <div className="text-right pt-8">
                    <Button  type="text"   onClick={()=>setPage(1)} className="text-rigth" >Agregar Producto</Button>
                    <Button type="text"   onClick={()=>setPage(2)} className="text-rigth" >Agregar Abono</Button>
                    <Button type="text" onClick={()=>setModal(true)}    className="text-rigth" >Deudas</Button>


                </div>
            </div>
            <Modal  okButtonProps={{
        type:"text"
      }} title="Deudas" open={modal} onCancel={()=>setModal(false)}
                    onOk={()=>{
                        setModal(false);                 
                        
                    }}

      >
                <DeudasModal cargarDeudas={setDebts}  />
      </Modal>
            
            </div>
            <div className="pt-12">
            <CobrosList  />

            </div>

          
            <div className="text-right pt-12">
                <CobrosModal isMixto={isMixto} />
                <Button onClick={()=>handleCancel()} type="text">Cancelar</Button>
            </div>
        </>
    )
  }

  export default CobroCliente;