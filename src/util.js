const DATE_FORMAT = 'DD MM YY';

function getRandomElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export { DATE_FORMAT, getRandomElement };
