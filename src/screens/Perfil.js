import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Perfil = () => {
    const categories = ['Climbing', 'Swimming', 'Painting']; // Example categories

    return (
        <View style={styles.container}>
            {/* Primer Bloque */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Profile</Text>
                <Image
                    source={{ uri: 'https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg' }} // Reemplaza con la URL de la foto de perfil
                    style={styles.profileImage}
                />
                <Text style={styles.nameText}>John Doe</Text>
            </View>
            
            {/* Segundo Bloque */}
            <View style={styles.informationContainer}>
                <Text style={styles.infoText}>Email: xxxxxx</Text>
                <View style={styles.aboutMeCard}>
                    <Text style={styles.aboutMeText}>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </Text>
                </View>
                <Text style={styles.infoText}>Categories:</Text>
                <View style={styles.tagsContainer}>
                    {categories.map((category, index) => (
                        <View key={index} style={styles.tag}>
                            <Text style={styles.tagText}>{category}</Text>
                        </View>
                    ))}
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Contactar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 50,
        paddingBottom: 20,
    },
    header: {
        alignItems: 'center',
    },
    headerText: {
        color: '#fff',
        fontSize: 24,
        marginBottom: 10,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    nameText: {
        color: '#fff',
        fontSize: 18,
    },
    informationContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    infoText: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 10,
    },
    aboutMeCard: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 10,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    aboutMeText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'justify',
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 10,
    },
    tag: {
        backgroundColor: '#3299ab',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
        margin: 5,
    },
    tagText: {
        color: '#fff',
        fontSize: 14,
    },
    button: {
        backgroundColor: '#9393f5',
        padding: 15,
        borderRadius: 5,
        marginVertical: 5,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Perfil;
