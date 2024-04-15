import React, { useState } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import TmpScreen from '../components/TmpScreen'
import PdfScreen from '../components/PdfScreen'

const NcScreen = ({ navigation }: any) => {
    const [openPDFs, setOpenPDFs] = useState<boolean>(false)
    const [openBookEn, setOpenBookEn] = useState<boolean>(false)
    const [openBookTH, setOpenBookTH] = useState<boolean>(false)

    const pictureMenu1 = require('../assets/image/NC.png')

    const hanleCallBack = () => {
        navigation.pop();
    }
    const openEN = () => {
        setOpenPDFs(true)
        setOpenBookEn(true)
    }
    const openTH = () => {
        setOpenPDFs(true)
        setOpenBookTH(true)
    }
    const closePDFs = () => {
        setOpenPDFs(false)
        setOpenBookEn(false)
        setOpenBookTH(false)
    }

    return (
        <View style={styles.container}>
            {openPDFs ?
                <PdfScreen source={openBookEn ?
                    (Platform.OS == 'ios' ? require('../assets/pdfs/en/RenAn-Manual-NcEditor.pdf') :
                        { uri: 'bundle-assets://RenAn-Manual-NcEditor.pdf' }) :
                    (Platform.OS == 'ios' ? require('../assets/pdfs/th/NcEditor_Th.pdf') :
                        { uri: 'bundle-assets://NcEditor_Th.pdf' })} onClickCallBack={closePDFs} /> :
                <TmpScreen
                    image={pictureMenu1}
                    handleTH={openTH}
                    handleEN={openEN}
                    gotoMenu={hanleCallBack}
                    title={'NC Editor'}
                    color={'#81b5e0'}
                    colorButtom={'#1a80bf'}
                />
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default NcScreen
