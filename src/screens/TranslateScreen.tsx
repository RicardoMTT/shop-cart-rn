import {
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

export default function TranslateScreen() {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('Spanish');
  const [translation, setTranslation] = useState('');

  const languages = ['Spanish', 'French', 'German', 'Italian', 'Portuguese'];

  /**axios */

  const translateText = async () => {
    console.log('target language', language);
    console.log('text', text);

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4',
          messages: [
            {
              role: 'system',
              content: `Translate the following English text to ${language}:`,
            },
            {role: 'user', content: text},
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer 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`,
          },
        },
      );

      const translatedText = response.data.choices[0].message.content;
      setTranslation(translatedText);
    } catch (error) {
      console.error(error);
      Alert.alert('Error occurred during translation', error);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    translateText();
  };

  const setLanguageBtn = item => {
    setLanguage(item);
  };
  return (
    <View>
      <Text>TranslateScreen</Text>
      <TextInput value={text} onChangeText={value => setText(value)} />
      <Button onPress={handleSubmit} title="Translate" />
      {languages.map((val, index) => (
        <TouchableOpacity key={index} onPress={() => setLanguageBtn(val)}>
          <Text>{val}</Text>
        </TouchableOpacity>
      ))}
      {translation && (
        <>
          <Text>Translation</Text>
          <Text>{translation}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
