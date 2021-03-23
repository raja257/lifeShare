import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Item, Input, Form, Picker, Button ,Alert} from "native-base";

export const SignUpScreen = ({navigation}) => {
  const [name , setName] = useState()
  const [email , setemail] = useState()
  const [password , setpassword] = useState()
  const [phone , setphone] = useState()
  const [location , setlocation] = useState()
  return (

    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logo}>
          <Image source={require("../../images/logo_2.png")} />
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.login_input}>
          <Form style={styles.Item}>
            <Item style={styles.Item} rounded>
              <Input value={name}  onChangeText={(e) => setName(e.target.value) } placeholder="  Enter Full Name" />
            </Item>
            <Item style={styles.Item} rounded>
              <Input placeholder="  Enter Email Address" />
            </Item>
            <Item style={styles.Item} rounded>
              <Input placeholder="  Enter Password" />
            </Item>
            <Item style={styles.Item} rounded>
              <Input placeholder="  Enter Phone Number" />
            </Item>
            <Item style={styles.Item} rounded>
              <Input placeholder="  Location" />
            </Item>
            <View>
              <Button style={styles.Button} onPress={() => navigation.navigate("Home")} danger>
                <Text style={styles.btn_text}> Sign Up </Text>
              </Button>
              <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.alreadyHaveAccount}>
                  Already Have Account?{" "}
                </Text>
              </TouchableOpacity>
            </View>
          </Form>
        </View>
      </View>
      <View style={styles.bottom}></View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "25%",
  },
  footer: {
    flex: 3,
    alignItems: "center",
    marginTop: 25,
  },
  Item: {
    width: "90%",
    height: 50,
    marginVertical: 10,
  },
  bottom: {
    flex: 2,
  },
  reg: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#E83A59",
    textAlign: "center",
  },
  Button: {
    width: "100%",
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
  btn_text: {
    color: "#fff",
  },
  alreadyHaveAccount: {
    textAlign: "center",
    marginTop: 20,
    color: "#E6425E",
  },
});
