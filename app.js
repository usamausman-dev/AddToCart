function generateItems() {
    let cars = [
        {
            "color": "purple",
            "type": "minivan",
            "capacity": 7
        },
        {
            "color": "red",
            "type": "station wagon",
            "capacity": 5
        }, {
            "color": "blue",
            "type": "station wagon",
            "capacity": 6
        }
        , {
            "color": "red white",
            "type": "station wagon",
            "capacity": 6
        }
    ]


    for (i = 0; i < cars.length; i++) {
        var { color, type, capacity } = cars[i];
        writeUserData(color, type, capacity);
    }
    console.log(color);
}


var database = firebase.database();

//Write Data to Firebase
function writeUserData(color, type, capacity) {
    firebase.database().ref('items').push({
        color: color,
        type: type,
        capacity: capacity
    });
}

//Fetch Data From Firebase
function ListenData() {
    var myref = firebase.database().ref('items');
    myref.on('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();

            var { color, type, capacity } = childData;

            var genHTML = `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title"> ${childData.type} </h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button class="btn btn-primary" onclick="addToCart('${childKey}','${color}','${type}','${capacity}'
                        )" > Add to Cart</button>

                    </div>
                    </div> <br> <br>
                    `

                    document.getElementById('itemdiv').innerHTML += genHTML;
        });
    });

    
}

ListenData();


// var itemNo = 1;
function addToCart(key, color, type, capacity) {

    var newitem = new Object();
    // itemNo + '_' + 
    newitem.key = key;
    newitem.color = color;
    newitem.type = type;
    newitem.capacity = capacity;
    newitem.quantity = 1;

    if (localStorage.item) {
        item = JSON.parse(localStorage.getItem('item'));
    } else {
        item = [];
    }

    item.push(newitem)
    //console.log('1' + item);
    localStorage.setItem('item', JSON.stringify(item));

    // this is how you will retrive it
    var retrievedObject = localStorage.getItem('item');
    //console.log('retrievedObject: ', JSON.parse(retrievedObject));
    // itemNo++;
}

