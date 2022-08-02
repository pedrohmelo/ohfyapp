import React from "react"
import {
    Text,
    View,
    Dimensions,
    Image,
    StyleSheet
} from "react-native"
//import { styles } from "../Home/Home.styles"
import Carousel from "react-native-snap-carousel"

type Props = {
    item: {
        imgUrl: string
    }
    index: number
}

const SLIDER_WIDTH = Dimensions.get('window').width //pega a largura da tela toda
const ITEM_WIDTH = SLIDER_WIDTH * 0.88 //pega 88% da largura

const carouselItems = [
    {
        imgUrl: 'https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2022/02/tilapia-e1645622421681.jpg'
    },
    {
        imgUrl: 'https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia24743/reproducao-tilapia-viveiro-artigos-cursos-cpt.jpg'
    },
    {
        imgUrl: 'https://s2.glbimg.com/bwn5r7hJ4KzsCCqK_6JEmpCxkhA=/512x320/smart/e.glbimg.com/og/ed/f/original/2015/03/18/tilapia_1.jpg'
    }
]

function carouselCardItem({item, index}: Props){
    return(
        <View style={styles.cardCarousel} key={index}>
            <Image
                style={styles.image}
                source={{uri: item.imgUrl}}
            />
        </View>
    )
}

export function Home(){
    return(
        <View style={styles.container}>
            <Carousel
                data={carouselItems}
                renderItem={carouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                useScrollView={true} //pra conseguir passar pro lado
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    cardCarousel: {
        width: ITEM_WIDTH
    },
    image: {
        height: 250,
        borderRadius: 8
    }
})