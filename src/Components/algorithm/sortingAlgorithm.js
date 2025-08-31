export const sortingAlgorithms = {
  bubbleSort: async (array, speed, updateState) => {
    const { setArray, setCurrentIndex, setComparingIndex, setMessage, setIsSorting } = updateState;
    let arr = [...array];
    setIsSorting(true);
    setMessage('Starting Bubble Sort...');

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        setCurrentIndex(j);
        setComparingIndex(j + 1);
        setMessage(`Comparing ${arr[j]} and ${arr[j + 1]}...`);
        await new Promise(resolve => setTimeout(resolve, speed));

        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          setMessage(`Swapped ${arr[j]} and ${arr[j + 1]}`);
          await new Promise(resolve => setTimeout(resolve, speed));
        }
      }
    }

    setMessage('✅ Array sorted successfully!');
    setIsSorting(false);
    setCurrentIndex(-1);
    setComparingIndex(-1);
  },

  selectionSort: async (array, speed, updateState) => {
    const { setArray, setCurrentIndex, setMinIndex, setMessage, setIsSorting } = updateState;
    let arr = [...array];
    setIsSorting(true);
    setMessage('Starting Selection Sort...');

    for (let i = 0; i < arr.length; i++) {
      let minIdx = i;
      setMinIndex(minIdx);

      for (let j = i + 1; j < arr.length; j++) {
        setCurrentIndex(j);
        setMessage(`Finding minimum element...`);
        await new Promise(resolve => setTimeout(resolve, speed/2));

        if (arr[j] < arr[minIdx]) {
          minIdx = j;
          setMinIndex(minIdx);
        }
      }

      if (minIdx !== i) {
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        setArray([...arr]);
        setMessage(`Swapped ${arr[i]} and ${arr[minIdx]}`);
        await new Promise(resolve => setTimeout(resolve, speed));
      }
    }

    setMessage('✅ Array sorted successfully!');
    setIsSorting(false);
    setCurrentIndex(-1);
    setMinIndex(-1);
  },

  insertionSort: async (array, speed, updateState) => {
    const { setArray, setCurrentIndex, setMessage, setIsSorting } = updateState;
    let arr = [...array];
    setIsSorting(true);
    setMessage('Starting Insertion Sort...');

    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      setCurrentIndex(i);

      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
        setArray([...arr]);
        setMessage(`Shifting elements...`);
        await new Promise(resolve => setTimeout(resolve, speed));
      }
      arr[j + 1] = key;
      setArray([...arr]);
      await new Promise(resolve => setTimeout(resolve, speed));
    }

    setMessage('✅ Array sorted successfully!');
    setIsSorting(false);
    setCurrentIndex(-1);
  },

  mergeSort: async (array, speed, updateState) => {
    const { setArray, setMessage, setIsSorting, setMergeState } = updateState;
    setIsSorting(true);
    setMessage('Starting Merge Sort...');

    const animateMerge = async (arr, start, mid, end, tempArray) => {
      setMergeState({ leftStart: start, leftEnd: mid, rightStart: mid + 1, rightEnd: end });
      setMessage(`Merging subarrays [${start}-${mid}] and [${mid + 1}-${end}]`);
      await new Promise(resolve => setTimeout(resolve, speed));
      
      for (let i = start; i <= end; i++) {
        setMergeState(prev => ({ ...prev, mergingIndex: i }));
        await new Promise(resolve => setTimeout(resolve, speed / 3));
      }
    };

    const merge = async (arr, start, mid, end) => {
      let temp = [];
      let i = start, j = mid + 1;

      await animateMerge(arr, start, mid, end, temp);

      while (i <= mid && j <= end) {
        if (arr[i] <= arr[j]) {
          temp.push(arr[i++]);
        } else {
          temp.push(arr[j++]);
        }
      }

      while (i <= mid) temp.push(arr[i++]);
      while (j <= end) temp.push(arr[j++]);

      for (let i = start; i <= end; i++) {
        arr[i] = temp[i - start];
        setArray([...arr]);
        await new Promise(resolve => setTimeout(resolve, speed / 2));
      }
    };

    const mergeSortHelper = async (arr, start, end) => {
      if (start >= end) return;

      const mid = Math.floor((start + end) / 2);
      
      setMessage(`Dividing: [${start}-${end}] into [${start}-${mid}] and [${mid + 1}-${end}]`);
      setMergeState({ dividing: true, leftStart: start, leftEnd: mid, rightStart: mid + 1, rightEnd: end });
      await new Promise(resolve => setTimeout(resolve, speed));

      await mergeSortHelper(arr, start, mid);
      await mergeSortHelper(arr, mid + 1, end);
      await merge(arr, start, mid, end);
    };

    let arr = [...array];
    await mergeSortHelper(arr, 0, arr.length - 1);
    
    setMessage('✅ Array sorted successfully with Merge Sort!');
    setIsSorting(false);
    setMergeState(null);
  },

  quickSort: async (array, speed, updateState) => {
    const { setArray, setMessage, setIsSorting, setQuickState } = updateState;
    setIsSorting(true);
    setMessage('Starting Quick Sort...');

    const partition = async (arr, low, high) => {
      const pivot = arr[high];
      let i = low - 1;

      setQuickState({ pivotIndex: high, currentPartition: low, comparingIndex: -1 });
      setMessage(`Selecting pivot: ${pivot} at index ${high}`);
      await new Promise(resolve => setTimeout(resolve, speed));

      for (let j = low; j < high; j++) {
        setQuickState({ pivotIndex: high, currentPartition: i + 1, comparingIndex: j });
        setMessage(`Comparing ${arr[j]} with pivot ${pivot}`);
        await new Promise(resolve => setTimeout(resolve, speed));

        if (arr[j] < pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
          setArray([...arr]);
          setMessage(`Swapped ${arr[i]} and ${arr[j]}`);
          await new Promise(resolve => setTimeout(resolve, speed));
        }
      }

      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      setArray([...arr]);
      setMessage(`Placed pivot ${pivot} at correct position ${i + 1}`);
      await new Promise(resolve => setTimeout(resolve, speed));

      return i + 1;
    };

    const quickSortHelper = async (arr, low, high) => {
      if (low < high) {
        setQuickState({ currentLow: low, currentHigh: high });
        setMessage(`Processing subarray [${low}-${high}]`);
        await new Promise(resolve => setTimeout(resolve, speed));

        const pi = await partition(arr, low, high);

        await quickSortHelper(arr, low, pi - 1);
        await quickSortHelper(arr, pi + 1, high);
      }
    };

    let arr = [...array];
    await quickSortHelper(arr, 0, arr.length - 1);
    
    setMessage('✅ Array sorted successfully with Quick Sort!');
    setIsSorting(false);
    setQuickState(null);
  }
};