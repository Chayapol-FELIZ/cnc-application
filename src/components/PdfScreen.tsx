import React from 'react'
import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Pdf from 'react-native-pdf';
import AntDesign from 'react-native-vector-icons/AntDesign'

interface PdfScreen {
    onClickCallBack: any,
    source: any
}

const PdfScreen: React.FC<PdfScreen> = ({ onClickCallBack, source }) => {
    return (
        <View style={styles.container}>
            <Pdf source={source}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page, numberOfPages) => {
                    console.log(`Current page: ${page}`);
                }}
                onError={(error) => {
                    console.log(error);
                }}
                onPressLink={(uri) => {
                    console.log(`Link pressed: ${uri}`);
                }}
                style={styles.pdf}
            />
            <TouchableOpacity onPress={onClickCallBack} 
            style={{ position: 'absolute', top: 30, right: 15 }}>
                <AntDesign
                    name="close"
                    size={30}
                    color={'grey'}
                />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position: 'relative'
    }
})

export default PdfScreen
