import { StatusBar } from "expo-status-bar";
import { Button, TextInput,View, Text, StyleSheet,ScrollView,TouchableOpacity } from "react-native";
import { Formik } from 'formik';
import React from "react";

const Register = () => {
    return (
        <View style={styles.container}>
            <Formik
     initialValues={{ email: '',
     name:'',
     surname: '',
     username: '',
     password:'',
     confirmPassword: '' }}
     onSubmit={values => console.log(values)}
   >
     {({ handleChange, handleBlur, handleSubmit, values }) => (
        <ScrollView>

       <View style={styles.form}>
        <Text style={[styles.text, styles.title]}>Register</Text>
        <Text style={[styles.text, styles.description]}>Join now and start sharing your interests!</Text>
            <View style={styles.formSection}>
                <Text style={styles.text}>Name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    placeholder="John"
                    value={values.name}
                />
            </View>
            <View style={styles.formSection}>
                <Text style={styles.text}>Surname</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={handleChange('surname')}
                    onBlur={handleBlur('surname')}
                    placeholder="Smith"
                    value={values.surname}
                />
            </View>
            <View style={styles.formSection}>
                <Text style={styles.text}>Username</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    placeholder="your.username33"
                    value={values.username}
                />
            </View>
            <View style={styles.formSection}>
                <Text style={styles.text}>Email</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    placeholder="mail@example.com"
                    value={values.email}
                />
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
            </View>
            <View style={styles.formSection}>
                <Text style={styles.text}>Confirm password</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                    placeholder="***********"
                    secureTextEntry={true}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
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
        paddingVertical: 70,
        backgroundColor: '#1D1E2C',
        marginVertical:50,
        marginHorizontal:20,
        borderRadius: 10,
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
        fontSize: 16
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
    }
})

export default Register;