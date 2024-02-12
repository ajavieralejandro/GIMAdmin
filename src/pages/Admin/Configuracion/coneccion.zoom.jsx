import { Button } from "antd";
import {Checkbox} from "antd";
const ConeccionZoomConf = () =>{
    return(
        <>
        
<div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
  <div className="container max-w-screen-lg mx-auto">
    <div>
    

      <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div className="text-gray-600">
            <p className="font-medium text-lg">Datos para conexion</p>
         
            </div>
          

          <div className="lg:col-span-2">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-5 text-left">
              <input type="text" placeholder='Public Key' name="public_key" id="public_key" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" />

                <label for="public_ket">Complete solamente cuando desea cambiar el valor. Valor actual: SIN CONFIGURAR</label>
              </div>

              <div className="md:col-span-5 text-left">
              <input type="text" placeholder='Access Token' name="access_token" id="access_token" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" />

              <label for="access_token">Complete solamente cuando desea cambiar el valor. Valor actual: SIN CONFIGURAR</label>
              </div>

           
          
             
              <div className="md:col-span-5 text-left"
              >
                   <div className="">
                  <Checkbox>Borrar configuracion</Checkbox>
                </div>

                <div className="md:col-span-5 text-left"
              >
                   <div className="">
                  <Checkbox>Borrar Configuracion</Checkbox>
                </div>
                
                </div>
                
              </div>
           
              <div className="md:col-span-5 text-right">
                <div className="inline-flex items-end">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Guardar</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

 
  </div>
</div>

        </>
    )
}

export default ConeccionZoomConf;