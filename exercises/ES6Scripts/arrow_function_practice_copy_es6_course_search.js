"use strict"

let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
   ];
   // When does the PROG200 course start?
   // What is the title of the PROJ500 course?
   // What are the titles of the courses that cost $50 or less?
   // What classes meet in "Classroom 1"?

   //create a function that takes a single object as a parameter and returns true or false
//    function isProg200(course) { //course becomes the condition as it is a parameter
//    }
// let course = courses.find(isProg200);
// console.log(course.StartDate); //{1}
// console.log(`The PROG200 course starts on .` + (course.StartDate));//{2}

   // When does the PROG200 course start?^^  {1} outputs to "11/22/22" {2} outputs to "The PROG200 course starts on 11/22/22"

   isProg200(courses) => 
      let PROG200Course = courses

   // What is the title of the PROJ500 course?

//What is the title of the PROJ500 course? // I wrote out the function the first time I didn't need to change the function or the params.  I needed forif! not ifreturn
let course2 = courses.find(course => {
   return course.CourseId === "PROJ500"
})

   // What is the title of the PROJ500 course?^^^^ outputs to

   // What are the titles of the courses that cost $50 or less? // I believe this is a filter
   for (const title of titles) {
      if (fee > 50.00) {
         
      } else {
         
      }
      
   }
   
                              // What are the titles of the courses that cost $50 or less?