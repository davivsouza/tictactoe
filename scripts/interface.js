document.addEventListener('DOMContentLoaded', ()=>{
  let squares = document.querySelectorAll(".square")
  
  squares.forEach(square => {
    square.addEventListener('click', (ev)=>{

      let squareTarget = ev.target

      let position = squareTarget.id
      if(handleMove(position)){
        updateSquares()
        setTimeout(()=>{
          document.getElementById('gameover').style.display = "flex"
          document.getElementById('winner-field').innerHTML = `
          <img src="./assets/${winner}.png" alt="${winner}"> 
          <h2 class="${winner}-h2">${winner}</h2>
          `
        }, 500)
      }
      updateSquares()
    })
  })

 
  
})


function updateSquares(){
  let squares = document.querySelectorAll(".square")

  squares.forEach(square => {
    let pos = square.id
    let symbol = boards[pos]

    if(symbol != ''){
      square.innerHTML = `<div class='${symbol}'></div>`
    }
  })

  console.log(boards);
}


function reload(){
  location.reload()
}