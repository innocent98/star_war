import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ActivityIndicator,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import {styles} from '../constants/styles';
import {Picker} from '@react-native-picker/picker';
import {useState} from 'react';
import {useEffect} from 'react';
import {userRequest} from '../redux/requestMethod';
import {COLORS} from '../constants/theme';

const Form = () => {
  const [planets, setPlanets] = useState([]);
  const [planet, setPlanet] = useState('');
  const [age, setAge] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const fetchPlanet = async () => {
    try {
      const res = await userRequest.get('/planets');
      setPlanets(res.data.results);
    } catch (error) {}
  };

  useEffect(() => {
    fetchPlanet();
  }, []);

  const handleSubmitBtn = () => {
    if (name === '' || planet === '' || age === '') {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
      }, 2000);
    }
  };
  //   console.log(age, name, planet)

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.form_container}>
        <Text style={styles.manage_planet}>Manage Star War Planets</Text>
        <TextInput
          placeholder="Name"
          style={styles.input}
          onChangeText={value => setName(value)}
          value={name}
        />
        <TextInput
          placeholder="Age"
          style={styles.input}
          onChangeText={value => setAge(value)}
          value={age}
        />
        <View style={[styles.input, {paddingHorizontal: 0}]}>
          <Picker
            selectedValue={planet}
            onValueChange={(itemValue, itemIndex) => {
              setPlanet(itemValue);
            }}>
            <Picker.Item label="Select planet" value="" />
            {planets?.map((item, index) => (
              <Picker.Item label={item.name} value={item.url} key={index} />
            ))}
          </Picker>
        </View>
        <TouchableHighlight
          onPress={handleSubmitBtn}
          style={styles.submit_btn}
          underlayColor={COLORS.light.textSoft}>
          {isLoading ? (
            <ActivityIndicator size={'small'} color={COLORS.light.white} />
          ) : (
            <Text style={styles.submit_txt}>Submit</Text>
          )}
        </TouchableHighlight>
        {success && (
          <Text style={styles.success_txt}>Submitted successfully!</Text>
        )}
        {error && (
          <Text style={styles.error_txt}>Please fill in all inputs</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Form;
