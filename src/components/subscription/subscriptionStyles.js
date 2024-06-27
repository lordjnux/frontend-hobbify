import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#800080',
    },
    purchaseButton: {
        backgroundColor: '#0000FF',
        borderWidth: 1,
        borderColor: '#FFFFFF',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        marginTop: 'auto',
    },
    purchaseButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles;
