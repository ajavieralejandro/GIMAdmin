import Input from "antd/es/input/Input";
const AbonoCobroDialogTable = ({abonos}) =>{
    return(
        <div>
        <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table
          className="min-w-full text-left text-sm font-light text-surface dark:text-white">
          <thead
            className="border-b border-neutral-200 bg-white font-medium dark:border-white/10 dark:bg-body-dark">
            <tr>
              <th scope="col" className="px-6 py-4">#</th>
              <th scope="col" className="px-6 py-4">Nombre</th>
              <th scope="col" className="px-6 py-4">Precio</th>
              <th scope="col" className="px-6 py-4">Cantidad</th>
            </tr>
          </thead>
          <tbody>
          {abonos.length>0? abonos.map((element,index)=>{ return( 
            <tr
            className="border-b border-neutral-200 bg-black/[0.02] dark:border-white/10">
            <td className="whitespace-nowrap px-6 py-4 font-medium">{index+1}</td>
            <td className="whitespace-nowrap px-6 py-4">{element.name}</td>
            <td className="whitespace-nowrap px-6 py-4">${element.price}</td>
            <td className="whitespace-nowrap px-6 py-4"><Input /></td>
          </tr>
            )}
          ):null}
          <tr
          className="border-b border-neutral-200 bg-black/[0.02] dark:border-white/10">
          <td className="whitespace-nowrap px-6 py-4 font-medium"></td>
          <td className="whitespace-nowrap px-6 py-4">total</td>
          <td className="whitespace-nowrap px-6 py-4"></td>
          <td className="whitespace-nowrap px-6 py-4">$0</td>
        </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default AbonoCobroDialogTable;