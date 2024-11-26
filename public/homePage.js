const newLogoutButton = new LogoutButton

newLogoutButton.action = function () {
  ApiConnector.logout((result) => {
    if (result.success) {
      location.reload()
    }
  })
}

ApiConnector.current((result) => {
  console.log(result)
  if (result.success) {
    ProfileWidget.showProfile(result.data)
  }
})


const  board = new RatesBoard()

ApiConnector.getStocks((renderBoard(
  board.clearTable()
  board.fillTable(result.date)
)
)
) 
// => {

//   if (result.success){
//     board.clearTable()
//     board.fillTable(result.date)

// }})

// setInterval(renderBoard,1000)