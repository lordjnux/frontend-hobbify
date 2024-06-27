import { StatusBar } from "expo-status-bar";
import { Button, TextInput,View, Text, StyleSheet,ScrollView,TouchableOpacity } from "react-native";
import { Formik } from 'formik';
import { AntDesign } from '@expo/vector-icons';
import validationLogin from "../helpers/validationLogin";
import React from "react";
import { loginUser, loginUserWithProvider } from "../helpers/petitions";

const Login = () => {


    const handleLogin = async (values) => {
        try {
            await loginUser(values);
        } catch (error) {
            console.error("Error trying to register:", error);
        }
    }

    const handleLogSM = async (provider) => {
        try {
            await loginUserWithProvider(provider);
        } catch (error) {
            console.error("Error trying to register:", error);
        }
    }

    return (
        <View style={styles.container}>
            <Formik
     initialValues={{ email:'',
     password:''}}
     validate={validationLogin}
     onSubmit={handleLogin}
   >
     {({ handleChange, handleBlur, handleSubmit, values,errors, touched }) => (
        <ScrollView>

       <View style={styles.form}>
        <Text style={[styles.text, styles.title]}>Welcome Back!</Text>
        <Text style={[styles.text, styles.description]}>Log in and keep having fun with your passions</Text>
            <View style={styles.formSection}>
                <Text style={styles.text}>Email</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    placeholder="mail@example.com"
                    value={values.email}
                />
                {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}
            </View>
            <View style={styles.formSection}>   
                <Text style={styles.text}>Password</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholder="***********"
                    secureTextEntry={true}
                />
                {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <Text style={styles.text}>
                    Not a member yet? {" "}
                        <TouchableOpacity onPress={() => console.log("Navigate to register screen")}>
                            <Text style={styles.linkText}>Register here</Text>
                        </TouchableOpacity>
                            </Text>
            <View style={styles.rrssContainer}>
                <Text style={styles.text}>Or sign up with</Text>
                <View style={styles.rrss}>
                   <TouchableOpacity onPress={()=> handleLogSM('google')}>
                        <AntDesign name="google" size={24} color="white" />
                   </TouchableOpacity>
                   <TouchableOpacity onPress={()=> handleLogSM('github')}>
                        <AntDesign name="github" size={24} color="white" />
                   </TouchableOpacity>
                   <TouchableOpacity onPress={()=> handleLogSM('twitter')}>
                        <AntDesign name="twitter" size={24} color="white" />
                   </TouchableOpacity>
                </View>

            </View>
       </View>
        </ScrollView>
     )}
   </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 60,
        backgroundColor: '#1D1E2C',
        marginVertical:80,
        marginHorizontal:20,
        borderRadius: 40,
    },
    form: {
        flex: 1,
        width: "100%",
    },
    formSection: {
        marginTop:20
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 15,
        marginTop: 10,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10
    },
    text: {
        color: 'white',
        fontSize: 15
    },
    title: {
        alignSelf: 'center',
        fontSize:25,
        marginBottom:6
    },
    description: {
        alignSelf: 'center',
        fontSize:20
    },
    button: {
        backgroundColor: '#7E78D2',
        marginTop:40,
        borderRadius: 10
    },
    buttonText: {
        color: 'white',
        alignSelf: 'center',
        padding: 15,
    },
    linkText: {
        textDecorationLine: 'underline',
        fontSize:15,
        color: '#7E78D2'
    },
    error: {
        color: 'red'
    },
    rrssContainer: {
        flex:1,
        alignItems: 'center',
        gap: 10,
        marginVertical: 50
    },
    rrss: {
        flex: 1,
        gap:15,
        flexDirection: 'row'
    }
})

export default Login;