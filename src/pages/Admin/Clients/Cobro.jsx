  import Input from "antd/es/input/Input";
  import Date from '../../../components/Date/Date';
  import GenericSelect from '../../../components/GenericSelect/GenericSelect';
  import GenericTable from "../../../components/GenericTable/GenericTable";
  import { Button } from "antd";
  const CobroCliente = ({clientKey}) =>{
    console.log(clientKey);
    return(
        <>
            <div className="p-8">
                <div className="grid grid-cols-3 gap-2">
                    <Input placeholder="Comprobante" />
                    <Date />
                    <GenericSelect placeholder={"Vendedor"} />
                </div>
            </div>
        </>
    )
  }

  export default CobroCliente;