const textArea = document.createElement('input');
if (localStorage.getItem('input')) {
  textArea.value = localStorage.getItem('input');
}

document.body.append(textArea);

textArea.addEventListener('input', function(event){
  console.log(event);
  localStorage.setItem('input', event.target.value);
});