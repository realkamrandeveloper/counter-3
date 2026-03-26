const increaseButtonEl = document.querySelector(".counter_button--increase");
const decreaseButtonEl = document.querySelector(".counter_button--decrease");
const counterValueEl = document.querySelector(".counter_value");
const resetButtonEl = document.querySelector(".counter_reset-button");
const titleEl = document.querySelector(".counter_title");

const MAX_VALUE = 5;
const DEFAULT_TITLE = "Fancy Counter";
const LIMIT_TITLE = "Max limit";

function updateTitleByValue(value) {
    if (!titleEl) return;
    titleEl.textContent = value >= MAX_VALUE ? LIMIT_TITLE : DEFAULT_TITLE;
}

function setCounterValue(value) {
    counterValueEl.textContent = value;
    updateTitleByValue(value);
}

if (!increaseButtonEl || !decreaseButtonEl || !counterValueEl || !resetButtonEl || !titleEl) {
    console.error("Counter elements not found. Check class names in HTML and selectors in JS.");
} else {
    // Initial state
    updateTitleByValue(Number(counterValueEl.textContent));

    resetButtonEl.addEventListener("click", function () {
        setCounterValue(0);
    });

    decreaseButtonEl.addEventListener("click", function () {
        let currentValueAsNumber = Number(counterValueEl.textContent);
        let newValue = currentValueAsNumber - 1;
        if (newValue < 0) {
            newValue = 0;
        }
        setCounterValue(newValue);
    });

    increaseButtonEl.addEventListener("click", function () {
        let currentValueAsNumber = Number(counterValueEl.textContent);

        // Limit 5 tak hai. 5 se aage value change na ho.
        // Message title ki jagah (jahan "Fancy Counter" likha hai) show hoga.
        if (currentValueAsNumber >= MAX_VALUE) {
            updateTitleByValue(currentValueAsNumber);
            return;
        }

        let newValue = currentValueAsNumber + 1;
        if (newValue > MAX_VALUE) {
            newValue = MAX_VALUE;
        }
        setCounterValue(newValue);
    });
}
