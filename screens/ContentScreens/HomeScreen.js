import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
// import { SearchBar } from 'react-native-elements';
import { SwipeRow, Button, Icon, Input, } from "native-base";
import SearchBarExample from "../../components/SearchBar";

const DATA = [
  {
    name: "jhon",
    status: "Donated",
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    description: "blood needed for the patient urgent requires",
    title: "Blood needed for saving lifes",
    location: "Abbottabad",
    avatar: "https://i.pravatar.cc/300",
    bloodGroup: "A +",
    date: 12,
  },
  {
    name: "jhon",
    status: "NotDonated",
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    description: "blood needed for the patient urgent requires",
    title: "Blood needed for saving lifes",
    location: "Abbottabad",
    avatar: "https://i.pravatar.cc/300",
    bloodGroup: "B +",
    date: 12,
  },
  {
    name: "jhon",
    status: "NotDonated",
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    description: "blood needed for the patient urgent requires",
    title: "Blood needed for saving lifes",
    location: "havelian",
    bloodGroup: "AB +",
    avatar: "https://i.pravatar.cc/300",
    date: 12,
  },
  {
    name: "jhon",
    status: "Donated",
    id: "58694a0f-3da1-471f-bd96-1471e29d72",
    description: "blood needed for the patient urgent requires",
    title: "Blood needed for saving lifes",
    location: "Abbottabad",
    bloodGroup: "O +",
    avatar: "https://i.pravatar.cc/300",
    date: 12,
  },
  {
    name: "jhon",
    status: "NotDonated",
    id: "58694a0f-3da1-471f-bd96-1571e29d72",
    description: "blood needed for the patient urgent requires",
    title: "Blood needed for saving lifes",
    location: "Abbottabad",
    bloodGroup: "A -",
    avatar: "https://i.pravatar.cc/300",
    date: 12,
  },
  {
    name: "jhon",
    status: "NotDonated",
    id: "58694a0f-3da1-471f-bd96-1451e29d72",
    description: "blood needed for the patient urgent requires",
    title: "Blood needed for saving lifes",
    location: "Abbottabad",
    bloodGroup: "B -",
    avatar: "https://i.pravatar.cc/300",
    date: 12,
  },
  {
    name: "jhon",
    status: "GotDonor",
    id: "58694a0f-3da1-471f-bd96-455719d72",
    description: "blood needed for the patient urgent requires",
    title: "Blood needed for saving lifes",
    location: "Abbottabad",
    bloodGroup: "AB -",
    avatar: "https://i.pravatar.cc/300",
    date: 12,
  },
  {
    name: "jhon",
    status: "Donated",
    id: "58694a0f-3da1-471f-bd96-145571d72",
    title: "Blood needed for saving lifes",
    location: "Abbottabad",
    bloodGroup: "O -",
    avatar: "https://i.pravatar.cc/300",
    date: 12,
  },
];

const AVATAR_SIZE = 70;
const SPACING = 20;

const RenderItem = ({ navigation, title }) => {
  return (
    <View style={styles.item}>
      <View style={styles.details}>
        <Image
          source={{ uri: title.avatar }}
          style={{
            width: AVATAR_SIZE,
            height: AVATAR_SIZE,
            borderRadius: AVATAR_SIZE,
            marginRight: 25,
          }}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title.title}</Text>
          <Text style={styles.bloodRequest}>
            Blood Request for {title.bloodGroup}
          </Text>
          <View>
            <Text style={styles.location}>
              <Text style={styles.locationMain}>Location : </Text>
              {title.location}
            </Text>
            <Text
              style={
                title.status === "NotDonated"
                  ? styles.statusOpen
                  : title.status === "Donated"
                  ? styles.statusClosed
                  : title.status === "GotDonor"
                  ? styles.statusDonorGoted
                  : null
              }
            >
              <Text style={styles.locationMain}>Status : </Text>
              {title.status === "NotDonated"
                ? "Looking for Donor"
                : title.status === "Donated"
                ? "Donated"
                : title.status === "GotDonor"
                ? "Got the Donor"
                : title.status}
            </Text>
          </View>
          <View style={styles.cardFooter}>
            <TouchableOpacity
              style={{
                backgroundColor: "#ff2744",
                padding: 10,
                borderRadius: 10,
                marginTop: 15,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 12, fontWeight: "bold" }}>
                Donate
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#ff2744",
                padding: 10,
                borderRadius: 10,
                marginTop: 15,
              }}
              onPress={() =>
                navigation.navigate("Details", {
                  request: title,
                })
              }
            >
              <Text style={{ color: "#fff", fontSize: 12, fontWeight: "bold" }}>
                See details
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <RenderItem navigation={navigation} title={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* <View>
        
      </View> */}
      <SearchBarExample Data={DATA} />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 16,
  },
  detailsContainer: {
    justifyContent: "flex-start",
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
  },
  description: {
    fontSize: 15,
    fontWeight: "bold",
  },
  details: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  description: {
    fontSize: 13,
    opacity: 0.7,
    marginTop: 5,
  },
  bloodRequest: {
    fontSize: 13,
    opacity: 0.7,
    marginTop: 5,
    color: "#DE4839",
  },
  location: {
    fontSize: 13,
    opacity: 0.7,
    marginTop: 5,
    color: "#000",
  },
  locationMain: {
    fontSize: 13,
    opacity: 0.7,
    marginTop: 5,
    color: "#000",
    fontWeight: "bold",
  },
  statusOpen: {
    fontSize: 13,
    opacity: 0.7,
    marginTop: 5,
    color: "#22CB5C",
    fontWeight: "bold",
  },
  statusClosed: {
    fontSize: 13,
    opacity: 0.7,
    marginTop: 5,
    color: "#DE4839",
    fontWeight: "bold",
  },
  statusDonorGoted: {
    fontSize: 13,
    opacity: 0.7,
    marginTop: 5,
    color: "#F4BE2C",
    fontWeight: "bold",
  },
  cardFooter: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default HomeScreen;
