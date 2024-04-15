import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PdfScreen from '../components/PdfScreen'
import { Platform } from 'react-native'

const ContentScreen = ({ navigation }: any) => {

    const hanleCallBack = () => {
        navigation.pop();
    }

    return (
        <View style={{ flex: 1 }}>
            <PdfScreen
                source={Platform.OS == 'ios' ? require('../assets/pdfs/th/Content_Th.pdf') :
                    { uri: 'bundle-assets://Content_Th.pdf' }}
                onClickCallBack={hanleCallBack} />
        </View>
    )
}
const styles = StyleSheet.create({})

export default ContentScreen
