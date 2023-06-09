import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button} from 'react-native';
import {useState} from 'react'; // Definición de variables de estado (state)

let estudiantes =[]

export default function App() {
  const [id, setId] = useState('')
  const [nombre, setNombre] = useState('')
  const [asignatura, setAsignatura] = useState('')
  const [notaUno, setnotaUno] = useState('')
  const [notaDos, setnotaDos] = useState('')
  const [notaTres, setnotaTres] = useState('')
  const [definitiva, setDefinitiva] = useState('')
  const [observacion, setObservacion] = useState('')
// Funcion de guardar notas



let guardarNotas = () =>{
  if ( id != "" && nombre != "" && asignatura !="" && notaUno != "" && notaDos!="" && notaTres!=""){
  const estudiante = {
    id: id,
    nombre: nombre,
    asignatura: asignatura,
    notaUno: notaUno,
    notaDos: notaDos,
    notaTres: notaTres,
    definitiva: definitiva,
    observacion: observacion
  }
  estudiantes.push(estudiante)
  alert("Estudiante guardado correctamente.")
  }  
    else {
      alert("Ingrese por favor los campos para ingresar notas del estudiante.")
    }
}

// Funcion de mostrar notas

  let mostrarNotas =() => {
    if ( id != "" && nombre != "" && asignatura !="" && notaUno != "" && notaDos!="" && notaTres!="") {
      if(notaUno >=0 && notaUno <= 5 && notaDos >= 0 && notaDos<= 5 && notaTres>= 0 && notaTres <=5){
        let definitiva = parseFloat(notaUno) + parseFloat(notaDos) + parseFloat(notaTres);
        let promedio = parseFloat(definitiva) /3 ;
        setDefinitiva(`La nota definitiva es de: ${promedio.toFixed(2)}`)
        if(promedio >= 2.99 && promedio <=5){
          setObservacion(nombre + " ha aprobado " + asignatura);
      } else if(promedio >= 1.99 && promedio <=3){
          setObservacion(nombre + " queda habilitando " + asignatura)
        }
        else {
         setObservacion(nombre + " ha reprobado, debe repetir " + asignatura)
      }
    } else { alert("las notas solamente pueden ser de 0 a 5") }
  }
    else {
      alert("Ingrese por favor los campos para ingresar notas del estudiante.")
    }
  }

// Funcion de buscar notas

let buscarNotas = () => {
  setObservacion.value = observacion;
  if (id !== "") {
    const estudianteEncontrado = estudiantes.find(estudiante => estudiante.id === id)
    if (estudianteEncontrado) {
      setNombre(estudianteEncontrado.nombre)
      setAsignatura(estudianteEncontrado.asignatura)
      setnotaUno(estudianteEncontrado.notaUno)
      setnotaDos(estudianteEncontrado.notaDos)
      setnotaTres(estudianteEncontrado.notaTres)
      setDefinitiva(estudianteEncontrado.definitiva)
      setObservacion(estudianteEncontrado.observacion)
    } else {
      alert('No se encontró al estudiante.')
    }
  } else {
    alert('Ingrese por favor el ID del estudiante para buscarlo.')
  }
}

  // Funcion de limpiar notas
 
  let Limpiar= () =>{ // Limpiar el conteido de las variables
    setId('');
    setNombre('');
    setAsignatura('');
    setnotaUno('');
    setnotaDos('');
    setnotaTres('');
    setDefinitiva('');
    setObservacion('');
  }

  return (
      <View style={[styles.container]}>
        <Text style={{color:'black', fontSize: '28px', fontWeight: 'bold', fontFamily: 'monospace',  letterSpacing: '2px', borderRadius:12, backgroundColor:'#e2eafc', width: '35%', height:'4%', textAlign:'center',shadowColor: '#000', marginTop:'4rem' ,
    shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.8,shadowRadius: 20, elevation:1,}}>Sistema de notas</Text>
      <View style={styles.secondaryContainer}>
        <TextInput
          placeholder='Ingrese Identificación'
          style={styles.inputs}
          onChangeText={id => setId(id)}
          value={id}
        />
      
        <TextInput
          placeholder='Ingrese Nombres'
          style={styles.inputs}
          onChangeText={nombre => setNombre(nombre)}
          value={nombre}
        />
        <TextInput
          placeholder='Ingrese Asignatura'
          style={styles.inputs}
          onChangeText={asignatura => setAsignatura(asignatura)}
          value={asignatura}
        />
        <TextInput
          placeholder='Ingrese Nota Momento 1 (30%)'
          style={styles.inputs}
           onChangeText={notaUno => setnotaUno(notaUno)}
          value={notaUno}
        />
        <TextInput
          placeholder='Ingrese Nota Momento 2 (35%)'
          style={styles.inputs}
           onChangeText={notaDos => setnotaDos(notaDos)}
           value={notaDos}
        />
        <TextInput
          placeholder='Ingrese Nota Momento 3 (35%)'
          style={styles.inputs}
           onChangeText={notaTres => setnotaTres(notaTres)}
           value={notaTres}
        />
        <TextInput
          placeholder='Definitiva: '
          style={styles.inputs}
           onChangeText={definitiva => setDefinitiva(definitiva)}
           value={definitiva}
        />
        <TextInput
          placeholder='Observación: '
          style={styles.inputs}
           onChangeText={observacion => setObservacion(observacion)}
           value={observacion}
        />
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={guardarNotas} textAlignVertical="center" >
          <Text>Guardar notas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={mostrarNotas}>
          <Text>Mostrar notas del estudiante</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={buscarNotas}>
          <Text>Buscar notas del estudiante</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={Limpiar}>
          <Text>Limpiar campos</Text>
        </TouchableOpacity>
      </View>
        <view style={{flexDirection: 'row', marginTop:30}}>
        </view>
        <StatusBar style="auto"/>
      </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#e9ecef',
    justifyContent:'center',
    alignItems:'center',
 
  },
  secondaryContainer: {
    backgroundColor: '#e2eafc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 1,
    flex:1,
    width:'35%',
    borderRadius: 20,
    margin:'2%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputs:{
    width:'75%',
    fontSize:'17px',
    fontFamily: 'Helvetica',
    letterSpacing: '1px',
    color:'black',
    alignSelf: 'center',
    textAlign:'center',
    padding:20,
    textDecorationLine: 'underline',
    paddingTop:6,
    marginTop: 6,
    marginBottom: 4
}, 
  row: {
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: 5,
  },
  button: {
      flex: 1,
      textAlign:'center',
      width:'12rem',
      textTransform: "uppercase",
      padding: 9,
      position: 'relative',
      marginTop: 2,
      marginLeft: 15,
      marginRight: 15,
      marginBottom: 2,
      paddingBottom: 10,
      backgroundColor: '#8E9ECC',
      backdropFilter: blur('10px'),
      border: 'none',
      borderRadius: '10px',
      color: '#FFFFFF',
      fontSize: '18px',
      padding: '12px 24px',
      textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)',
      transition: 'background-color 0.3s ease-in-out',  
}

})
