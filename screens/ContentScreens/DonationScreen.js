import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import {
  Container,
  Content,
  Form,
  Item,
  Label,
  CheckBox,
  Card,
  CardItem,
  Button,
  Text,
  Textarea,
  Input,
} from "native-base";
// import { Text, Divider, Header} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
const DonationScreen = (props) => {
  const [bloodGroup, setBloodGroup] = useState("");
  const [description, setDescription] = useState("");
  const [fristName, setFristName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  
  const handleDescription = (description) => {
    setDescription(description);
  };

  const handleFirstName = (firstName) => {
    setFristName(firstName);
  };
  const handleLastName = (lastName) => {
    setLastName(lastName);
  };

  const handleAddress = (address) => {
    setAddress(address);
  };

  const handleSubmit = () => {
    fetch('http://localhost:5555/api/post/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bloodType: bloodGroup,
        description: description,
        fistName: fristName,
        lastName: lastName,
        address:address,
      }),
    });
   
  };






  // axios.post('http://localhost:5555/api/post/create' , {
    //   bloodType: bloodGroup,
    //   description: description,
    //   fistName: fristName,
    //   lastName: lastName,
    //   address:address,
    // })
    // .then(res => {
    //   console.log(res);
    //   props.nagation.navigate('LifeShare')
    // })
    // .catch(err => { console.log(err);})

  
  return (
    <Container style={styles.container}>
      <Content>
        <View style={styles.header}>
        <Text style={styles.AddressDetails}>
            Request Blood
          </Text>
          <Text style={styles.AddressDetails}>
            What kind of blood required ?
          </Text>
        </View>
        <View style={styles.bloodGroups}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              bordered={
                bloodGroup === 'A_Positive' ? true : false
              }
              danger
              style={styles.buttons}
              onPress={() => setBloodGroup("A_Positive")}
            >
              <Text style={styles.groupType}>A +</Text>
            </Button>
            <Button
              bordered={
                bloodGroup === 'A_Negative' ? true : false
              }
              danger
              style={styles.buttons}
              onPress={() => setBloodGroup("A_Negative")}
            >
              <Text style={styles.groupType}>A -</Text>
            </Button>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <Button
                bordered={
                  bloodGroup === 'B_Positive' ? true : false
                }
                danger
                style={styles.buttons}
                onPress={() => setBloodGroup("B_Positive")}
              >
                <Text style={styles.groupType}>B +</Text>
              </Button>
            </TouchableOpacity>

            <Button
              bordered={
                bloodGroup === 'B_Negative' ? true : false
              }
              danger
              style={styles.buttons}
              onPress={() => setBloodGroup("B_Negative")}
            >
              <Text style={styles.groupType}>B -</Text>
            </Button>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              bordered={
                bloodGroup === 'O_Positive' ? true : false
              }
              danger
              style={styles.buttons}
              onPress={() => setBloodGroup("O_Positive")}
            >
              <Text style={styles.groupType}>O +</Text>
            </Button>
            <Button
              bordered={
                bloodGroup === 'O_Negative' ? true : false
              }
              danger
              style={styles.buttons}
              onPress={() => setBloodGroup("O_Negative")}
            >
              <Text style={styles.groupType}>O -</Text>
            </Button>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              bordered={
                bloodGroup === 'AB_Positive' ? true : false
              }
              danger
              style={styles.buttons}
              onPress={() => setBloodGroup("AB_Positive")}
            >
              <Text style={styles.groupType}>AB +</Text>
            </Button>
            <Button
              bordered={
                bloodGroup === 'AB_Negative' ? true : false
              }
              danger
              style={styles.buttons}
              onPress={() => setBloodGroup("AB_Negative")}
            >
              <Text style={styles.groupType}>AB -</Text>
            </Button>
          </View>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>
            Tell us about your patient condition.
          </Text>
          <Textarea
            style={styles.textArea}
            value={description}
            onChangeText={(e) => handleDescription(e)}
            rowSpan={5}
            bordered
            placeholder="Describe the patient condition"
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.PatientDetails}>Patient Details</Text>
          <Item style={styles.detailsContainer} rounded>
            <Input style={styles.Namedetails} value={fristName} onChangeText={(e) => handleFirstName(e)} placeholder="Enter First Name" />
          </Item>
          <Item style={styles.detailsContainer} rounded>
            <Input style={styles.Namedetails} value={lastName} onChangeText={(e) => handleLastName(e)} placeholder="Enter Last Name" />
          </Item>
        </View>
        <View style={styles.address_details}>
          <Text style={styles.AddressDetails}>
            Address Details
          </Text>
             <Textarea
                style={styles.textArea}
                value={address}
                onChangeText={(e) => handleAddress(e)}
                rowSpan={3}
                bordered
                placeholder="Write the location of the patient"
              />
        </View>
        <View style={styles.submit}> 
        <View>
              <Button onPress={handleSubmit}  danger>
                 <Text>Post Request</Text>
              </Button>
          </View>
        </View>
       
        
       
      </Content>
    </Container>
  );
};

export default DonationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    fontFamily: "sans-serif-medium",
    fontWeight: "900",
    fontSize: 25,
    textAlign: "center",
    lineHeight: 40,
  },
  bloodGroups: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    marginTop: 15,
    margin: 5,
    padding: 25,
    height: 50,
    width: 140,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  groupType: {
    fontSize: 20,
  },
  description: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  textArea: {
    width: "90%",
    padding: 25,
    paddingLeft : 15,
    borderRadius: 25,
  },
  descriptionText: {
    marginTop: 35,
    marginBottom: 25,
    color: "#B4161B",
    fontSize: 16,
    fontWeight: "bold",
  },
  PatientDetails: {
    color: "#B4161B",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 15,
  },
  details: {
    marginTop: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  Namedetails: {
    width: 250,
    minWidth: "60%",
    maxWidth: "90%",
  },
  detailsContainer: {
    marginTop: 25,
    padding: 5,
  },
  textAreaContainer: {
    padding: 10,
    marginBottom: 10,
  },
  AddressDetails : {
    color: "#B4161B",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom : 15,
  },
  address_details: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginBottom: 25
  },
  RegionContainer : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  Region : {
    color: "#B4161B",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom : 15,
  },
 
  Uploadbuttons: {
    marginTop: 15,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  submit : {
    alignItems: "center",
    justifyContent: "center",
    marginBottom : 15,

  }
});
