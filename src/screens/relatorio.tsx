/* import React from 'react';
import { View, StyleSheet, Button, Text} from 'react-native';
import { useRoute } from '@react-navigation/native';

import { useNavigation } from '@react-navigation/native';

type ParamsProps = {
    name: string
}

export function ScreenC() {
    
    const route = useRoute();
    const { name } = route.params as ParamsProps;
    
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('screenA')
    }
  
    return (
    <View style={styles.container}>
        <Text style={styles.text}>
            { name }
        </Text>
        <Button
            title="Voltar para Tela A"
            onPress={openScreen}
            color="#fff"
        />
        <Button
            title="Voltar"
            onPress={() => navigation.goBack()}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center"
    },
    text:{
        color: "#fff",
    }
}) */

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export function ScreenC() {
    const navigation = useNavigation();

    const openScreen = () => {
        // Implemente a função para navegar para a tela desejada
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}> Relatórios</Text>
            </View>
            
            {/* Adicione os blocos retangulares com texto acima */}
            <View style={styles.rectangle}>
                <Text style={styles.rectangleText}>Dia 29/08</Text>
            </View>
            <View style={styles.rectangle}>
                <Text style={styles.rectangleText}>Dia 30/09</Text>
            </View>
            <View style={styles.rectangle}>
                <Text style={styles.rectangleText}>Dia 31/09</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', // Leva os elementos ao topo
        alignItems: 'center',
        backgroundColor: 'white',
    },
    headerContainer: {
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    rectangle: {
        width: 354,
        height: 71,
        backgroundColor: '#EFEFEF',
        marginVertical: 10,
    },
    rectangleText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        position: 'absolute', // Posiciona o texto absolutamente dentro do retângulo
        top: -20, // Posiciona o texto acima do retângulo
        left: 10, // Espaçamento à esquerda do retângulo
    },
});