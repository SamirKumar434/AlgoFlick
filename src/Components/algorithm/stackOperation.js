export const stackOperations = {
  push: async (stack, setStack, value, speed, updateState) => {
    const { setMessage, setIsOperating } = updateState;
    
    setIsOperating(true);
    setMessage(`Pushing ${value} onto stack...`);
    await new Promise(resolve => setTimeout(resolve, speed));
    
    const newStack = [...stack, value]; // Add to END of array (top of visual stack)
    setStack(newStack);
    setMessage(`✅ Pushed ${value}. Stack size: ${newStack.length}`);
    
    await new Promise(resolve => setTimeout(resolve, speed/2));
    setIsOperating(false);
  },

  pop: async (stack, setStack, speed, updateState) => {
    const { setMessage, setIsOperating, setPeekValue } = updateState;
    
    if (stack.length === 0) {
      setMessage('❌ Stack is empty! Cannot pop.');
      return null;
    }
    
    setIsOperating(true);
    setMessage('Popping from stack...');
    await new Promise(resolve => setTimeout(resolve, speed));
    
    const poppedValue = stack[stack.length - 1]; // Last element is top
    const newStack = stack.slice(0, -1); // Remove last element
    setStack(newStack);
    setPeekValue(null);
    setMessage(`✅ Popped ${poppedValue}. Stack size: ${newStack.length}`);
    
    await new Promise(resolve => setTimeout(resolve, speed/2));
    setIsOperating(false);
    return poppedValue;
  },

  peek: async (stack, speed, updateState) => {
    const { setMessage, setPeekValue } = updateState;
    
    if (stack.length === 0) {
      setMessage('❌ Stack is empty!');
      setPeekValue(null);
      return null;
    }
    
    const topValue = stack[stack.length - 1]; // Last element is top
    setPeekValue(topValue);
    setMessage(` Peek: ${topValue} (top element)`);
    await new Promise(resolve => setTimeout(resolve, speed));
    
    setTimeout(() => {
      setPeekValue(null);
    }, speed * 2);
    
    return topValue;
  }
};