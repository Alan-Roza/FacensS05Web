(function clock () {
  const date = new Date()

  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  let period = "AM"

  if (hours === 0) {
      hours = 12
  } else if (hours > 12) {
      hours = hours - 12
      period = 'PM'
   }

   hours = (hours < 10) ? '0' + hours : hours
   minutes = (minutes < 10) ? '0' + minutes : minutes
   seconds = (seconds < 10) ? '0' + seconds : seconds
    
   const time = hours + ':' + minutes + ':' + seconds + ' ' + period

  document.getElementById('current-clock').innerText = time
  let t = setTimeout(function(){ clock() }, 1000)
})()

function generateReceipt() {
  const name = document.getElementById('clientName').value
  const email = document.getElementById('email').value
  const menuIndex = document.getElementById('menu')
  const menuOption = menuIndex.options[menuIndex.selectedIndex].innerHTML
  const clientAddress = document.getElementById('clientAddress').value
  const plusItens = document.getElementById('')
  console.log(menuIndex, menuOption)
  const receipt = `Nome do cliente:\t${name}\nE-mail do cliente:\t${email}\nEndereço do cliente:\t${clientAddress}\n\nPedido:\n\t${menuOption}`
  document.querySelector('#receipt').innerHTML = receipt
}
