import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { 
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native'
import { styles } from '../SignIn/SignIn.styles'

export function SignIn(){

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View>
            <Image
                source={require('../../assets/ohfy.png')} 
                style={styles.imageLogo}   
            />
            <Text style={styles.title}>Ohfy</Text>
        </View>
        <View style={styles.inputView}>
            <TextInput
                placeholder='Email'
                placeholderTextColor='grey'
            />
        </View>
        <View style={styles.inputView}>
            <TextInput
                placeholder='Senha'
                placeholderTextColor='grey'
            />
        </View>
        <TouchableOpacity>
            <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style={styles.forgotPassword}>Cadastro</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.signInButton}
            onPress={() => navigation.navigate('Home')}
        >
            <Text>Entrar</Text>
        </TouchableOpacity>
    </View>
  )
}