import React from 'react'
import { 
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native'
import { styles } from '../SignIn/SignIn.styles'

const SignIn= () => {
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
    </View>
  )
}

export default SignIn