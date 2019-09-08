# debounce-animation-frame

Debounce your functions using `requestAnimationFrame`.

This means that your function will be called on the first available animation frame. If you use your function for updating visual information, you can use this package to debounce it - this way you won't make any unnecessary updates. If you are unfamiliar with `requestAnimationFrame`, I suggest you read [here](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) first.

## Usage

This is a simple example to get you going:

```js
import debounceAnimationFrame from "debounce-animation-frame";

const myFn = (a, b) => {
  console.log("result: ", a + b);
};

const myDebouncedFn = debounceAnimationFrame(myFn);

myDebouncedFn(1, 2);
```

`debounceAnimationFrame` takes a function as an argument, and returns another function, which returns a promise, which resolves with the result of the first function.

When you wrap your function in `debounceAnimationFrame`, you can use the returned function like you would use your original function, but it will now return a promise (which you won't need in most cases). Your function will get fired on the next animation frame.

## API

This module is written in TypeScript so the types are included. It exports only one function as a default export. It has the following signature:

```js
debounceAnimationFrame: <F extends (...args: any[]) => any>(fn: F) => (...args: Parameters<F>) => Promise<ReturnType<F>>
```
The promise returned resolves with the result of the passed function.

Keep in mind that in most cases, you may not need this promise, but I still added the functionality if you ever need it.

## Use cases and motivation
The use case that made me think about the idea is in my React application, I had a onMouseMove handler which sets the state with the current mouse position. Well, it makes no sense to set the state on every mouse move if most of them won't even be seen, so debouncing it like that seemed the best option. Now, the state is updated only when the result will actually be seen.

## License
Licensed under the [MIT License](./LICENSE).
