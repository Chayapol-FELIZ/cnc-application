import React, { useState } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import TmpScreen from '../components/TmpScreen'
import PdfScreen from '../components/PdfScreen'

const CncblueScreen = ({ navigation }: any) => {
    const [openPDFs, setOpenPDFs] = useState<boolean>(false)
    const [openBookEn, setOpenBookEn] = useState<boolean>(false)
    const [openBookTH, setOpenBookTH] = useState<boolean>(false)

    const pictureMenu3 = require('../assets/image/cnc2.png')

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
                    (Platform.OS == 'ios' ? require('../assets/pdfs/en/CNC-blue-en.pdf') :
                        { uri: 'bundle-assets://CNC-blue-en.pdf' }) :
                    (Platform.OS == 'ios' ? require('../assets/pdfs/th/cncB_Th.pdf') :
                        { uri: 'bundle-assets://cncB_Th.pdf' })} onClickCallBack={closePDFs} /> :
                <TmpScreen
                    image={pictureMenu3}
                    handleTH={openTH}
                    handleEN={openEN}
                    gotoMenu={hanleCallBack}
                    title={'เครื่องกัด CNC'}
                    color={'#8dd2e3'}
                    colorButtom={'#6eb0c1'}
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

export default CncblueScreen
