import React, { useState } from "react";
import { Button, Overlay } from "react-native-elements";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Input, Item, Textarea } from "native-base";
import DatePicker from "react-native-datepicker";

export const BloodRequest = () => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const [date, setDate] = useState("2016-05-15");
  console.log(date);
  return (
    <View>
      <TouchableOpacity style={styles.buttons} onPress={toggleOverlay}>
        <Text style={styles.sendRequest}>Send Donation Request</Text>
      </TouchableOpacity>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <View style={styles.main}>
          <View style={styles.donation_Heading}>
            <Text style={styles.donationHeading_FONT}>
              Send Donation Request
            </Text>
          </View>
          <Item>
            <Input style={styles.input} placeholder="Enter Donor Name" />
          </Item>
          <Textarea
            style={styles.textArea}
            rowSpan={5}
            bordered
            placeholder="Tell Requester About Your Self"
          />
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                padding: 10,
                color: "#000",
                opacity: 0.4,
                fontWeight: "bold",
              }}
            >
              Delivery Time{" "}
            </Text>
            <DatePicker
              style={{ width: 200 }}
              date={date.date}
              value={date}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate="2016-05-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                },
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => {
                setDate({ date: date });
              }}
            />
          </View>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "#ff2744",
                padding: 10,
                borderRadius: 10,
                marginTop: 25,
              }}
              onPress={() => toggleOverlay()}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 12,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Send Request
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: 300,
    paddingBottom: 50,
  },
  buttons: {
    backgroundColor: "#ff2744",
    padding: 10,
    borderRadius: 10,
  },
  sendRequest: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  donation_Heading: {
    alignItems: "center",
    marginTop: 25,
    marginBottom: 25,
  },
  donationHeading_FONT: {
    color: "#000",
    opacity: 0.4,
    fontWeight: "bold",
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    padding: 15,
    padding: 15,
    // borderColor: "#ff2744",
    borderRadius: 5,
  },
  textArea: {
    marginTop: 10,
    padding: 10,
    // borderColor: "#ff2744",
    borderRadius: 5,
    borderWidth: 1,

  },
});
