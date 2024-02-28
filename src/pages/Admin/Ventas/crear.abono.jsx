import Input from "antd/es/input/Input";
import { InputNumber, Space,Select } from 'antd';
import { useState } from "react";
import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import Checkbox from "antd/es/checkbox/Checkbox";
import TextArea from "antd/es/input/TextArea";
import {Button} from "antd";
import ActividadesTabla from "../../../components/Ventas/ActividadesTable/actividades.table";
const CrearAbonoVenta = () =>{
    const [actividades,setActividades] = useState([]);
    return (
        <>
          <div
  className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
  <div
    className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50 dark:bg-blue-400">
    Datos Abono
  </div>
  <div className="p-6 text-black">
    <div className="grid grid-cols-4 gap-4">
        <Input placeholder="Nombre" />
        <div className="block">
            <h1>Precio :  <InputNumber
      defaultValue={1000}
      formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
    /> </h1>
          
        </div>
        <GenericSelect placeholder={"IVA"} />
        <Checkbox><p className="text-sm m-1">Disp. Venta</p></Checkbox>
     
    </div>
    <div className="grid grid-cols-4 gap-4 pt-4">
        <GenericSelect placeholder={"Formato"} />

        <GenericSelect placeholder={"Tipo"} />
        <Input placeholder="Duracion" />
        <GenericSelect placeholder={"DIA"} />
    </div>

    <div className="grid grid-cols-4 gap-4 pt-4">
        <Select
      mode="multiple"
      allowClear
      style={{
        width: '100%',
        height:'100%'
      }}
      placeholder="Horarios"
  
    />        <GenericSelect   style={{
        width: '100%',
        height:'100%'
      }} placeholder={"Disponibilidad"} />

    </div>


    
  </div>

  

  </div>
  <div>
  <div
  className="pt-12 pb-12 block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
  <div
    className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50 dark:bg-blue-400">
    Condiciones
  </div>
  <div className="p-2 text-black"></div> 

      <div className="grid grid-cols-4 gap-2">
      <Select
      mode="multiple"
      allowClear
      style={{
        width: '100%',
        height:'100%'
      }}
      placeholder="Sucursales comercializar"
  
    />    
     <Select
      mode="multiple"
      allowClear
      style={{
        width: '100%',
        height:'100%'
      }}
      placeholder="Sucursales ingresar"
  
    />    
     <Select
      mode="multiple"
      allowClear
      style={{
        width: '100%',
        height:'100%'
      }}
      placeholder="Condiciones"
  
    />    
    <GenericSelect placeholder={"Periodos"} />
      </div>
  
  </div>
  <div
  className="pt-12 pb-12 block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
  <div
    className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50 dark:bg-blue-400">
    Actividades
  </div>
  <div className="p-2 ">
    {actividades.length>0?<ActividadesTabla actividades={actividades} setActividades={setActividades}  />:null}
    <div className="text-right"
    >
            <Button onClick={()=>setActividades([...actividades,{}])}>Agregar Actividad</Button>

    </div>

    </div> 
  </div>
  </div>
        </>
    )
}

export default CrearAbonoVenta;