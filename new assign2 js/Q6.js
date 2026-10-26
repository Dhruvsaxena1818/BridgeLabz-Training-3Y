let count = 0;

function increment() {
    count++;
    console.log(count);
}

function decrement() {
    count--;
    console.log(count);
}

function counterStatus() {
    function displayCount() {
        console.log(count);
    }

    displayCount();
}

increment();
increment();
decrement();
counterStatus();