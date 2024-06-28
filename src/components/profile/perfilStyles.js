import { StyleSheet } from "react-native";

export const perfilStyles = StyleSheet.create({
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
