const debounceAnimationFrame = <T>(fn: Function) => {
  let timeout: number;
  const debouncedFn = (...args: any) => {
    cancelAnimationFrame(timeout);
    return new Promise<T>(resolve => {
      timeout = requestAnimationFrame(() => {
        const result: T = fn(...args);
        resolve(result);
      });
    })
  
  };
  return debouncedFn;
};

export default debounceAnimationFrame;
