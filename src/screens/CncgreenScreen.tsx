import React, { useState } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import TmpScreen from '../components/TmpScreen'
import PdfScreen from '../components/PdfScreen'

const CncgreenScreen = ({ navigation }: any) => {
    const [openPDFs, setOpenPDFs] = useState<boolean>(false)
    const [openBookEn, setOpenBookEn] = useState<boolean>(false)
    const [openBookTH, setOpenBookTH] = useState<boolean>(false)

    const pictureMenu2 = require('../assets/image/cnc1.png')

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
                    (Platform.OS == 'ios' ? require('../assets/pdfs/en/CNC-green-en.pdf') :
                        { uri: 'bundle-assets://CNC-green-en.pdf' }) :
                    (Platform.OS == 'ios' ? require('../assets/pdfs/th/cncG_Th.pdf') :
                        { uri: 'bundle-assets://cncG_Th.pdf' })} onClickCallBack={closePDFs} /> :
                <TmpScreen
                    image={pictureMenu2}
                    handleTH={openTH}
                    handleEN={openEN}
                    gotoMenu={hanleCallBack}
                    title={'เครื่องกลึง CNC'}
                    color={'#bae1c7'}
                    colorButtom={'#73ab86'}
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
export default CncgreenScreen
