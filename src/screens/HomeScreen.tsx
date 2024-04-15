import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = ({ navigation }: any) => {
    const pictureLogo = require('../assets/image/NCeditor.png')
    const handleStart = () => {
        navigation.push("Lobby")
    }

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#cafada', '#94baff']}
                    style={{
                        height: '100%', display: 'flex',
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                    <View style={styles.ImageLogo}>
                        <Image source={pictureLogo}
                            style={{ height: 120, width: 120 }} />
                    </View>
                </LinearGradient>
                <View style={styles.ImageInfoOuterContainer} />
            </View>
            <View style={styles.footer}>
                <Text style={styles.TextHeader}>CNC Training Simulator</Text>
                <View style={styles.buttomFooter}>
                    <TouchableOpacity onPress={handleStart} style={styles.buttomStart}>
                        <Text style={styles.buttomStartText}>Start</Text>
                    </TouchableOpacity>
                    <Text style={{ color: '#636a8c' }}>Press to Start</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    subContainer: {
        width: '100%',
        aspectRatio: 20 / 25,
        position: 'relative'
    },
    footer: {
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    ImageLogo: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 150 / 2,
    },
    ImageInfoOuterContainer: {
        width: '100%',
        position: 'absolute',
        backgroundColor: 'white',
        paddingVertical: 24,
        paddingHorizontal: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        bottom: 0
    },
    TextHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        letterSpacing: 1,
        color: '#0d194d'
    },
    buttomStart: {
        padding: 10,
        backgroundColor: '#b4dbdc',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttomStartText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    buttomFooter: {
        gap: 20,
        marginBottom: 10,
    }
})

export default HomeScreen
