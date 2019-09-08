const debounceAnimationFrame = <T extends (...args: any[]) => any>(fn: T) => {
  let timeout: number;
  const debouncedFn = (...args: Parameters<T>) => {
    cancelAnimationFrame(timeout);
    return new Promise<ReturnType<T>>(resolve => {
      timeout = requestAnimationFrame(() => {
        const result: ReturnType<T> = fn(...args);
        resolve(result);
      });
    })
  
  };
  return debouncedFn;
};

export default debounceAnimationFrame;
