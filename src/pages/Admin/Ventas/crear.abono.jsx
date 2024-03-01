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
    const sucursales = [{key:1,value:'Lomas'},{key:2,value:"Palermo"}];
    const condiciones = [{key:1,value:'Venta Restringida'},{key:2,value:'Matricula'},{key:3,value:"Mantener Precio Original"}
                            , {key:4,value:"renovación automática"},{key:5,value:"Seleccionar Periodos"}
]
    const iva_option = [
        {
            key:1,
            value  : "21%"
        },
        {
            key:2,
            value  : "10%"
        },
        {
            key:2,
            value  : "0%"
        }
    ];

    const formato_option = [
        {
            key:1,
            value  : "Presencial"
        },
        {
            key:2,
            value  : "Online"
        },
        {
            key:3,
            value  : "Todos"
        }
    ];

    const tipo_options = [
        {
            key:1,
            value :"Abono"
        },
        {
            key:2,
            value:"Adicional"
        }
    ]

    const duracion_options = [
        {key : 1,
        value  : "Día"
        
        
    },
        {key : 2, value :"Mes"},{key:3,value:"Año"}
    ]

    const disponibilidad_options = [{key:1,value:"Libre"},{key:2,value:"Por Mes"}]

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
        <GenericSelect options={iva_option}  placeholder={"IVA"} />
        <Checkbox><p className="text-sm m-1">Disp. Venta</p></Checkbox>
     
    </div>
    <div className="grid grid-cols-4 gap-4 pt-4">
        <GenericSelect options={formato_option} placeholder={"Formato"} />

        <GenericSelect options={tipo_options} placeholder={"Tipo"} />
        <Input placeholder="Duracion" />
        <GenericSelect options={duracion_options} placeholder={"DIA"} />
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
      }}
        options={disponibilidad_options}
       placeholder={"Disponibilidad"} />

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
      options={sucursales}
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
      options={sucursales}
  
    />    
     <Select
      mode="multiple"
      allowClear
      style={{
        width: '100%',
        height:'100%'
      }}
      placeholder="Condiciones"
      options={condiciones}
  
    />    
    <Input placeholder={"Periodos"} />
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
  <div
  className="pt-12 pb-12 block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
  <div
    className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50 dark:bg-blue-400">
    Opciones
  </div>
      <div className="p-2">
        <div className="grid grid-cols-3 gap-2">
            <Input placeholder="Puntos Referido"></Input>
            <Input placeholder="Puntos Referido"></Input>
            <Checkbox><p className="m-1">Disp. Venta Online</p></Checkbox>

        </div>

      </div>
  </div>
  <div
  className="pt-12 pb-12 block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
  <div
    className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50 dark:bg-blue-400">
    Comentarios
  </div>
  <div className="pt-6">
  <TextArea placeholder="comentarios" />

  </div>
  </div>
        </>
    )
}

export default CrearAbonoVenta;