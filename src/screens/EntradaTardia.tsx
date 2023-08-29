//Entrada Tardia
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';

const App = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Anderson Da Rosa', checked: false },
    { id: 2, name: 'Anderson Silva', checked: false },
    { id: 3, name: 'Anderson Mamão', checked: false },
    { id: 4, name: 'Anderson Hamilton', checked: false },
    { id: 5, name: 'Anderson Vieira', checked: false },
    { id: 6, name: 'Anderson Roberto Carlos', checked: false },
    { id: 7, name: 'Anderson Da Paz', checked: false },
    { id: 8, name: 'Anderson Leite', checked: false },
    // ... adicione mais alunos conforme necessário
  ]);

  const toggleCheck = (id) => {
    const updatedStudents = students.map((student) =>
      student.id === id ? { ...student, checked: !student.checked } : student
    );
    setStudents(updatedStudents);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={require('./senai.png')} style={styles.logo} />
        <Text style={styles.headerTitle}>Acesso Escolar</Text>
        <Text style={styles.headerSubtitle}>Sistema de entrada e saída</Text>
      </View>
      <View style={styles.attendanceBox}>
        <Text style={styles.attendanceBoxTitle}>3A</Text>
        <Text style={styles.attendanceBoxSubtitle}>Entrada tardia</Text>
        <View style={styles.separator} />
        <ScrollView contentContainerStyle={styles.studentList}>
          {students.map((student) => (
            <TouchableOpacity
              key={student.id}
              style={styles.studentRow}
              onPress={() => toggleCheck(student.id)}
            >
              <View style={styles.studentInfo}>
                <CheckBox
                  checked={student.checked}
                  onPress={() => toggleCheck(student.id)}
                  checkedColor="#007BFF" 
                  containerStyle={styles.checkboxContainer}
                />
                <Text
                  style={[
                    styles.studentName,
                    student.checked && styles.checkedStudentName,
                  ]}
                >
                  {student.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white', 
  },
  header: {
    alignItems: 'center',
    paddingTop: 60, 
    paddingBottom: 20,
  },
  logo: {
    width: 120,
    height: 90,
    resizeMode: 'contain',
    marginTop: -50,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333', 
    marginTop: -30,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666', 
  },
  attendanceBox: {
    backgroundColor: '#ebebeb',
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 30,
    marginTop: 20,
    marginBottom: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc', 
    marginVertical: 10,
  },
  attendanceBoxTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: '#333', 
  },
  attendanceBoxSubtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666', 
  },
  studentList: {
    marginTop: 10,
  },
  studentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  studentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxContainer: {
    marginRight: 10,
    padding: 0,
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  studentName: {
    fontSize: 16,
    color: '#333', 
  },
  checkedStudentName: {
    fontSize: 16,
    color: '#999',
    textDecorationLine: 'line-through',
  },
});

export default App;
