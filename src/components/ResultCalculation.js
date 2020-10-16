import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import colors from "../utils/colors";

export default function ResultCalculation(props) {
    const { capital, interest, months, total, errorMessage } = props;

    return(
        <View style={styles.content}>
            {total && (               
                <Text>Result Total</Text>
            )}
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
   content:{
        marginTop: 100,
        marginHorizontal: 40,
   },
   error: {
       textAlign: 'center',
       color: '#f00',
       fontWeight: 'bold',
       fontSize: 20,
   }
})