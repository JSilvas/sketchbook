const pets = ['Mr. Mittens', 'DemiDog', 'Smol Cat', 'Good Pupper'];

function looper() {

  var whileCounter = 0;
  var forCounter = 0;

  while (whileCounter < 10) {

    whileCounter = whileCounter + 1;
    console.log(whileCounter);
    console.log(forCounter);

    for (var i = 0; i < pets; i++) {

      console.log(i);
      forCounter + 1;
      console.log('pet:', pets[i]);

      break;
    }

  }

}

looper();