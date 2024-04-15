import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

interface TmpScreen {
    image: any,
    gotoMenu: any,
    handleEN: any,
    handleTH: any,
    title: string,
    color: string,
    colorButtom: string,
}

const TmpScreen: React.FC<TmpScreen> = ({ image, title, color, colorButtom, gotoMenu, handleEN, handleTH }) => {
    return (
        <View style={styles.containerComponent}>
            <View style={[styles.containerHero, { backgroundColor: color }]}>
                <View style={styles.bodyImage}>
                    <Image source={image} style={{ width: 110, height: 110 }} />
                </View>
                <TouchableOpacity onPress={gotoMenu} style={styles.iconCallBack}>
                    <AntDesign
                        name="left"
                        size={30}
                        color={'grey'}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.containerMenu}>
                <TouchableOpacity onPress={handleTH} style={[styles.buttom, { backgroundColor: colorButtom }]}>
                    <Text style={styles.buttomText}>คู่มือฉบับภาษาไทย</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleEN} style={[styles.buttom, { backgroundColor: colorButtom }]}>
                    <Text style={styles.buttomText}>English guidebook</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.footer, { backgroundColor: color }]} />
        </View>
    )
}
const styles = StyleSheet.create({
    containerComponent: {
        height: '100%'
    },
    containerHero: {
        position: 'relative',
        width: '100%',
        height: '40%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    iconCallBack: {
        position: 'absolute',
        left: 10,
        top: 30
    },
    bodyImage: {
        padding: 25,
        backgroundColor: 'white',
        borderRadius: 200 / 2
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
    containerMenu: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        height: '50%',
        backgroundColor: 'white',
        justifyContent: 'space-evenly'
    },
    buttom: {
        display: 'flex',
        width: 220,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttomText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    footer: {
        width: '100%',
        height: '10%'
    }
})

export default TmpScreen
