// Write your JavaScript code here!
const pilotNameField = document.getElementById("pilotName")
const coPilotNameField = document.getElementsByName("copilotName")
const fuelLevelField = document.getElementsByName("fuelLevel")
const cargoMassField = document.getElementsByName("cargoMass")


let planetary =[
  {
     "name": "Tatooine",
     "diameter": "10465 km",
     "star": "Tatoo I & Tatoo II",
     "distance": "43000 light years from galactic core",
     "image": "https://www.nasa.gov/sites/default/files/images/587837main_Kepler16_transit_art2_full.jpg",
     "moons": 3
  },
  {
      "name": "Pern",
      "diameter": "measurement is under dispute",
      "star": "Alpha Sagittarius (a.k.a. Rukbat)",
      "distance": "Varies - find a library",
      "image": "https://www.nasa.gov/centers/langley/images/content/698148main_Brains_904_2.jpg",
      "moons": 2
  },
  {
      "name": "Saturn/Titan",
      "diameter": "5149.5 km",
      "star": "Sol",
      "distance": "1.4 billion km from Earth",
      "image": "https://solarsystem.nasa.gov/system/resources/detail_files/16278_PIA20016.jpg",
      "moons": 0
  },
  {
      "name": "Mars",
      "diameter": "6779 km",
      "star": "Sol",
      "distance": "225 million km from Earth",
      "image": "https://mars.nasa.gov/system/resources/detail_files/7808_global-color-views-mars-PIA00407-full2.jpg",
      "moons": 2
  },
  {
      "name": "K2-18b",
      "diameter": "34500 km",
      "star": "K2-18",
      "distance": "110 light years from Earth",
      "image": "https://www.nasa.gov/sites/default/files/thumbnails/image/heic1916a.jpg",
      "moons": "unknown"
  },
  {
      "name": "Jupiter/Europa",
      "diameter": "3,121.6 km",
      "star": "Sol",
      "distance": "628.3 million km from Earth",
      "image": "https://apod.nasa.gov/apod/image/1609/Europa_Galileo_960.jpg",
      "moons": 0
  }
]

let arrayIndex = Math.round(Math.random() *10) % 6
let missionTarget = document.getElementById("missionTarget")
window.addEventListener("load", function(){
     
  let form = document.querySelector("form");
  form.addEventListener("submit",function (e){
   e.preventDefault()
   
  }) 

})

missionTarget.innerHTML = `<h2>Mission Destination</h2>
<ol><li>Name: ${planetary[arrayIndex].name}</li>
<li>Diameter: ${planetary[arrayIndex].diameter}</li>
<li>Star: ${planetary[arrayIndex].star}</li>
<li>Distance from Earth: ${planetary[arrayIndex].distance}</li>
<li>Number of Moons: ${planetary[arrayIndex].moons}</li>
</ol>
<img src="${planetary[arrayIndex].image}">
</img>`
window.addEventListener("load", function(){
     
  let form = document.querySelector("form");
  form.addEventListener("submit",function(event) {
    event.preventDefault()
    checkFormDetails()
   
  }) 

})

function checkFormDetails(){
        
       let pilotName = document.querySelector('[name="pilotName"]').value
       let coPilotName = document.querySelector("[name='copilotName']").value
       let fuelLevel = document.querySelector("[name='fuelLevel']").value
       let cargoMass = document.querySelector("[name='cargoMass']").value

        
       let fieldsWithBlankVal = "Please enter the data for the below fields :\n"
       let fieldWithCorrectData = ""
       let isFieldsBlank = true
       let isFieldsWithCorrectData = true

       if(pilotName.trim().length == 0 ){
         isFieldsBlank = false
         fieldsWithBlankVal += "- Pilot Name\n"
         
       }

       if(isNaN(pilotName) == false){
         isFieldsWithCorrectData = false
         fieldWithCorrectData += "- Pilot Name should be string\n"
       }

       
       if(coPilotName.trim().length == 0 ){
         isFieldsBlank = false
         fieldsWithBlankVal += "- Co Pilot Name\n"
       }
       
       if(isNaN(coPilotName) == false){
         isFieldsWithCorrectData = false
         fieldWithCorrectData += "- Co Pilot Name should be string\n"
       }

       if(fuelLevel.trim().length == 0 ){
         isFieldsBlank = false
         fieldsWithBlankVal += "- Fuel Level\n"
       }
       //fuelLevel = Number(fuelLevel)
       if(Number.isInteger(Number(fuelLevel)) == false || fuelLevel.trim().length ==0){
         isFieldsWithCorrectData = false  
         fieldWithCorrectData += "- Fuel Level should be numeric\n"
       }
       
       if(cargoMass.trim().length == 0 ){
         isFieldsBlank = false
         fieldsWithBlankVal += "- Cargo Mass\n"
       }

       //cargoMass = Number(cargoMass)
       if(Number.isInteger(Number(cargoMass)) == false || cargoMass.trim().length == 0 ){
         isFieldsWithCorrectData = false
         fieldWithCorrectData += "- Cargo Mass should be numeric\n"
       }

       if ( isFieldsBlank == false){
              window.alert(fieldsWithBlankVal)
       }
       else{
         let pilotStatus = document.getElementById("pilotStatus")
         let coPilotStatus = document.getElementById("copilotStatus")
         pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`
         coPilotStatus.innerHTML =   `Co-Pilot ${coPilotName} is ready for launch`
       }
       
       if(isFieldsWithCorrectData == false){
            window.alert(fieldWithCorrectData)
       }
       let blnLaunch = true
       let fuelStatus = document.getElementById("fuelStatus")
       document.getElementById("faultyItems").style.visibility = "invisible"
         if(Number(fuelLevel) <= 10000 && isFieldsBlank != false && isFieldsWithCorrectData != false){
           document.getElementById("faultyItems").style.visibility = "visible"
           
           fuelStatus.innerHTML = "Fuel level too low for launch"
           let launchStatus = document.getElementById("launchStatus")
           launchStatus.innerHTML = "Shuttle not ready for launch"
           launchStatus.style.color = "red"
           blnLaunch = false
         }

         let cargoStatus = document.getElementById("cargoStatus")
         if(Number(cargoMass) > 10000 && isFieldsBlank != false && isFieldsWithCorrectData!=false){
          document.getElementById("faultyItems").style.visibility = "visible"          
          cargoStatus.innerHTML = "Too much mass for the shuttle to take off"
          let launchStatus = document.getElementById("launchStatus")
          launchStatus.innerHTML = "Shuttle not ready for launch"
          launchStatus.style.color = "red"
          blnLaunch = false
        }

              
         if(blnLaunch == true && isFieldsBlank != false && isFieldsWithCorrectData != false){
          document.getElementById("faultyItems").style.visibility = "visible"
          launchStatus.style.color = "green"
          fuelStatus.innerHTML = "Fuel level high enough for launch"
          cargoStatus.innerHTML = "Cargo mass low enough for launch"

          launchStatus.innerHTML = "Shuttle is ready for launch"
         }
         
        
} 




/*window.addEventListener("load", function(){
     
  let form = document.querySelector("form");
  form.addEventListener("submit",function (e){
   e.preventDefault()
   
  }) 

})*/

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
</img>*/
