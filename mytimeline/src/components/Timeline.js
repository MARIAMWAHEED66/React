import timelineData from "../data";
import TimelineItem from "./Timelineitem";

const Timeline = () =>{
return (
    <div className="....">
      {timelineData.map((data, id) => (
        <TimelineItem data={data} key={id} />
      ))}};
    </div>
  );

export default Timeline;
