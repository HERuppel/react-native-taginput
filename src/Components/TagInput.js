import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button, FlatList } from 'react-native'

const TagInput = ({ items, updateArray }) => {
    const [refresh, setRefresh] = useState(false) //used to update in real time your inputs

    const onRemove = item => {
        items.forEach((element, index, object) => {
            if (element == item) {
                object.splice(element, 1)
            }
        })
        setRefresh(!refresh)
        updateArray(items)
    }


    return (
        <View style={{ flex: 1, marginTop: 30 }}>
            <FlatList
                key='_'
                data={[...items]}
                extraData={refresh} //way to do real time update in flatlist
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        <Text style={styles.chipText}>{item}</Text>
                        <TouchableOpacity
                            style={styles.touchContainer}
                            onPress={() => onRemove(item)}
                        >
                            <Text style={{ color: '#FFF', fontSize: 20, paddingHorizontal: 8 }}>X</Text>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(item, index) => index}
                horizontal={false}
                numColumns={3}
                columnWrapperStyle={{ flexWrap: 'wrap' }}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#a8a8a8',
        padding: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 20,
        marginHorizontal: 10,
        marginBottom: 10,
    },
    chipText: {
        textAlign: 'center',
        color: '#212121',
        fontSize: 16,
        paddingHorizontal: 10,
        fontWeight: 'bold'
    },
    touchContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5e5e5e',
        borderRadius: 15
    }

})


export default TagInput