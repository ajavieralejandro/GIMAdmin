import { Input,Select } from "antd";
import { useEffect,useState } from "react";
const AbonoCondiciones = ({sucursales,condiciones}) =>{
    return(
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
          <Input placeholder={"Puntos Referido"} />

            </div>
        
        </div>
        </div>
    )
}

export default AbonoCondiciones;