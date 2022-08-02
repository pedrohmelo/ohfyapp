import React from "react"
import {
    Text,
    View,
    SafeAreaView
} from "react-native"
import { styles } from "../Home/Home.styles"
import Teste from "../../components/carrossel/Carrossel.index"

export function Home(){
    return(
        <View style={styles.container}>
            <View><Text>OIEEAAAEEE</Text></View>
            <Teste/>
        </View>
    )
}