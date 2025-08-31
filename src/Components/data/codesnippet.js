export const codeSnippets = {
  linear: {
    c: `int linearSearch(int arr[], int n, int target) {
  for (int i = 0; i < n; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}`,

    cpp: `int linearSearch(vector<int>& arr, int target) {
  for (int i = 0; i < arr.size(); i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}`,

    java: `public static int linearSearch(int[] arr, int target) {
  for (int i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}`,

    python: `def linear_search(arr, target):
  for i in range(len(arr)):
    if arr[i] == target:
      return i
  return -1`,

    javascript: `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}`
  },
  
  binary: {
    c: `int binarySearch(int arr[], int n, int target) {
  int low = 0, high = n - 1;
  while (low <= high) {
    int mid = low + (high - low) / 2;
    if (arr[mid] == target) 
      return mid;
    else if (arr[mid] < target) 
      low = mid + 1;
    else 
      high = mid - 1;
  }
  return -1;
}`,

    cpp: `int binarySearch(vector<int>& arr, int target) {
  int low = 0, high = arr.size() - 1;
  while (low <= high) {
    int mid = low + (high - low) / 2;
    if (arr[mid] == target) 
      return mid;
    else if (arr[mid] < target) 
      low = mid + 1;
    else 
      high = mid - 1;
  }
  return -1;
}`,

    java: `public static int binarySearch(int[] arr, int target) {
  int low = 0, high = arr.length - 1;
  while (low <= high) {
    int mid = low + (high - low) / 2;
    if (arr[mid] == target) 
      return mid;
    else if (arr[mid] < target) 
      low = mid + 1;
    else 
      high = mid - 1;
  }
  return -1;
}`,

    python: `def binary_search(arr, target):
  low, high = 0, len(arr) - 1
  while low <= high:
    mid = (low + high) // 2
    if arr[mid] == target:
      return mid
    elif arr[mid] < target:
      low = mid + 1
    else:
      high = mid - 1
  return -1`,

    javascript: `function binarySearch(arr, target) {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) 
      return mid;
    else if (arr[mid] < target) 
      low = mid + 1;
    else 
      high = mid - 1;
  }
  return -1;
}`
  }
};