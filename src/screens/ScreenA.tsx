import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { useNavigation } from '@react-navigation/native';

export function ScreenA() {
  const navigation = useNavigation();

  const CustomButton = ({ title, iconName, screenName }) => (
    <TouchableOpacity style={styles.customButton} onPress={() => navigation.navigate(screenName)}>
      <Icon name={iconName} size={50} color="black" />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Text style={styles.title}>Título da Página</Text>
        <Text style={styles.subtitle}>Esta é uma descrição da página.</Text>
      </View>
      <View style={styles.row}>
        <CustomButton title="Historico" iconName="history" screenName="screenB" />
        <CustomButton title="Relatorio" iconName="file-text-o" screenName="screenC" />
      </View>
      <View style={styles.row}>
        <CustomButton title="Conta" iconName="user" screenName="screenD" />
        <CustomButton title="Chat" iconName="comment-o" screenName="screenE" />
      </View>
      <View style={styles.row}>
        <CustomButton title="Notificacoes" iconName="bell" screenName="screenF" />
        <CustomButton title="Botão 6" onPress={() => {}} />
      </View>
      <View style={styles.row}>
        <CustomButton title="Botão 7" onPress={() => {}} />
        <CustomButton title="Botão 8" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContent: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  customButton: {
    backgroundColor: '#EFEFEF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    margin: 5,
    width: 162,
    height: 162,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});
