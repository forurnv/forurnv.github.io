
function getAllPokemon() {
const url = "https://pokeapi.co/api/v2/pokemon/"
fetch (url)
	.then(x => x.json())
	.then(x => {
	x.results.forEach(pokemon => writeToPage(pokemon.name,pokemon.url)) 

		console.log (x.results[0].url)
	
})
}

function getPokemon(purl) {
	writeToPage2("getPokemon() called with input: "+purl);
	// writeToPage2(x.id)
	console.log(purl)
// const url = "https://pokeapi.co/api/v2/pokemon/"+pid+"/"
const url = purl;
fetch (url)
	.then(x => x.json())
	.then(x => {
	// console.log(x)
	// TODO: Build a div containing important fields about this pokemon.
	//x.results.forEach(pokemon => writeToPage(pokemon.name)) 
//		console.log (x.results)
})
}



function writeToPage(pname, purl) {
	const el = document.createElement('button')
	el.id='pokemon'

  el.textContent = pname
	// document.body.appendChild(el)
	
	//el.textContent = el.textContent + purl
	el.addEventListener('click',function() {
		getPokemon(purl)
	});
// TODO: Bind callback with URL to button
// Eg. When clicked, it should call getPokemon(purl);
	let locate = document.querySelector("#section1")
	locate.appendChild(el)
}


function writeToPage2(pname, purl) {
	const el = document.createElement('a')
	Object.keys(x.results).forEach((key) => {
		el.setAttribute("href", )
		console.log (x.results[key].url)

	})

  el.style = `
    padding: 15px 30px;
		border-radius: 10px;
		margin: 3px;
    background: red;
    color: white;
    font-family: sans-serif;
    display: inline-block;
  `
  // el.textContent = pname
	// document.body.appendChild(el)
	
	el.textContent = el.textContent + purl
	// el.addEventListener('click',function() {
	// 	getPokemon(purl)
	// });
	header.appendChild(el)
// TODO: Bind callback with URL to button
// Eg. When clicked, it should call getPokemon(purl);
}

getAllPokemon()




// const url = 'https://swapi.co/api/people/1'
// const invalidUrl = 'https://swapi.co/api/NOT-VALID'

// fetch(url).then(x => {
//   return x.json()
// })




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





