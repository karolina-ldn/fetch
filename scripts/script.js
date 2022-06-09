"use strict";


async function fetchObject(url, payload) { //this returns a javascript object
    const method = "GET" //Some service will want a POST 
    const headers = { 'Accept': 'text/html', 'Content-Type': 'application/json' }
    const response = await fetch(url, { method: method, body: JSON.stringify(payload), headers: headers })
    //const response = await fetch(url, {method:method,headers:{'Accept':'text/html','Content-Type':'application/json'}})
    if (response.ok) {
        return await response.json()
    }
    else {
        console.log(`unexpected response status ${response.status} + ${response.statusText}`)
    }
}

let name1 = document.createElement("h1")
let answer = document.createElement("h2")
let image = document.createElement("img")

document.body.appendChild(name1)
async function getGender(){

    let name = document.getElementById("name").value
    let gender = await fetchObject("https://api.genderize.io?name="+name)
    
    name1.innerText=gender.name

    if (gender.gender == "male"){
        answer.innerText = "Let me guess, you are a boy";
        document.body.appendChild(answer);
        image.setAttribute("src","images/boy.png");
        document.body.appendChild(image);
        image.classList.add("image1");
        document.body.style.backgroundColor="blue";
    } else if (gender.gender == "female") {
        answer.innerText = "Let me guess, you are a girl";
        document.body.appendChild(answer);
        image.setAttribute("src","images/girl.png")
        document.body.appendChild(image)
        image.classList.add("image2");
        document.body.style.backgroundColor="pink";

    }
    
    
    
    
    

}

