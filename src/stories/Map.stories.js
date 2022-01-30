import { Map } from "../ui-components/Map";
import tripdata from "../data/trips";

export default {
  title: "comp/Map",
  component: Map
};

const takeTop3 = tripdata.features.slice(0, 5);

const Template = args => <Map {...args} />;

export const Maps = Template.bind({});
Maps.args = {
  data: takeTop3,
  selectedTrip: undefined
};
