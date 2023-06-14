import store from "./store";
import { increment, decrement, reset } from "./slices/CounterSlice";

// Mendapatkan elemen tombol dan elemen tampilan counter
const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");
const resetBtn = document.querySelector("#reset");
const countEl = document.querySelector("#count");

const render = () => {
  countEl.textContent = store.getState().counter.value;
};

incrementBtn.addEventListener("click", () => {
  store.dispatch(increment());
});

decrementBtn.addEventListener("click", () => {
  store.dispatch(decrement());
});

resetBtn.addEventListener("click", () => {
  store.dispatch(reset());
});

store.subscribe(render);
