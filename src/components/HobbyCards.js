import { View, Text, StyleSheet,TouchableOpacity } from "react-native";

const HobbyCards = ({emoji,name}) => {
    return(
        <TouchableOpacity style={styles.cardContainer}>
            <View>
                <Text style={styles.emoji}>{emoji}</Text>
                <Text>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 10,
        borderWidth: 5,
        borderColor: '#7E78D2',
        margin: 10,
        padding: 10,
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    emoji: {
        alignSelf: 'center'
    }
})

export default HobbyCards