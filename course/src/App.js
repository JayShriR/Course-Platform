import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";

const App = () => {
    const [courses, setCourses] = useState([]); // Initialize courses state with an empty array

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(apiUrl);
                if (!res.ok) {
                    throw new Error("Failed to fetch");
                }
                const output = await res.json();
                console.log(output.data);

                // Update the 'courses' state with fetched data
                setCourses(output.data);
            } catch (error) {
                toast.error("Something went wrong");
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <Navbar />
            <Filter filterData={filterData} />
            <Cards courses={courses} />
        </div>
    );
};

export default App;