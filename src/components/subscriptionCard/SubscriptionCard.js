import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './subscriptionCardStyles';

const SubscriptionCard = ({ type, price, description, selected, onSelect }) => {
    return (
        <TouchableOpacity onPress={onSelect}>
            <View style={[styles.card, selected && styles.selectedCard]}>
                <Text style={styles.type}>{type}</Text>
                <Text style={styles.price}>{price}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default SubscriptionCard;
