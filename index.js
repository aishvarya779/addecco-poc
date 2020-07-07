let colors = [
  { key: 1, color: '#6F98A8' },
  { key: 2, color: '#2B8EAD' },
  { key: 3, color: '#2F454E' },
  { key: 4, color: '#2B8EAD' },
  { key: 5, color: '#2F454E' },
  { key: 6, color: '#BFBFBF' },
  { key: 7, color: '#BFBFBF' },
  { key: 8, color: '#6F98A8' },
  { key: 9, color: '#2F454E' }
];

let selectedItem = document.getElementById('main');
const appendCards = arr => {
  selectedItem.innerHTML = '';
  let result = '';
  arr.forEach(item => {
    let node = document.createElement('div');
    node.className = 'box';
    node.style.backgroundColor = item.color;
    var textnode = document.createTextNode(item.key);
    node.appendChild(textnode);
    selectedItem.appendChild(node);
  });
};

const shuffleCards = () => {
  let shuffledArray = [...colors];
  shuffledArray.forEach((item, index) => {
    const rand = Math.floor(Math.random() * (shuffledArray.length - 1));
    [shuffledArray[index], shuffledArray[rand]] = [
      shuffledArray[rand],
      shuffledArray[index]
    ];
  });
  shuffledArray.sort(() => Math.random() - 0.5);
  appendCards(shuffledArray);
};

const sortCards = () => {
  let sortedArray = colors.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  appendCards(sortedArray);
};
sortCards();
