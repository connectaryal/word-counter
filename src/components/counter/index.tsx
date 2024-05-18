import TextArea from "../textarea";
import CounterStats from "./stats";

const Counter = () => {
  return (
    <div className="count-wrapper">
      <CounterStats />
      <TextArea />
    </div>
  )
}

export default Counter;