import React from "react";
import Card from "./Card";
const Cards=( {courses} )=>{
    const getCourses = () => {
        let allCourses=[];
         Object.values.array.forEach( (courseCategory) => {
            courseCategory.forEach((course)=>{
                allCourses.push(course);
            })
         })
         return allCourses;
    }
    return (
        <div>
            {getCourses().map((course) => (
        <Card
          
        />
      ))}
        </div>
    )
}
export default Cards;