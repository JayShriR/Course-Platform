import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/FIlter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";

    const App=()=>{
        const [courses,setCourses]=useState();
        useEffect( () => {
            const fetchdata = async() => {
                try{
                    const res= await fetch(apiUrl);
                    const output= res.json;
                    console.log(output.data);
                }
                catch(error){
                    toast.error("something went wrong");
                }
            }
            fetchdata();
        },[])
    return (<div>
        <Navbar/>
        <Filter
            filterData={filterData}
        />
        <Cards/>
    </div>)
};

export default App;