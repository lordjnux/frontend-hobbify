import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import { useState } from "react";

const HobbyCards = ({emoji,name}) => {

    const [isPressed,setIsPressed] = useState(false)

    const handlePress = () => {
        setIsPressed(!isPressed)
    }
    
    const cardStyle = {
        ...styles.cardContainer,
        backgroundColor: isPressed ? '#7E78D2' : 'white',
    }

    return(
        <TouchableOpacity style={cardStyle} onPress={handlePress}>
                <Text style={styles.emoji}>{emoji}</Text>
                <Text>{name}</Text>
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
    },
    pressed: {
        backgroundColor: 'green'
    }
})

export default HobbyCards