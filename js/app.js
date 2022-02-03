console.log('Sanity Check');
//Cashed Element Reference for input 
const userInput = document.getElementById('inp')
//Cashed Element Reference for button
const btn = document.getElementById('submit-button');

//Cashed Element Reference for ul
const unOrdredList = document.getElementById('todo-list')
//Cashed Element Reference for Reset 
const resetBtn = document.getElementById('reset');
// Event Listener for button to do 
btn.addEventListener('click',function(evt){
  const list =document.createElement("li");
  list.textContent = userInput.value
  console.log(userInput.value );
  if(userInput.value !==""){
  
  unOrdredList.appendChild(list)
    userInput.value = ""
  }
  resetBtn.onclick();

})

