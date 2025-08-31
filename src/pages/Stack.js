import React , { useState } from 'react';;
import { stackOperations } from "../Components/algorithm/stackOperation";
import StackVisualizer from "../Components/StackVisualiser";
import StackControls from "../Components/StackControl";
import StackInfo from "../Components/StackInfo";
import ScrollAnimationWrapper from '../Components/UseScrollAnimation';

const Stack = () => {
  const [stack, setStack] = useState([]);
  const [isOperating, setIsOperating] = useState(false);
  const [message, setMessage] = useState('Welcome! Start stack operations');
  const [speed, setSpeed] = useState(500);
  const [operationCount, setOperationCount] = useState(0);
  const [peekValue, setPeekValue] = useState(null);

  const handlePush = async (value) => {
    await stackOperations.push(stack, setStack, value, speed, {
      setMessage,
      setIsOperating,
      setPeekValue
    });
    setOperationCount(prev => prev + 1);
  };

  const handlePop = async () => {
    await stackOperations.pop(stack, setStack, speed, {
      setMessage,
      setIsOperating,
      setPeekValue
    });
    setOperationCount(prev => prev + 1);
  };

  const handlePeek = async () => {
    await stackOperations.peek(stack, speed, {
      setMessage,
      setPeekValue
    });
    setOperationCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimationWrapper>
<h1 className="text-4xl font-bold text-center mb-8">
  <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_20px_rgba(16,185,129,0.6)] hover:drop-shadow-[0_0_30px_rgba(59,130,246,0.8)] transition-all duration-500">
     Stack Visualizer
  </span>
</h1>
</ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
        {/* Visualization at the TOP */}
        <StackVisualizer
          stack={stack}
          isOperating={isOperating}
          peekValue={peekValue}
        />
        </ScrollAnimationWrapper>
        {/* Controls in the MIDDLE */}
        <ScrollAnimationWrapper>
        <StackControls
          onPush={handlePush}
          onPop={handlePop}
          onPeek={handlePeek}
          isOperating={isOperating}
          speed={speed}
          setSpeed={setSpeed}
        />
        </ScrollAnimationWrapper>
        {/* Info at the BOTTOM */}
        <ScrollAnimationWrapper>
        <StackInfo
          message={message}
          operationCount={operationCount}
        />
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Stack;