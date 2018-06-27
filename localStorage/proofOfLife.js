var niceDragon = {
  size: 'babby',
  type: 'scottish drake',
  hp: '20'
};

var dragonomicon = window.localStorage;

dragonomicon.setItem('dragonsToLS', JSON.stringify(niceDragon));

dragonomicon.getItem('dragonsToLS'); // Should return: "{"size":"babby","type":"scottish drake","hp":"20"}"