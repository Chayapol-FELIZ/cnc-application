import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'

const LobbyScreen = ({ navigation }: any) => {
    const pictureMenu1 = require('../assets/image/NC.png')
    const pictureMenu2 = require('../assets/image/cnc1.png')
    const pictureMenu3 = require('../assets/image/cnc2.png')
    const pictureMenu4 = require('../assets/image/NCeditor.png')

    const hanleMenu1 = () => {
        navigation.push("Nc")
    }
    const hanleMenu2 = () => {
        navigation.push("Cncgreen")
    }
    const hanleMenu3 = () => {
        navigation.push("Cncgblue")
    }
    const hanleMenu4 = () => {
        navigation.push("Content")
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleHeader}>เลือกคู่มือที่ต้องการใช้งาน</Text>
            <View style={styles.subContainer}>
                <TouchableOpacity onPress={hanleMenu1} style={styles.menuButtom}>
                    <View style={styles.ImageLogo}>
                        <Image source={pictureMenu1}
                            style={{ height: 50, width: 50 }} />
                    </View>
                    <Text style={styles.textMenu}>NC Editor</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={hanleMenu2} style={[styles.menuButtom, { backgroundColor: '#bae1c7' }]}>
                    <View style={styles.ImageLogo}>
                        <Image source={pictureMenu2}
                            style={{ height: 50, width: 50 }} />
                    </View>
                    <Text style={styles.textMenu}>เครื่องกลึง CNC</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={hanleMenu3} style={[styles.menuButtom, { backgroundColor: '#8ed2e3' }]}>
                    <View style={styles.ImageLogo}>
                        <Image source={pictureMenu3}
                            style={{ height: 50, width: 50 }} />
                    </View>
                    <Text style={styles.textMenu}>เครื่องกัด CNC</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={hanleMenu4} style={[styles.menuButtom, { backgroundColor: '#b6dbdd' }]}>
                    <View style={styles.ImageLogo}>
                        <Image source={pictureMenu4}
                            style={{ height: 50, width: 50 }} />
                    </View>
                    <Text style={styles.textMenu}>Tutorial</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',

    },
    subContainer: {
        flex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-around'
    },
    titleHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0d194d',
        marginTop: 20
    },
    menuButtom: {
        width: 300,
        backgroundColor: '#94baff',
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        gap: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    ImageLogo: {
        padding: 18,
        backgroundColor: 'white',
        borderRadius: 150 / 2,
    },
    textMenu: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default LobbyScreen
