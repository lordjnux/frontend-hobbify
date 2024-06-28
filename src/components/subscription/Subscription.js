import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SubscriptionCard from '../subscriptionCard/SubscriptionCard';
import styles from './subscriptionStyles';

const Subscription = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);

    const subscriptions = [
        { type: 'Yearly', price: '$99.99', description: 'Best value for long term use.' },
        { type: '3 Months', price: '$29.99', description: 'Good value for short term use.' },
        { type: '1 Month', price: '$9.99', description: 'Great for trying out the service.' },
    ];

    const handleSelectPlan = (index) => {
        setSelectedPlan(index);
    };

    const handlePurchase = () => {
        if (selectedPlan !== null) {
            // Handle the purchase logic here
            console.log(`Purchased: ${subscriptions[selectedPlan].type}`);
        } else {
            alert('Please select a subscription plan.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Choose Your Plan</Text>
            {subscriptions.map((plan, index) => (
                <SubscriptionCard
                    key={index}
                    type={plan.type}
                    price={plan.price}
                    description={plan.description}
                    selected={selectedPlan === index}
                    onSelect={() => handleSelectPlan(index)}
                />
            ))}
            <TouchableOpacity style={styles.purchaseButton} onPress={handlePurchase}>
                <Text style={styles.purchaseButtonText}>Purchase</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Subscription;
