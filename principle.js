const color =[
  {
      backcolor: "linear-gradient(#FEA330 10%, #FDFBCE)"
  },
  {
      backcolor: "linear-gradient(#92C4FF, #FFD8D8)"
  },
  {
      backcolor: "linear-gradient(#92C4FF, #F88888)"
  },
  {
      backcolor: "linear-gradient(#ffffff, #ffffff)"
  },
  {
      backcolor: "linear-gradient(#323232, #323232)"
  }
]

const arrowTag = document.querySelector("img.arrow")
const sunTag = document.querySelector("div.sun")
const mainTag = document.querySelector("div.main-h")
const bodyTag = document.querySelector("body")
const siheungTag = document.querySelector("div.siheung")
const asideTag = document.querySelector("aside")
const btnTag = document.querySelector("div.btn")

let clickNumber = 1;

btnTag.addEventListener("click", function(){
  asideTag.classList.toggle("clicked")
  btnTag.classList.toggle("clicked")

  if(asideTag.classList.contains("clicked")){
    console.log("clicked")
  }else{
    console.log("none")
    asideTag.classList.remove("clicked");
  }
})

arrowTag.addEventListener("click", function(){
  arrowTag.classList.toggle("clicked");
  sunTag.classList.toggle("clicked");
  mainTag.classList.toggle("clicked");
  siheungTag.classList.toggle("clicked")

  bodyTag.style.background = color[0].backcolor

  if(arrowTag.classList.contains("clicked")){
    console.log("clicked")
  }else{
    console.log("none")
    arrowTag.classList.remove("clicked");
    sunTag.classList.remove("clicked");
    mainTag.classList.remove("clicked");
    siheungTag.classList.remove("clicked");
    bodyTag.style.background = color[1].backcolor
  }
})
const siheungphotos = document.querySelectorAll("div.siheung img")



siheungTag.addEventListener("mouseover", function(){
  for(let i = 0; i < siheungphotos.length; i++){


    siheungphotos[0].style.transform = `rotate(10deg) translate(100px)`;
    siheungphotos[1].style.transform = `rotate(-10deg) translate(-100px)`;
  }
})

siheungTag.addEventListener("mouseout", function(){

    siheungphotos.forEach(siheungphoto =>{

      siheungphoto.style.transform = "translate(0, 0)"
    })
})

siheungTag.addEventListener("click", function(){
  clickNumber++
  console.log(clickNumber)

  siheungphotos[clickNumber%siheungphotos.length].style.zIndex = clickNumber
})