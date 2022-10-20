import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
const Note = (props) => {
    return (
        <View style={style.note}>
            <Text>{props.text}</Text>
            <View style={style.note__footer}>
                <Text style={style.small}>
                    {props.date}
                </Text>
                <TouchableOpacity onPress={() => props.handelDeleteNote(props.post.id)} >
                    <Image style={style.deleteImg} source={require("../img/Delete.png")} />
                </TouchableOpacity>
            </View>
        </View >
    )
}

const style = StyleSheet.create({
    note: {
        backgroundColor: '#fef68a',
        borderRadius: 10,
        padding: 20,
        minHeight: 140,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        whiteSpace: 'pre-wrap',
        marginLeft: 12,
        marginRight: 12,
        marginBottom: 8,
        marginTop: 12,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 8,
        elevation: 5
    },
    note__footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    small: {
        fontSize: 13,
    },
    deleteImg: {
        width: 20,
        height: 20,
    },
})


export default Note;