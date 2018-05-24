import PyFiClient from 'pyfi-client'

const py = PyFiClient();


const button = document.getElementById('button');
const progress = document.getElementById('progress');
const result = document.getElementById('result');
const input = document.getElementById('input');
button.disabled = true;

py._.onReady(()=>{
  // wait until PyFi is ready to allow clicks
  button.disabled = false;
  console.log('PyFi Ready!')
})


button.addEventListener("click", function(){
  progress.setAttribute('value', 0)
  button.disabled = true;
  const runTime = Number(input.value)
  py.slow_task([runTime])
  .onMessage(message => {
    progress.setAttribute('value', message.progress+1)
  })
  .then(res => {
    result.innerHTML = `In total, it took ${res} seconds, according to Python.`
    button.disabled = false;
  })
  .catch(error => {
    console.log(error)
  })
});
