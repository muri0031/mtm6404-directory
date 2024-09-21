//2 List function
function list(clients) {
    return clients.map((client) => {
      return `<li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
                ${client.name}
                <strong>$ ${client.balance.toFixed(2)}</strong>
              </li>`
    }).join('')
  }

  //3 order function
  function order(clients, property) {
    return clients.sort((a, b) => {
      if (a[property] < b[property]) return -1
      if (a[property] > b[property]) return 1
      return 0
    })
  }

//4 Total function
function total (clients) {
    return clients.reduce((acc, client) => (acc + client.balance), 0)
}

//5  info function

function info(index) {
    return clients.find(client => client.index === index)
  }
  //6 Search function
  function search(clients, query) {
    return clients.filter(client => client.name.toLowerCase().includes(query.toLowerCase()) 
  )
  }
  