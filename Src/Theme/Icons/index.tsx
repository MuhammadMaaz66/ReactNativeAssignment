import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';

interface IconProps {
    type?: 'Ionicons' | 'FontAwesome' | 'FontAwesome5' | 'FontAwesome6' | 'Feather' | 'MaterialCommunityIcons' |
    'AntDesign' | 'Entypo' | 'Foundation' | 'MaterialIcons' | 'Fontisto' | 'SimpleLineIcons' | 'Octicons';
    color?: string;
    size?: number;
    name?: string;
    light?: boolean;
    small?: boolean;
    CustomStyle?: object;
}

const Icon: React.FC<IconProps> = ({ type = 'Ionicons', color = '#cacfcf', size = 20, name = 'search', light, small, CustomStyle }) => {
    switch (type) {
        case 'Ionicons':
            return <Ionicons name={name} style={{ color: light ? '#cacfcf' : color, fontSize: small ? 16 : size, ...CustomStyle }} size={small ? 16 : size} color={light ? '#cacfcf' : color} />;
        case 'FontAwesome':
            return <FontAwesome name={name} style={{ color: light ? '#cacfcf' : color, fontSize: small ? 16 : size, ...CustomStyle }} size={small ? 16 : size} color={light ? '#cacfcf' : color} />;
        case 'FontAwesome5':
            return <FontAwesome5 name={name} style={{ color: light ? '#cacfcf' : color, fontSize: small ? 16 : size, ...CustomStyle }} size={small ? 16 : size} color={light ? '#cacfcf' : color} />;
        case 'FontAwesome6':
            return <FontAwesome6 name={name} style={{ color: light ? '#cacfcf' : color, fontSize: small ? 16 : size, ...CustomStyle }} size={small ? 16 : size} color={light ? '#cacfcf' : color} />;
        case 'Feather':
            return <Feather name={name} style={{ color: light ? '#cacfcf' : color, fontSize: small ? 16 : size, ...CustomStyle }} size={small ? 16 : size} color={light ? '#cacfcf' : color} />;
        case 'MaterialCommunityIcons':
            return <MaterialCommunityIcons name={name} style={{ color: light ? '#cacfcf' : color, fontSize: small ? 16 : size, ...CustomStyle }} size={small ? 16 : size} color={light ? '#cacfcf' : color} />;
        case 'AntDesign':
            return <AntDesign name={name} style={{ color: light ? '#cacfcf' : color, fontSize: small ? 16 : size, ...CustomStyle }} size={small ? 16 : size} color={light ? '#cacfcf' : color} />;
        case 'Entypo':
            return <Entypo name={name} style={{ color: light ? '#cacfcf' : color, fontSize: small ? 16 : size, ...CustomStyle }} size={small ? 16 : size} color={light ? '#cacfcf' : color} />;
        case 'Foundation':
            return <Foundation name={name} style={{ color: light ? '#cacfcf' : color, fontSize: small ? 16 : size, ...CustomStyle }} size={small ? 16 : size} color={light ? '#cacfcf' : color} />;
        case 'MaterialIcons':
            return <MaterialIcons name={name} style={{ color: light ? '#cacfcf' : color, fontSize: small ? 16 : size, ...CustomStyle }} size={small ? 16 : size} color={light ? '#cacfcf' : color} />;
        case 'Fontisto':
            return <Fontisto name={name} style={{ color: light ? '#cacfcf' : color, fontSize: small ? 16 : size, ...CustomStyle }} size={small ? 16 : size} color={light ? '#cacfcf' : color} />;
        case 'SimpleLineIcons':
            return <SimpleLineIcons name={name} style={{ color: light ? '#cacfcf' : color, fontSize: small ? 16 : size, ...CustomStyle }} size={small ? 16 : size} color={light ? '#cacfcf' : color} />;
        case 'Octicons':
            return <Octicons name={name} style={{ color: light ? '#cacfcf' : color, fontSize: small ? 16 : size, ...CustomStyle }} size={small ? 16 : size} color={light ? '#cacfcf' : color} />;
        default:
            return <Ionicons name={name} style={{ color: light ? '#cacfcf' : color, fontSize: small ? 16 : size, ...CustomStyle }} size={small ? 16 : size} color={light ? '#cacfcf' : color} />;
    }
};

export default Icon;
