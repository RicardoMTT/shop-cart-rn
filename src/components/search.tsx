import { Platform, StyleProp, StyleSheet, Text, TextInput, View, ViewStyle } from 'react-native'
import React, { useEffect, useState } from 'react'
import useDelayedFunctionCall from '../hooks/useDelay';
 
interface Props {
    onDebounce: ( value: string ) => void;
    style?: StyleProp<ViewStyle>
}

export const SearchInput   = ({ style, onDebounce }:Props) => {
    const [textValue, setTextValue] = useState('');

    const deboncedValue = useDelayedFunctionCall( textValue ); // usado para obtener el valor del debounced del texto de busqueda
    
    useEffect(() => {
        onDebounce(deboncedValue);
    }, [deboncedValue])

    return (
        <View style={{ 
            ...styles.container,
            ...style as any
        }}>
            <View style={ styles.textBackground }>

                <TextInput 
                    placeholder="Buscar pokémon"
                    style={{ 
                        ...styles.textInput,
                        top: (Platform.OS === 'ios') ? 0 : 2
                    }}
                    autoCapitalize="none"
                    autoCorrect={ false }
                    value={ textValue }
                    onChangeText={ setTextValue }
                />

                 

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red'
    },
    textBackground: {
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textInput: {
        flex: 1,
        fontSize: 18,
    }
});