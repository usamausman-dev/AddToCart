var data = JSON.parse(localStorage.getItem('item'));
// console.log(data);


// Reducing the data by removing duplications
let myRedItems = data.reduce(function (accumulator, currentElement) {
    let index = accumulator.findIndex(item => item.key == currentElement.key)
    if (index >= 0) {
        accumulator[index].quantity += 1
        return [...accumulator]
    } else {
        return [...accumulator, { ...currentElement, quantity: 1 }]
    }
    return accumulator
}, [])


let getItems = (items, id) => items.filter(item => item.id == id).map(item => { return { capacity : item.capacity,type: item.type, key: item.key, color: item.color, quantity: item.quantity } })

var reduceData = getItems(myRedItems, data.key);
// console.log(mydata.length)


for (let i = 0; i < reduceData.length; i++) {
    var tableData = `<tr>
                        <th scope="row">${reduceData[i].key}</th>
                        <td>${reduceData[i].color}</td>
                        <td>${reduceData[i].type}</td>
                        <td>${reduceData[i].capacity}</td>
                        <td>${reduceData[i].quantity}</td>
                    </tr>`

    document.getElementById('cartContent').innerHTML += tableData;
}







