import { TimelineContent } from "../styles";
const TimelineItem = (props) => {
  return (
    <div className="timeline-item">
      <TimelineContent>
        <time>{props.data.date}</time>
        <p>{props.data.text}</p>
        <span />
      </TimelineContent>
    </div>
  );
};

export default TimelineItem;
