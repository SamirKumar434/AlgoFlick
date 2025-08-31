export const queueOperations = {
  enqueue: async (queue, setQueue, value, speed, updateState) => {
    const { setMessage, setIsOperating } = updateState;
    
    setIsOperating(true);
    setMessage(`Enqueuing ${value}...`);
    await new Promise(resolve => setTimeout(resolve, speed));
    
    const newQueue = [...queue, value]; // Add to end (rear)
    setQueue(newQueue);
    setMessage(`✅ Enqueued ${value}. Queue size: ${newQueue.length}`);
    
    await new Promise(resolve => setTimeout(resolve, speed/2));
    setIsOperating(false);
  },

  dequeue: async (queue, setQueue, speed, updateState) => {
    const { setMessage, setIsOperating, setFrontHighlight } = updateState;
    
    if (queue.length === 0) {
      setMessage('❌ Queue is empty! Cannot dequeue.');
      return null;
    }
    
    setIsOperating(true);
    setFrontHighlight(true); // Highlight front element
    setMessage('Dequeuing from front...');
    await new Promise(resolve => setTimeout(resolve, speed));
    
    const dequeuedValue = queue[0]; // First element is front
    const newQueue = queue.slice(1); // Remove first element
    setQueue(newQueue);
    setFrontHighlight(false);
    setMessage(`✅ Dequeued ${dequeuedValue}. Queue size: ${newQueue.length}`);
    
    await new Promise(resolve => setTimeout(resolve, speed/2));
    setIsOperating(false);
    return dequeuedValue;
  },

  peek: async (queue, speed, updateState) => {
    const { setMessage, setFrontHighlight } = updateState;
    
    if (queue.length === 0) {
      setMessage('❌ Queue is empty!');
      setFrontHighlight(false);
      return null;
    }
    
    setFrontHighlight(true);
    const frontValue = queue[0]; // First element is front
    setMessage(` Peek Front: ${frontValue}`);
    await new Promise(resolve => setTimeout(resolve, speed));
    
    // Clear highlight after delay
    setTimeout(() => {
      setFrontHighlight(false);
    }, speed * 2);
    
    return frontValue;
  }
};