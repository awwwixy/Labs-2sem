// Lab1.js

// Generator Function - Cyclic Day Generator
function* cyclicDayGenerator() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let index = 0;

  while (true) {
    yield days[index];
    index = (index + 1) % days.length;
  }
}


// Timeout Iterator Function
function consumeWithTimeout(iterator, timeoutSeconds) {
  const startTime = Date.now();
  let iteration = 0;

  function process() {
    const currentTime = Date.now();

    if ((currentTime - startTime) / 1000 >= timeoutSeconds) {
      console.log("\nTimeout reached. Stopping iteration.");
      return;
    }

    const { value } = iterator.next();
    iteration++;

    console.log(
      `[${new Date().toLocaleString()}] Iteration ${iteration}: ${value}`
    );

    setTimeout(process, 1000); // 1 second delay for visibility
  }

  process();
}


// Example usage
const generator = cyclicDayGenerator();
consumeWithTimeout(generator, 10); // Runs for 10 seconds

