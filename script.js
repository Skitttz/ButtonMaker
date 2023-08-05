// Variaveis Padroes
const controles = document.getElementById('controles');
const css = document.querySelector(".css");
const btn = document.querySelector(".btn");
// Range em Tempo Real
let range = document.querySelectorAll("input[type='range']");
let valueSpan = document.querySelectorAll('.valueSpan');

controles.addEventListener("input", function(){
  range.forEach((element,index) =>{
    valueSpan[index].innerHTML = element.value;
  }); });

function initNumbersDefault(){
  range.forEach((element,index) =>{
    valueSpan[index].innerHTML = element.value;
  });
}

initNumbersDefault();

const handleStyle = {
  element: btn,
  texto(value){
    this.element.innerText = value;
  },
  color(value){
    this.element.style.color = value;
  },
  backgroundColor(value){
    this.element.style.backgroundColor = value;
  },
  height(value){
    this.element.style.height = value +"px";
  },
  width(value){
    this.element.style.width = value + "px";
  },
  border(value){
    this.element.style.border = value;
  },
  borderRadius(value){
    this.element.style.borderRadius = value +"px";
  },
  fontFamily(value){
    this.element.style.fontFamily = value;
  },
  fontSize(value){
    this.element.style.fontSize = value + "rem";
  }
}

controles.addEventListener("change",handleChange);

function handleChange(event){
  const name = event.target.name;
  const value = event.target.value;
  handleStyle[name](value);
  saveValues(name,value);
  showCss();
}

function showCss(){
  css.innerHTML = "<span>" + btn.style.cssText.split("; ").join(";</span><span>");

}


function saveValues(name,value){
  localStorage[name] = value;

}

function setValues(){
  const properties = Object.keys(localStorage);
  console.log(properties);
  properties.forEach(propertie =>{
    handleStyle[propertie](localStorage[propertie]);
    controles.elements[propertie].value = localStorage[propertie];
  })
  showCss();
}


setValues();





