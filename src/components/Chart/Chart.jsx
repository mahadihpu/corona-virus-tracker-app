import { Box } from "@material-ui/core";
import React from "react";
import { Bar } from "react-chartjs-2";

const Chart = (props) => {
  const { confirmed, recovered, deaths } = props.data;
  const style ={
      container : {
          width: '75%',
          marginTop: 20
      }
  }
  return (
    <Box style={style.container}>
      {confirmed ? (
        <Bar
          data={{
            labels: ["Infected", "Recovered", "Deaths"],
            datasets: [
              {
                label: "# of Votes",
                data: [confirmed.value, recovered.value, deaths.value],
                backgroundColor: [
                  "rgba(0, 0, 255, 0.5)",
                  "rgba(0, 255, 0, 0.5)",
                  "rgba(255, 0, 0, 0.5)",
                ],
              },
            ],
          }}
          options={{
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      ) : (
        ""
      )}
    </Box>
  );
};

export default Chart;
