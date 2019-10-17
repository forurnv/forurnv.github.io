

const url = "https://pokeapi.co/api/v2/pokemon/"
fetch (url)
	.then(x => x.json())
	.then(x => {
	// debugger

		keys.forEach(function(x) {
			const values = results[x]
			updateDisplay(values.advice)
		})




		const y = x.results
		console.log (y)

	// const abilities = x.abilities[0].ability
	// debugger
})






// webkitConvertPointFromNodeToPage(x)

// array.forEach(element => {
	
// });




























// ---------------------------------------------------------------------
// ----------------------------------------------------------------------


// DAY 7 EXERCISE  2,3
// HOW WORK WITH FORMS FEATURES


// ---------------------------------------------------------------------
// ----------------------------------------------------------------------


// DAY 6 EXERCISE 1,2,3 
// HOW TO RESPOND TO ERRORS
// DAY 6 EXERCISE 4
// HOW TO RESPOND TO WAIT TIMES


// ---------------------------------------------------------------------
// ----------------------------------------------------------------------

/* <header>
<nav>
		<div class="wrapper">
				<div class="logo"></div>
				<ul id="dropdown" class="dropdown">
						<div class="close"></div>
				</ul>
				<div class="menu">
				</div>
				
		</div>
</nav>
</header> */




// const dropdownbutton = document.querySelector(".menu")
// const switchToggle = document.querySelector("#dropdown")



// dropdownbutton.addEventListener("click", function() {
// 	console.log("CLICKED")
// 	switchToggle.className = "dropdown dropdown2"
// })


// const dropdownbuttonclose = document.querySelector(".close")
// const switchToggleback = document.querySelector("#dropdown")



// dropdownbuttonclose.addEventListener("click", function() {
// 	console.log("CLICKED")
// 	switchToggleback.className = ".close"
// })

// ---------------------------------------------------------------------
// ----------------------------------------------------------------------


// // - - - - - - - - - - - - - - - - - - - - - - 
// // ADDING 
// // - - - - - - - - - - - - - - - - - - - - - - 
// 1. get location

// const section = document.querySelector('.section')

// 2. create the thing u want to put in that location

// const newElement = document.createElement('p')
// newElement.textContent = 'added new element'
// newElement.className = 'my-new-class'

// 3. add the element to that location

// section.appendChild(newElement)



// // - - - - - - - - - - - - - - - - - - - - - - 
// // REMOVE  
// // - - - - - - - - - - - - - - - - - - - - - - 
// const referenceToNewElement = document.querySelector('.my-new-class')
// referenceToNewElement.remove()

// ---------------------------------------------------------------------
// ----------------------------------------------------------------------


// const student = {
// 	name: "John",
// 	id: "1234",
// 	email: "john@example.com",

// }
// const student = {
// 	name: "Jane",
// 	id: "1234",
// 	email: "john@example.com",

// }
// const student = {
// 	name: "Mitch",
// 	id: "1234",
// 	email: "john@example.com",
// }

// const students = ["John", "Jane", "Mitch"]

// // HIS EXAMPLE:
// // const players = ["bananas", "apples", "oranges"]
// // console.log(players)
// // players.forEach(function(item) {
// // 		console.log(item)
// // })

// // OUTPUT

// students.forEach(function(name) {
// 		console.log(name)
// })

// ---------------------------------------------------------------------
// ----------------------------------------------------------------------


// // NEXT ASSIGNMENT 2
// // The Grade Assigner
// // Write a function named assignGrade that:
// // takes 1 argument, a number score.
// // returns a grade for the score, either "A", "B", "C", "D", or "F".
// // Call that function for a few different scores and log the result to make sure it works.


// // INPUT


// const grade = 65

// // DEFINITION

// function assignGrade(grade) {
// 				 if (grade >= 90) {
// 		console.log(grade + " = A")
// 	} else if (grade >= 80) {
// 		console.log(grade + " = B")
// 	} else if (grade >= 70) {
// 		console.log(grade + " = C")
// 	} else if (grade >= 60) {
// 		console.log(grade + " = D")
// 	} else if (grade >= 51) {
// 		console.log(grade + " = F")
// 	} else    {
// 		console.log("see instructor")

// 	}
// }





