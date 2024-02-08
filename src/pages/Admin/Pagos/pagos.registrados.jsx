import Date from "../../../components/Date/Date";
import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import SearchButton from '../../../components/SearchButton/SearchButton';
import { DatePicker } from "antd";
const PagosRegistrados = () =>{
    return (
        <div className="h-screen w-full">
        <div className="grid grid grid-cols-1 md:grid-cols-5 gap-2"
        >
            <div>
            <DatePicker  style={{width:'100%'}} placeholder="Desde" />
    
            </div>
            <div>
            <div>
            <DatePicker style={{width:'100%'}} placeholder="Hasta" />
    
            </div>
            </div>
            <div>
            <GenericSelect
        placeholder={"Pago Completo"}
             options={[
               {
                value:'True',
                label:'Si'
               },
               {
                value:'False',
                label:'No'
               },
               {
                value:'Null',
                label:'Indistinto'
               }
              ]}
        />
            </div>
            <div> 
           <GenericSelect
        placeholder={"Con errores"}
             options={[
               {
                value:'True',
                label:'Si'
               },
               {
                value:'False',
                label:'No'
               },
               {
                value:'Null',
                label:'Indistinto'
               }
              ]}
        /></div>
        <div>
        <SearchButton />

        </div>
        </div>
    

        </div>
    )
}

export default PagosRegistrados;