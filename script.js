//your JS code here. If required.
function log(message) {
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML += message + '<br>';
}

log('Start of Program');

/* Macrotask (setTimeout)*/
setTimeout(() => {
  log('Macrotask 1 (setTimeout)');
}, 0);

/* Macrotask (setTimeout)*/
setTimeout(() => {
  log('Macrotask 2 (setTimeout)');
}, 0);

/* Microtask (Promise.resolve().then)*/
Promise.resolve().then(() => {
  log('Microtask 1 (Promise.resolve().then)');
});

/* Microtask (Promise.resolve().then)*/
Promise.resolve().then(() => {
  log('Microtask 2 (Promise.resolve().then)');
});

log('End of Program');