// Student Info Component
// You will create three functions that will help you build your very first component, which will be composed of three separate HTML elements.

// Title Element Function
// Consider you have the following HTML code.

{/* <article id="container"></article>
By adding this tiny function to your JavaScript, you can create <h1> elements, with a given CSS class. */}

// const h1 = (title, style) => {
//     return `<h1 class="${style}">${title}</h1>`
// }

// Now you can add an h1 inside the container article that already exists using the innerHTML property.

// document.querySelector("#container").innerHTML = `
//     ${h1("Marcus Fulbright", "xx-large")}
// `
// Once that code runs, you will have the following DOM.

{/* <article id="container">
    <h1 class="xx-large">Marcus Fulbright</h1>
</article> */}
// Component Structure
// This may seem overly complicated when all you need to do is write the h1 element where needed. Why create a function to do it for you? Consider the case where you need to display the information for 12 students in the DOM. Each student will be represented in HTML with the following structure.

{/* <div class="student">
    <h1>Student Name</h1>
    <section>Student class</section>
    <aside>Additional information</aside>
</div> */}

// You've already created a function for the h1, so you create two more functions for the section and the aside. However, you want to ensure that all section elements are bordered with a dashed line.

// const section = (title, style) => {
//     return `<section class="bordered dashed ${style}">${title}</section>`
// }

// const aside = (title, style) => {
//     return `<aside class="${style}">${title}</aside>`
// }

// Component Function
// You can then use these functions to create a student component function.

// const student = (name, clazz, info) => `
//     <div id="student">
//         ${h1(name, "xx-large")}
//         ${section(clazz, "section--padded")}
//         ${aside(info, "pushRight")}
//     </div>
// `

// const container = document.querySelector("#container")
// container.innerHTML = student("Marcus Fulbright", "Algebra", "Not a bright student")



// 10 of the students are currently passing the course, and 2 students are not. You want passing, and non-passing, student information to be styled differently. You want passing students' names to be green, and non-passing students to be orange.




//build h1 element:
// const h1 = (title, style) => {
//     return `<h1 class="${style}">${title}</h1>`
// }

// //build section element:
// const section = (title, style) => {
//     return `<section class="bordered dashed ${style}">${title}</section>`
// }

// //build aside element:
// const aside = (title, style) => {
//     return `<aside class="${style}">${title}</aside>`
// }


// construct each student using the above element-building functions:
// const student = (name, clazz, info) => `
//     <div id="student">
//         ${h1(name, "xx-large")}
//         ${section(clazz, "section--padded")}
//         ${aside(info, "pushRight")}
//     </div>
// `


// //rewrite functions with REST OPERATOR:

// const h1 = (...props) => {
//     return `<h1 class="${props[1]}">${props[0]}</h1>`
// }

// const section = (...props) => {
//     return `<section class="bordered dashed ${props[1]}">${props[0]}</section>`
// }

// const aside = (...props) => {
//     return `<aside class="${props[1]}">${props[0]}</aside>`
// }

// const student = (...props) => `
//     <div id="student">
//         ${h1(props[0], "xx-large")}
//         ${section(props[1], "section--padded")}
//         ${aside(props[2], "pushRight")}
//     </div>
// `

// ////build HTML representation of each student:
// // students.forEach(currentStudent => {
// //     const studentHTMLRepresentation = student(
// //         currentStudent.name, 
// //         currentStudent.class, 
// //         currentStudent.info);
// //     document.querySelector("#container").innerHTML += studentHTMLRepresentation;
// // });


// //construct student with "passing" class:
// const passingStudent = (...props) => `
//     <div id="student">
//     ${h1(props[0], "xx-large passing")}
//     ${section(props[1], "section--padded")}
//     ${aside(props[2], "pushRight")}
//     </div>
// `

// //construct student with "failing" class:
// const failingStudent = (...props) => `
//     <div id="student">
//     ${h1(props[0], "xx-large failing")}
//     ${section(props[1], "section--padded")}
//     ${aside(props[2], "pushRight")}
//     </div>
// `

// //build HTML representation of each student, with passing and failing classes:
// for (currentStudent of students) {
//     let studentComponent = ""
//     if (currentStudent.score >= 60) {
//         studentComponent = passingStudent(
//             currentStudent.name, 
//             currentStudent.class, 
//             currentStudent.info);
//         document.querySelector("#container").innerHTML += studentComponent;
//     } else if (currentStudent.score < 60) {
//         studentComponent = failingStudent(
//             currentStudent.name, 
//             currentStudent.class, 
//             currentStudent.info);
//         document.querySelector("#container").innerHTML += studentComponent;
//     } else {
//         studentComponent = student(
//             currentStudent.name, 
//             currentStudent.class, 
//             currentStudent.info);
//         document.querySelector("#container").innerHTML += studentComponent;
//     }
// }


//WRITE A NEW GENERIC ELEMENT BUILDING FUNCTION:

const element = (...props) => {
    return `<${props[2]} class="${props[1]}">${props[0]}</${props[2]}>`
}

//test generic element builder:
// let NEWelement = element("NEW ELEMENT", "failing", "h1");
// document.querySelector("#container").innerHTML += NEWelement;



//use generic element builder in student builder: 
const NEWstudent = (...props) => `
    <div id="student">
        ${element(props[0], "xx-large", "h1")}
        ${element(props[1], "bordered dashed section--padded", "section")}
        ${element(props[2], "pushRight", "aside")}
    </div>
`

const NEWpassingStudent = (...props) => `
    <div id="student">
        ${element(props[0], "xx-large passing", "h1")}
        ${element(props[1], "bordered dashed section--padded", "section")}
        ${element(props[2], "pushRight", "aside")}
    </div>
`

const NEWfailingStudent = (...props) => `
    <div id="student">
        ${element(props[0], "xx-large failing", "h1")}
        ${element(props[1], "bordered dashed section--padded", "section")}
        ${element(props[2], "pushRight", "aside")}
    </div>
`

// //build HTML representation of each student:
// students.forEach(currentStudent => {
//     const studentHTMLRepresentation = NEWstudent(
//         currentStudent.name, 
//         currentStudent.class, 
//         currentStudent.info);
//     document.querySelector("#container").innerHTML += studentHTMLRepresentation;
// });


//build HTML representation of each student, with passing and failing classes:
for (currentStudent of students) {
    let studentComponent = ""
    if (currentStudent.score >= 60) {
        studentComponent = NEWpassingStudent(
            currentStudent.name, 
            currentStudent.class, 
            currentStudent.info);
        document.querySelector("#container").innerHTML += studentComponent;
    } else if (currentStudent.score < 60) {
        studentComponent = NEWfailingStudent(
            currentStudent.name, 
            currentStudent.class, 
            currentStudent.info);
        document.querySelector("#container").innerHTML += studentComponent;
    } else {
        studentComponent = NEWstudent(
            currentStudent.name, 
            currentStudent.class, 
            currentStudent.info);
        document.querySelector("#container").innerHTML += studentComponent;
    }
}
