// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach( function(name, index) {
    if ("Waldo" === name) {
      found(index);
    }
  });
}

function actionWhenFound(arr) {

  console.log("Found Waldo at index " + arr + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);