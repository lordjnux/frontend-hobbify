import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Perfil = () => {
    const categories = ['Climbing', 'Swimming', 'Painting']; // Example categories

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Image
                    source={{ uri: 'https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg' }} // Replace with the URL of the profile picture
                    style={styles.profileImage}
                />
                <View style={styles.headerTextContainer}>
                    <Text style={styles.nameText}>John Doe</Text>
                    <Text style={styles.infoText}>Email: xxxxxx</Text>
                </View>
            </View>
            
            {/* Information */}
            <View style={styles.informationContainer}>
                <Text style={styles.infoText}>ABOUT ME</Text>
                <View style={styles.aboutMeCard}>
                    <Text style={styles.aboutMeText}>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </Text>
                </View>
                <View style={styles.tagsContainer}>
                    <Text style={styles.infoText}>Categories:</Text>
                    <View style={styles.tags}>
                        {categories.map((category, index) => (
                            <View key={index} style={styles.tag}>
                                <Text style={styles.tagText}>{category}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
            
            {/* Contact and Edit Profile Buttons */}
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={[styles.button, styles.contactButton]}>
                    <Text style={styles.buttonText}>Contactar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.editButton]}>
                    <Text style={styles.buttonText}>Edit Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 15,
    },
    headerTextContainer: {
        flex: 1,
    },
    nameText: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 5,
    },
    infoText: {
        color: '#ccc',
        fontSize: 14,
    },
    informationContainer: {
        marginBottom: 20,
    },
    aboutMeCard: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
    },
    aboutMeText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'justify',
    },
    tagsContainer: {
        marginBottom: 20,
    },
    tags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
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
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    button: {
        flex: 1,
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contactButton: {
        backgroundColor: '#1778f2', // Facebook blue color
        marginRight: 10,
    },
    editButton: {
        backgroundColor: '#4caf50', // Green color for edit button
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Perfil;
