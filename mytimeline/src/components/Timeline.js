import timelineData from "../data";
import TimelineItem from "./TimelineItem";
import { TimelineContainer } from "../styles";

const Timeline = () => {
  const DataList = timelineData.map((data) => {
    return <TimelineItem key={data.id} data={data} />;
  });
  return <TimelineContainer> {DataList}</TimelineContainer>;
};

export default Timeline;
