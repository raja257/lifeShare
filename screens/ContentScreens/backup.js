import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  CheckBox,
  Card,
  CardItem,
} from "native-base";
import { Text, Divider } from "react-native-elements";

const DonationScreen = () => {
  const [blood, setChecked] = useState({
    A: false,
    B: false,
    AB: false,
    O: false,
  });
  const pressOnce = () => {
    return alert("one");
  };

  const pressTwice = () => {
    return alert("two");
  };
  return (
    <Container style={styles.container}>
      <Content>
        <View style={styles.requestHeading}>
          <View style={styles.bloodGroupDetails}>
            <Text style={styles.type}>Please Pick Your Blood Type ?</Text>
            <Divider />
            <View style={styles.groups}>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text style={styles.groupType}>A Positive </Text>
                <CheckBox checked={true} onPress={pressOnce} />
              </View>
              <View
                style={{ display: "flex", flexDirection: "row", marginTop: 15 }}
              >
                <Text style={styles.groupType}>B Positive </Text>
                <CheckBox checked={true} onPress={pressOnce} />
              </View>
              <View
                style={{ display: "flex", flexDirection: "row", marginTop: 15 }}
              >
                <Text style={styles.groupType}>O Positive </Text>
                <CheckBox checked={true} onPress={pressOnce} />
              </View>
              <View
                style={{ display: "flex", flexDirection: "row", marginTop: 15 }}
              >
                <Text style={styles.groupType}>AB Positive</Text>
                <CheckBox checked={true} onPress={pressOnce} />
              </View>
            </View>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default DonationScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7bfbe",
    flex: 1,
  },
  bloodGroupDetails: {
    flex: 1,
    width: "80%",
    backgroundColor: "white",
    borderRadius: 25,
    paddingTop: 25,
    paddingBottom: 35,
  },
  requestHeading: {
    alignItems: "center",
    marginTop: 25,
  },
  type: {
    marginLeft: 15,
    marginBottom: 15,
    color: "#DE4839",
  },
  groups: {
    marginLeft: 15,
    marginTop : 15,
    color: "#DE4839",
  },

  heading: {
    textAlign: "center",
    color: "#DE4839",
    fontSize: 23,
    fontWeight: "bold",
  },
  Item: {
    width: "90%",
    height: 50,
    marginVertical: 10,
  },
});

{
  /* <Form>
            <Item style={styles.Item} fixedLabel>
              <Input placeholder="Username" />
            </Item>
            <Item style={styles.Item} fixedLabel >
              <Input placeholder="Username" />
            </Item>
          </Form> */
}
