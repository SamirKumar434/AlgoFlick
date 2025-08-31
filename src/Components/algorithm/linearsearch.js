export const linearSearch = async (array, target, speed, updateState) => {
  const { setCurrentIndex, setMessage, setIsSearching } = updateState;
  
  setIsSearching(true);
  setMessage('Starting linear search...');
  
  for (let i = 0; i < array.length; i++) {
    setCurrentIndex(i);
    setMessage(`Checking index ${i} (value: ${array[i]})...`);
    await new Promise(resolve => setTimeout(resolve, speed));
    
    if (array[i] === target) {
      setMessage(`🎉 Found ${target} at index ${i}!`);
      setIsSearching(false);
      return i; // Return found index
    }
  }
  
  setMessage(`❌ ${target} not found in the array`);
  setIsSearching(false);
  return -1; // Return -1 if not found
};