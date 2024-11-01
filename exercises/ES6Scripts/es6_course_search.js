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
   
//The function is spitting out the course IDWe have to catch the 
//courses represents {line 3} an array of objects. You would name the let () course because it its singular and courses will be used for loops and arrays
// when finding you would do the singular = the multiple that the singular orinates from === the multiple will have the command which is find in this case let course = courses.find (function) 


                   // When does the PROG200 course start? We want to use find as we're looking for a specfic and singular value with the information given

   function isProg200(course) { //course becomes the condition as it is a parameter
    if (course.CourseId == "PROG200") { // condition. specifies the condition to solve the function REVIEW ME FOR PROPER LEXICON 10.28.24
        return true; //LEXICON REVIEW EXPLAIN HERE:       
    }
   }
let course = courses.find(isProg200);
console.log(course.StartDate); //{1}
console.log(`The PROG200 course starts on .` + (course.StartDate));//{2}

                     // When does the PROG200 course start?^^  {1} outputs to "11/22/22" {2} outputs to "The PROG200 course starts on 11/22/22"

                     // What is the title of the PROJ500 course?

// function isProg500(title) { //here we are laying the foundation of defining this function. this function= isProg500. Our param is Title
//    if (title.TitleId == "Introduction to Angular") { //relaying that title our parameter soon to be converted as a condition IS representing "Introduction to Angular"
//       return true; //declaring this is the law of the land
//    }
// }
// let title = titles.filter(isProg500)
// console.log(title);
// console.log("The title of the PROG500 course is" + (course.Title));
//wrong^^

                     //What is the title of the PROJ500 course? // I wrote out the function the first time I didn't need to change the function or the params.  I needed forif! not ifreturn
for (const course of courses) {
  if (course.CourseId === "PROJ500") {
    console.log(`The title of the PROJ500 course is ${course.Title}.`);
  }
}
                        // What is the title of the PROJ500 course?^^^^ outputs to

   // What are the titles of the courses that cost $50 or less? // I believe this is a filter
   for (const course of courses) { // don't need to put title after const. course of courses still works here.
      if (Number(course.Fee) <= 50.00) { // my answer: if (fee > 50.00) { << this is close, but we need to specify the data type, and then the name.property ***The title is already defined as a property in the course section all the way above. Hence why we don't need to write title until we specify what we want method we want with console.log.= object.method. Hence heres the object, log/utilize the method it out
         console.log(`Inexpensive course: ${course.Title}`);
      }
   }
   //outputs to:Inexpensive course: Introduction to Java, Inexpensive course: Introduction to SQL and Databases, Inexpensive course: Introduction to Angular
   let InexpensiveCourseTitles = [];

   for (const course of courses) {
   if (Number (course.Fee) <= 50) {
      InexpensiveCourseTitles.push(course);// push is being used herre to return the array at itr new length. let to the last {} are needed to re-enforce the code above.
   }
}
                  // What are the titles of the courses that cost $50 or less?^^^^^^^^^^^^^^

   // What classes meet in "Classroom 1"?
//not in gitub but we can try on our own 10/29

   