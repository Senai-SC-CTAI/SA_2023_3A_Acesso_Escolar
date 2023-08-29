import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';

const AttendanceRow = ({ day, professor, sala }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.cell}>{day}</Text>
      <Text style={styles.cell}>{professor}</Text>
      <Text style={styles.cell}>{sala}</Text>
    </View>
  );
};

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Sample attendance data
  const attendanceData = [
    { day: '21/08', professor: 'Jackson', sala: 'F12' },
    { day: '21/08', professor: 'Bruno', sala: 'G23' },
    { day: '22/08', professor: 'Jackson', sala: 'G25' },
    { day: '22/08', professor: 'Bruno', sala: 'D21' },
    { day: '23/08', professor: 'Luciano', sala: 'G23' },
    { day: '23/08', professor: 'Tairine', sala: 'D22' },
    { day: '24/08', professor: 'Lucas', sala: 'G12' },
    { day: '24/08', professor: 'Carla', sala: 'E17' },
    { day: '25/08', professor: 'Mariana', sala: 'H09' },
  ];

  return (
    <View style={styles.appContainer}>
      <Text style={styles.header}>ÁREA DO ALUNO</Text>
      <Text style={styles.title}>Histórico de presença</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Procurar dia específico"
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
        />
      </View>
      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={styles.columnHeader}>Dia</Text>
          <Text style={styles.columnHeader}>Professor</Text>
          <Text style={styles.columnHeader}>Sala</Text>
        </View>
        <FlatList
          data={attendanceData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <AttendanceRow day={item.day} professor={item.professor} sala={item.sala} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: 30,
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: '100',
    marginBottom: 45,
    textAlign: 'center',
  },
  title: {
    fontSize: 28,
    marginBottom: 25,
    textAlign: 'center',
  },
  searchContainer: {
    alignItems: 'center',
    elevation: 5, // Adicione esta propriedade para sombra no Android
    shadowColor: 'black', // Adicione estas propriedades para sombra no iOS
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  searchInput: {
    backgroundColor: 'white',
    height: 30,
    width: '70%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  tableContainer: {
    marginTop: 2,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  columnHeader: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
  },
  cell: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default App;
