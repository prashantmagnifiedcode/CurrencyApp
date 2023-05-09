import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { Calendar } from "react-native-calendars";

export default function Calendars() {
  return (
    <Calendar
      style={{
        borderRadius: 5,
        margin: 12,
        elevation: 5,
        borderWidth: 0,
      }}
      theme={{
        calendarBackground: "#1f98d6",
        dayTextColor: "#fff",
        textDisabledColor: "#444",
        monthTextColor: "#888",
      }}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
});
