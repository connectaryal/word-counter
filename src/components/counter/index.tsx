import useWordCount from "../hooks/useWordCount";
import TextArea from "../textarea";
import CounterStats from "./stats";

const Counter = () => {
  const { stats, handleKeyUp } = useWordCount();

  return (
    <div className="count-wrapper">
      <CounterStats stats={stats} />
      <TextArea handleKeyUp={handleKeyUp} />
    </div>
  )
}

export default Counter;