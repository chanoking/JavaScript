function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const fruit = `fruit with ${applePieces} apples ${orangePieces} oranges`;
  return fruit;
}

console.log(fruitProcessor(2, 3));
