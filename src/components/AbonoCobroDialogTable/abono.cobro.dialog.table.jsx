const AbonoCobroDialogTable = ({abonos}) =>{
    console.log("El array es :",abonos);
    return(
        <div className="h-full w-full overflow-y-scroll">
        <div className="flex flex-col">
        <div className="overflow-x-hidden sm:-mx-6 lg:-mx-8">
          <div className="inline-block w-full py-2 sm:px-6 lg:px-8">
            <div className="">
              <table
                className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                <thead
                  className="border-b border-neutral-200 font-medium dark:border-white/10">
                  <tr>
                    <th scope="col" className="px-6 py-4"></th>
                    <th scope="col" className="px-6 py-4">Nombre</th>
                    <th scope="col" className="px-6 py-4"></th>
                    <th scope="col" className="px-6 py-4">Precio</th>
                  </tr>
                </thead>
                <tbody>
                {abonos.map((element,index)=>{
                    
                    return(  <tr className="border-b border-neutral-200 dark:border-white/10">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{index}</td>
                    <td className="whitespace-nowrap px-6 py-4">{element.name}</td>
                    <td></td>
                    <td className="whitespace-nowrap px-6 py-4">{element.price}</td>
                  </tr>)
                })}
               
                 
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