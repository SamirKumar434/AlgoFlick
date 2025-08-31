export const binarySearch = async (array, target, speed, updateState) => {
  const { setCurrentIndex, setMessage, setIsSearching, setLow, setHigh, setMid } = updateState;
  
  // Validate if array is sorted
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i-1]) {
      setMessage('❌ Array must be sorted for binary search!');
      setIsSearching(false);
      return -1;
    }
  }
  
  setIsSearching(true);
  setMessage('Starting binary search (array must be sorted)...');
  
  let low = 0;
  let high = array.length - 1;
  setLow(low);
  setHigh(high);
  
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    setMid(mid);
    setCurrentIndex(mid);
    
    setMessage(`Checking mid index ${mid} (value: ${array[mid]})...`);
    await new Promise(resolve => setTimeout(resolve, speed));
    
    if (array[mid] === target) {
      setMessage(`🎉 Found ${target} at index ${mid}!`);
      setIsSearching(false);
      return mid;
    } else if (array[mid] < target) {
      setMessage(`Value ${array[mid]} < ${target}, searching right half...`);
      low = mid + 1;
      setLow(low);
    } else {
      setMessage(`Value ${array[mid]} > ${target}, searching left half...`);
      high = mid - 1;
      setHigh(high);
    }
    
    await new Promise(resolve => setTimeout(resolve, speed / 2));
  }
  
  setMessage(`❌ ${target} not found in the array`);
  setIsSearching(false);
  return -1;
};