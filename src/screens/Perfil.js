import { View, Text} from 'react-native';
import Perfil from '../components/profile/perfil';

const categories = ['Climbing', 'Swimming', 'Painting'];

const PerfilScreen = () => {
    return (
        <View style={{ flex: 1 }}> 
            <Perfil categories={categories} />
        </View>
    );
};

export default PerfilScreen;
