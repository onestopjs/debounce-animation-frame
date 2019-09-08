const debounceAnimationFrame = <F extends (...args: any[]) => any>(fn: F) => {
  let timeout: number;
  const debouncedFn = (...args: Parameters<F>) => {
    cancelAnimationFrame(timeout);
    return new Promise<ReturnType<F>>(resolve => {
      timeout = requestAnimationFrame(() => {
        const result: ReturnType<F> = fn(...args);
        resolve(result);
      });
    })
  
  };
  return debouncedFn;
};

export default debounceAnimationFrame;
