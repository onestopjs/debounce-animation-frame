import debounceAnimationFrame from "./debounceAnimationFrame";

beforeEach(() => {
  jest.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => {
    cb(0);
    return Math.random();
  })
})

it('should return a function', () => {
  const debounced = debounceAnimationFrame(() => {});
  expect(debounced).toBeInstanceOf(Function);
});

it('should return a function which returns a promise', () => {
  const debounced = debounceAnimationFrame(() => {});
  expect(debounced()).toBeInstanceOf(Promise);
});

it('calls the passed function', () => {
  const mockFn = jest.fn();
  const debounced = debounceAnimationFrame(mockFn);
  return debounced().then(() => {
    expect(mockFn).toHaveBeenCalledTimes(1);
  })
});

it('resolves with the correct result', () => {
  const mockFn = jest.fn().mockImplementation(number => number*2);
  const debounced = debounceAnimationFrame(mockFn);
  return debounced(2).then(result => {
    expect(result).toEqual(4);
  })
});