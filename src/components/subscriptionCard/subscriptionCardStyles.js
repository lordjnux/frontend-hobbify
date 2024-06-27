import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#800080',
        borderRadius: 10,
        padding: 20,
        marginVertical: 10,
        backgroundColor: '#FFFFFF',
    },
    selectedCard: {
        backgroundColor: '#D8BFD8',
    },
    type: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
    },
});

export default styles;
