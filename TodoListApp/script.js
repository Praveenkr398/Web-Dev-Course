const addTast = document.querySelector('#addTast')
const listItem = document.querySelector('#listItem')

function addTastItem(){
    if(addTast.value === ''){
      alert("are you forget to write")
    }else {
        let li = document.createElement('li')
        li.innerHTML = addTast.value;
        listItem.prepend(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    addTast.value = ''
}

listItem.addEventListener("",(e)=>{
    if(e.target.tagName === 'li'){
        e.target.classList.toggle('checked')
console.log(e.target.tagName)
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
},false)

