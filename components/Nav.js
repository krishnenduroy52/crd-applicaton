import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, Button } from "react-native";

const Nav = (props) => {
    const [isActive, setActive] = useState(false);
    const [text, setText] = useState('');
    const handelSeachNotes = () => {
        props.handelSeachNote(text)
    }
    return (
        <View style={[style.container, style.shadowProp]}>
            <Text style={style.p}><Text style={style.green}>All</Text>Posts</Text>
            <View style={style.search}>
                <TextInput
                    style={[style.searchTerm, { color: isActive ? '#00B4CC' : "" }]}
                    onFocus={() => setActive(true)} onBlur={() => setActive(false)}
                    underlineColorAndroid="transparent"
                    type="text"
                    placeholder="What are you looking for?"
                    autoCapitalize="none"
                    defaultValue={text}
                    onChangeText={newText => setText(newText)}
                />
                <View style={style.searchButton} onPress={props.handelSeachNote(text)}>
                    <Image style={style.seachImg} source={require("../img/serach-icon.png")} />
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    p: {
        cursor: 'default',
        marginTop: 20,
        fontSize: 25,
        fontWeight: '600',
        color: '#555'
    },
    green: {
        color: '#4caf50',
    },
    search: {
        display: 'flex',
        flexDirection: 'row',
    },
    searchTerm: {
        width: "80%",
        borderWidth: 3,
        borderColor: '#00B4CC',
        borderRight: 'none',
        padding: 5,
        height: 36,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        outline: 'none',
        color: '#555',
    },
    focus: {
        color: '#00B4CC'
    },
    searchButton: {
        width: 40,
        height: 36,
        backgroundColor: '#00B4CC',
        textAlign: 'center',
        color: '#fff',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        justifyContent: 'center',
        fontSize: 20,
    },
    seachImg: {
        width: 20,
        height: 20,
        margin: 5,
    }
})

export default Nav;