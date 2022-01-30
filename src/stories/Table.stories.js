import { Table } from "../ui-components/Table";
import tripdata from "../data/trips";
import Styles from "../ui-components/TableHelper";

export default {
  title: "comp/Table",
  component: Table,
};

const columns = [
  {
    Header: "Name",
    columns: [
      {
        Header: "ID",
        accessor: "ID"
      },
      {
        Header: "NAME",
        accessor: "NAME_EN"
      }
    ]
  },
  {
    Header: "Info",
    columns: [
      {
        Header: "Name_JP",
        accessor: "NAME_JP"
      },
      {
        Header: "ADDRESS",
        accessor: "ADDRESS"
      }
    ]
  }
];

const takeTop3 = tripdata.features.slice(0, 5);

const Template = args =>
  <Styles>
    <Table {...args} />
  </Styles>;

export const Tables = Template.bind({});
Tables.args = {
  columns: columns,
  data: takeTop3.map(x => x.properties),
  selectedTrip: undefined
};
