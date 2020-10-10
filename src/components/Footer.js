import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import colors from "../utils/colors";

export default function Footer() {
    return(
        <View style={styles.viewFooter}>
            <Text style={styles.text}>CALCULAR pres</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewFooter:{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: colors.PRIMARY_COLOR,
        height: 100,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
        backgroundColor: 'black',
        borderRadius: 50,
    }
})