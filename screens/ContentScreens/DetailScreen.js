import React from "react";
import { StyleSheet, View ,TouchableOpacity} from "react-native";
import { Container, Content, Card, CardItem, Text } from "native-base";
import { BloodRequest } from "../../components/BloodRequest";

const DetailScreen = ({ route, navigation }) => {
  const { request } = route.params;
  return (
    <Container style={styles.container}>
      <Content padder>
        {/* <Card> */}
        <CardItem style={styles.details}>
          <View style={{ display: "flex", flexDirection: "column" }}>
            <Text style={styles.details_headings}>Patient Name</Text>
            <Text>{request.name}</Text>
          </View>
        </CardItem>
        <CardItem>
          <View>
            <Text style={styles.details_headings}>Location</Text>
            <Text>{request.location}</Text>
          </View>
        </CardItem>
        <CardItem>
          <View>
            <Text style={styles.details_headings}>Blood Type</Text>
            <Text>Blood Request for {request.bloodGroup}</Text>
          </View>
        </CardItem>
        <CardItem>
          <View>
            <Text style={styles.details_headings}>
              Note on patient condition
            </Text>
            <Text>{request.description}</Text>
          </View>
        </CardItem>
        <CardItem style={{marginTop:29}}>
          <View style={styles.contact}>
          <BloodRequest />
          </View>
          
        </CardItem>
        <CardItem>
          <View style={styles.contact}>
          <TouchableOpacity
             style={{
              backgroundColor: "#ff2744",
              padding: 10,
              borderRadius: 10,
              
            }}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={{ color: "#fff", fontSize: 12,fontWeight : "bold"  , textAlign : "center" }}>Go Back</Text>
            </TouchableOpacity>
          </View>
          
        </CardItem>
        {/* </Card> */}
      </Content>
    </Container>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  details: {
    flex: 1,
  },
  details_headings: {
    color: "#000",
    opacity: 0.4,
    fontWeight: "bold",
  },
  contact: {
    flex : 1,
    textAlign: "center",
  },
  contact_Button: {
    backgroundColor: "#ff2744",
  },
});
