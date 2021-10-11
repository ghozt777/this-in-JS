const cols = document.querySelectorAll(".col")
const btnShow = document.querySelector("#show-code")
const btnHide = document.querySelector("#hide-code")
const codeDisp = document.querySelector("#code")

const globalThis = this

let obj = {
    "are you dumb": "yes!" , 
    "meme-gif" : document.createElement('img'),
    time : new Date().toLocaleDateString(),
    printInNode: function(node) {
        const self = this
        node.innerText = self + "\n" + JSON.stringify(self,null,2)
        this["meme-gif"].src = "./meme.gif"
        node.parentNode.append(this["meme-gif"])
        return self
    }
}

const printGlobalThis = node => {
    node.innerText = globalThis
    console.log("global this -> " , globalThis)
} 

const printFunctionThis = node => {
    node.innerText = this
    console.log("function this -> " , this)
}

const printObjectThis = node => {
   const objectThis  = obj.printInNode(node)
   console.log("object this -> " , objectThis)
}

for(let i = 0 ; i < 3 ; i++){
  const [header,button,text] = cols[i].children;
  switch(i){
    case 0:
      header.innerText = "this in global context"
      button.addEventListener("click" , function(){
        printGlobalThis(text)
      })
    break;
    case 1:
      header.innerText = "this in function context"
      button.addEventListener("click" , function(){
        printFunctionThis(text)
      })
    break;
    case 2:
      header.innerText = "this in object context"
      button.addEventListener("click" , function(){
        printObjectThis(text)
      })
    break;
  }
}


const code  =  `
const cols = document.querySelectorAll(".col")
const globalThis = this

let obj = {
    "are you dumb": "yes!" , 
    "meme-gif" : document.createElement('img'),
    time : new Date().toLocaleDateString(),
    printInNode: function(node) {
        const self = this
        node.innerText = self + "\n" + JSON.stringify(self,null,2)
        this["meme-gif"].src = "./meme.gif"
        node.parentNode.append(this["meme-gif"])
        return self
    }
}

const printGlobalThis = node => {
    node.innerText = globalThis
    console.log("global this -> " , globalThis)
} 

const printFunctionThis = node => {
    node.innerText = this
    console.log("function this -> " , this)
}

const printObjectThis = node => {
   const objectThis  = obj.printInNode(node)
   console.log("object this -> " , objectThis)
}

for(let i = 0 ; i < 3 ; i++){
  const [header,button,text] = cols[i].children;
  switch(i){
    case 0:
      header.innerText = "this in global context"
      button.addEventListener("click" , function(){
        printGlobalThis(text)
      })
    break;
    case 1:
      header.innerText = "this in function context"
      button.addEventListener("click" , function(){
        printFunctionThis(text)
      })
    break;
    case 2:
      header.innerText = "this in object context"
      button.addEventListener("click" , function(){
        printObjectThis(text)
      })
    break;
  }
}

`
codeDisp.innerHTML = code

btnShow.addEventListener("click" , () => {
    codeDisp.className = "show"
    
})

btnHide.addEventListener("click" , () => {
    codeDisp.className = "hide"
})