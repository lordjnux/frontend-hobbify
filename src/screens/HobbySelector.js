
import { Button, TextInput,View, Text, StyleSheet,ScrollView,TouchableOpacity } from "react-native";

const HobbySelector = () => {
    return(
        <View>
            <View>
                <Text>Choose Your Hobbies!</Text>
                <Text>You can select up to three hobbies. </Text>
                <Text>Would you like to choose more? Upgrade to our premium plan here</Text>
            </View>
            <View>
            </View>
            <View>
                <TouchableOpacity onPress={() => console.log("Navigate to feed screen")}>
                        <Text style={styles.linkText}>Go to Feed</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}