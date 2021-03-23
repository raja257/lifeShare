import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { Item, Input, Form, Picker, Button, Alert ,Container } from "native-base";

export const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  return (
    <Container>
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
              <Input placeholder="  Enter Email Address" />
            </Item>
            <Item style={styles.Item} rounded>
              <Input placeholder="  Enter Password" />
            </Item>
            <View>
              <Button style={styles.Button}  onPress={() => navigation.navigate("Home")} danger>
                <Text style={styles.btn_text}> Login </Text>
              </Button>
              <View style={{display: 'flex' , flexDirection : 'row',justifyContent : 'center'}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("SignUpScreen")}
                >
                  <Text style={styles.alreadyHaveAccount}>
                    Don't Have Account?{"  "}/{"  "}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("SignUpScreen")}
                >
                  <Text style={styles.alreadyHaveAccount}>
                    Forget Password?{" "}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Form>
        </View>
      </View>
      <View style={styles.bottom}></View>
    </KeyboardAvoidingView>
    </Container>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "25%",
  },
  footer: {
    flex: 2,
    alignItems: "center",
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
    textAlign: "left",
    marginTop: 20,
    color: "#E6425E",
  },
  forgetPassword: {
    textAlign: "right",
    marginTop: 20,
    color: "#E6425E",
  },
});
