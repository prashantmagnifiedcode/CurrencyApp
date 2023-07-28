import React from "react";
import {
    View,
    Text,  Dimensions,
 
  } from "react-native";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
  
const HearRateGraph = ({w,h,value}) => {
  return (
    <>
     <View>
  <Text style={{textAlign:"center",marginTop:3}}>Bezier Line Chart</Text>
  <LineChart
    data={{
      labels: [0,100,200,300,400,500,600,700],
      datasets: [
        {
          data: [
            value * 0,
            value * 100,
            value * 200,
            value * 300,
            value * 400,
            value * 500,
            value * 600,
            value * 700
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width -w} // from react-native
    height={h}
    // yAxisLabel="$"
    // yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "radial-gradient(at right center, rgb(56, 189, 248), rgb(49, 46, 129))",
      backgroundGradientTo: "white",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
      
    </>
  );
};
export default HearRateGraph;
