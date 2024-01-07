const listItems = [
    { id: 1, name: 'Amin', family: 'Saeedi Rad' },
    { id: 2, name: 'Amir', family: 'Zehtab' },
    { id: 3, name: 'Qadir', family: 'Yolme' },
    { id: 4, name: 'Babak', family: 'Mohammadi' },
    { id: 5, name: 'Hasan', family: 'Ghahreman Zadeh' },

    { id: 6, name: 'sara', family: 'Saeedi Rad' },
    { id: 7, name: 'fateme', family: 'Zehtab' },
    { id: 8, name: 'mohi', family: 'Yolme' },
    { id: 9, name: 'hasan', family: 'Mohammadi' },
    { id: 10, name: 'abbas', family: 'Ghahreman Zadeh' },

    { id: 11, name: 'Saeed', family: 'Ehsani' },
    { id: 12, name: 'Siamak', family: 'Modiri' },
    { id: 13, name: 'Mohsen', family: 'Ansari' },
    { id: 14, name: 'Mehran', family: 'Ali Pour' },
    { id: 15, name: 'Amir Hossein', family: 'Mahtabi' },

    { id: 16, name: 'Hossein', family: 'Amino' },
    { id: 17, name: 'Melika', family: 'Ehsani' },
    { id: 18, name: 'Qadir', family: 'Yolme' },
    { id: 19, name: 'Fatemeh', family: 'Alilou' },
    { id: 20, name: 'Ehsan', family: 'Tayyebi' },

    { id: 21, name: 'Zahra', family: 'Gholami' },
    { id: 22, name: 'Matin', family: 'Sahebi' },

];
const listElem = document.getElementById('list');
const paginationElem = document.getElementById('pagination');

let rowCount = 5;
let currentPage = 1;

function display(rowCount, currentPage, allUserArray, userContainer) {
    listElem.innerHTML = '';

    let endIndex = rowCount * currentPage;
    let startIndex = endIndex - rowCount;

    let paginationUser = allUserArray.slice(startIndex, endIndex);

    paginationUser.forEach((item) => {
        let userElement = document.createElement('div');
        userElement.innerHTML = item.name + ' ' + item.family;
        userElement.classList.add('item');
        userContainer.appendChild(userElement);
    });

};

function setPagination() {
    let wrapperLength = Math.ceil(listItems.length / rowCount);

    for (let i = 1; i <= wrapperLength; i++) {
        // create button pagination
        let paginationElement = document.createElement('button');
        paginationElement.innerHTML += i;
        paginationElem.appendChild(paginationElement);

        // add green color to active btn
        if (currentPage === i) {
            paginationElement.classList.add('active');
        };

        paginationElement.addEventListener('click', function () {
            currentPage = i;
            display(rowCount, currentPage, listItems, listElem);

            //remove active class from previous active button
            let previousActiveBtn = document.querySelector('button.active');
            previousActiveBtn.classList.remove('active');
            paginationElement.classList.add('active');

        })
    };

};


display(rowCount, currentPage, listItems, listElem);

setPagination();
