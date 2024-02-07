import ClientCard from "../../components/ClientCard/ClientCard";
const Clients = () =>{
    return(
    <>
    <section className="bg-white ">
   

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
          
            <ClientCard />
            <ClientCard />
            <ClientCard />
            <ClientCard />

    </div>
</section>
    </>)
}

export default Clients;