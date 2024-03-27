import SearchInput from "../../../components/SearchInput/search.input";
import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import Date from "../../../components/Date/Date";
import Checkbox from "antd/es/checkbox/Checkbox";
import { Button } from "antd";
import GenericTable from "../../../components/GenericTable/GenericTable";
import { Space } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setMovimientoInterno } from "../../../store/caja/caja.actions";
const columns =[
    {
        title: 'Fecha',
        dataIndex: 'fecha',
        key: 'fecha',
      },
      {
        title: 'Registrado',
        dataIndex: 'caja',
        key: 'caja',
      },
      {
        title: 'NRO',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Estado',
        dataIndex: 'estado',
        key: 'estado',
      },
      {
        title: 'Nombre',
        dataIndex: 'nombre',
        key: 'nombre',
      },
      {
        title: 'Medio de Pago',
        dataIndex: 'medio_pago',
        key: 'medio_pago',
      },
      {
        title: 'Monto',
        dataIndex: 'monto',
        key: 'monto',
      },
    
      {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            <a>anular</a>
            
          </Space>
        ),
      },
];
const data = [
    {
        fecha : '13/02/2024',
        registrado : 'Ariana',
        numero : '1100',
        concepto : 'Apertura Caja',
        estado : 'Registrado',
        descripcion : '',
        medio_pago : 'PESOS EFECTIVO',
        monto : '5000'

    }
];
const MovimientosInternosCuentas = () =>{
  const [movimientos,setMovimientos] = useState([]);
  useState(()=>{
    fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/movimientos')
    .then(res=>res.json())
    .then(data=>setMovimientos(data))
  },[]);
  let navigate = useNavigate(); 
  let selector = useSelector(state=>state.caja.movimientos);
  const handleClick = () =>{
    navigate('/cuentas/registrar_movimiento');

  }
    return(
        <>
           <div className="text-right">
                    <Button onClick={()=>handleClick()}>Crear</Button>
            </div>
            <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-2">
                <SearchInput />
                <GenericSelect placeholder={"Concepto"} />
                <GenericSelect placeholder={"Categoria"} />


            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-8">
                <Date />
                <GenericSelect placeholder={"Caja"} />
                <Checkbox className="ml-5"><p className="text-md m-1">Solo Reales</p></Checkbox>
            </div>
         
            <div className="pt-8">
                <GenericTable data={movimientos} columns={columns} />
            </div>
        </>
    )
}

export default MovimientosInternosCuentas;