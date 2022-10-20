import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Button, Touchable } from "react-native";

const AddNote = ({ handelAddnote }) => {
    const [noteText, setNoteText] = useState("");

    const handelChange = (newText) => {
        if (noteText.length <= 200) {
            setNoteText(newText);
        }
    };
    const handelSaveClick = () => {
        if (noteText.trim().length > 0) {
            handelAddnote(noteText);
            setNoteText("");
        }
    };
    return (
        <View style={styles.note}>
            <TextInput
                multiline={true}
                numberOfLines={8}
                placeholder="Type to add a note"
                onChangeText={newText => handelChange(newText)}
                defaultValue={noteText}
                style={styles.textInput}
            />
            <View style={styles.note__footer}>
                <Text style={styles.small}>{200 - noteText.length} Remaining</Text>

                <TouchableOpacity
                    style={styles.save}
                    onPress={handelSaveClick}
                >
                    <Text>save</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    note: {
        backgroundColor: '#67d7cc',
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
        elevation: 5
    },
    save: {
        backgroundColor: '#e1e1e1',
        border: 'none',
        borderRadius: 15,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    note__footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textInput: {
        textAlignVertical: 'top',
        resize: 'none'
    }
})

export default AddNote;
