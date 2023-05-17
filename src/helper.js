function choice(array) {
  let index = Math.floor(Math.random() * array.length);
  return array[index];
}

function removeItem(array, item) {
  const index = array.indexOf(item);
  if (index === -1) {
    return undefined;
  } else {
    array.splice(index, 1);
    return array;
  }
}
export { choice, removeItem };
