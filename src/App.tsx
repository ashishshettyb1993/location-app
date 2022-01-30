import { Button, MenuItem, TextField, Typography } from "@material-ui/core";
import classNames from "classnames";
import { cloneDeep, map, uniqBy } from "lodash";
import React, { useMemo, useState } from "react";
import "./App.css";
import css from "./App.module.scss";
import { IProperties } from "./components/types";
import tripdata from "./data/trips";
import { Map, Table } from "./ui-components/index";
import Styles from "./ui-components/TableHelper";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  bold: {
    fontWeight: 600
  }
})

function App() {
  const [selectedTrip, setSelectedTrip] = useState<number | undefined>();
  const [categotyType, setCategoryType] = useState("All");
  const classes = useStyles();

  const handleChange = (event: any) => {
    setCategoryType(event.target.value);
    setSelectedTrip(undefined);
  };

  const columns = useMemo(
    () => [
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
    ],
    []
  );

  const { tripsFiltSorted } = useMemo(() => {
    let clonedData = cloneDeep(tripdata);
    let filteredTrips =
      categotyType === "All"
        ? clonedData.features
        : clonedData.features.filter(
            (x) => x.properties.CATEGORY === categotyType
          );
    //sorting can be done by lodash methods as well as shown below
    // let tripsFiltSorted = orderBy(filteredTrips, ["properties.NAME"], ["asc"]);

    let tripsFiltSorted = filteredTrips.sort((a, b) =>
      a.properties.NAME_EN > b.properties.NAME_EN
        ? 1
        : b.properties.NAME_EN > a.properties.NAME_EN
        ? -1
        : 0
    );

    return { tripsFiltSorted };
  }, [categotyType]);

  const opts = useMemo(
    () =>
      tripdata.features.map((x) => {
        return {
          id: x.properties.ID,
          name: x.properties.NAME_EN,
          name_jp: x.properties.NAME_JP,
          address: x.properties.ADDRESS,
          category: x.properties.CATEGORY
        };
      }),
    []
  );

  if (!tripdata) {
    return null;
  }

  return (
    <div className={css.root}>
      <div className={css.container}>
        <Typography variant="h3" className={classes.bold} component="h2">
          Location Application
        </Typography>
        <div className={css.center}>
          <TextField
            placeholder={"Category"}
            variant="outlined"
            name="CategoryType"
            id="Category"
            select
            label="Category"
            value={categotyType}
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value={"All"}>All</MenuItem>
            {uniqBy(opts, "category").map((x: any) => (
              <MenuItem value={x.category}>{x.category}</MenuItem>
            ))}
          </TextField>
        </div>
        <div className={css.one}>
          <Map data={tripsFiltSorted} selectedTrip={selectedTrip}></Map>
        </div>
        <div className={css.two}>
          <Styles>
            <Table
              columns={columns}
              data={map(tripsFiltSorted, "properties") as IProperties[]}
              selectedTrip={selectedTrip}
              setSelectedTrip={setSelectedTrip}
            />
          </Styles>
        </div>
        {selectedTrip && (
          <div className={classNames(css.center, css.footer)}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => {
                var index = tripsFiltSorted
                  .map(function (x) {
                    return x.properties.ID;
                  })
                  .indexOf(selectedTrip);
                if (index > 0) {
                  setSelectedTrip(tripsFiltSorted[index - 1].properties.ID);
                }
              }}
            >
              PREVIOUS
            </Button>
            <Button
              variant="outlined"
              color="primary"
              style={{ marginLeft: "10px" }}
              onClick={() => {
                var index = tripsFiltSorted
                  .map(function (x) {
                    return x.properties.ID;
                  })
                  .indexOf(selectedTrip);
                if (index >= 0 && index < tripsFiltSorted.length - 1) {
                  setSelectedTrip(tripsFiltSorted[index + 1].properties.ID);
                }
              }}
            >
              NEXT
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
