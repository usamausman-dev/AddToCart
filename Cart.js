var data = JSON.parse(localStorage.getItem('item'));



for (let i = 0; i < data.length; i++) {

    if (data[i + 1].key == data[i].key) {
        console.log("Yes");
        data[i].quantity++;
    }
    
    var tableData = `<tr>
                        <th scope="row">${data[i].key}</th>
                        <td>${data[i].color}</td>
                        <td>${data[i].type}</td>
                        <td>${data[i].capacity}</td>
                        <td>${data[i].quantity}</td>
                    </tr>`

    document.getElementById('cartContent').innerHTML += tableData;
}

// var arrayWithDuplicates = [
//     {"type":"LICENSE", "licenseNum": "12345", state:"NV"},
//     {"type":"LICENSE", "licenseNum": "A7846", state:"CA"},
//     {"type":"LICENSE", "licenseNum": "12345", state:"OR"},
//     {"type":"LICENSE", "licenseNum": "10849", state:"CA"},
//     {"type":"LICENSE", "licenseNum": "B7037", state:"WA"},
//     {"type":"LICENSE", "licenseNum": "12345", state:"NM"}
// ];

// function removeDuplicates(originalArray, prop) {
//      var newArray = [];
//      var lookupObject  = {};

//      for(var i in originalArray) {
//         lookupObject[originalArray[i][prop]] = originalArray[i];
//      }

//      for(i in lookupObject) {
//          newArray.push(lookupObject[i]);
//      }
//       return newArray;
//  }

// var uniqueArray = removeDuplicates(data, "key");
// console.log("uniqueArray is: " + JSON.stringify(uniqueArray));

// var yourArray = [
//     { Index: 1, Name: "Farley, Charley", EmployeeCode: "12", PaymentType: "Void", CheckDate: "01/04/2012" },
//     { Index: 2, Name: "Farley, Charley", EmployeeCode: "12", PaymentType: "Void", CheckDate: "01/04/2012" },
//     { Index: 3, Name: "Tarley, Charley", EmployeeCode: "12", PaymentType: "Void", CheckDate: "01/04/2012" }
// ];

// var unique = [...new Set(yourArray.map(propYoureChecking => propYoureChecking.Name))];
// if (unique.length === 1) {
//     console.log(unique);
// }
// else {
//     console.log('nothing')
// }