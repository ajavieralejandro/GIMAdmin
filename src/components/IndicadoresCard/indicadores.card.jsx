import { Button } from "antd";
const IndicadoresCard = ({text,number}) =>{
    return(
        <>
            <div className="bg-slate-200 h-full w-full">
                <div className="text-right">
                    <button className="m-2 p-1">    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg>
</button>
            
                </div>
                <div className="text-center text-xl">
                <h1 className="m-1 ">{number}</h1>
                    <h1 className="m-2 uppercase">{text}</h1>
                </div>
            </div>
        </>
    )
}

export default IndicadoresCard;