import { View, Text, Platform, KeyboardAvoidingView, TextInput, StyleSheet, } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';

export default function CreateTodo(props) {

    const { setTodoContent, todoContent, handleAddTodo } = props

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.createTodoBox}
            >
                <TextInput
                    style={styles.input}
                    placeholder="Write here..."
                    value={todoContent}
                    onChangeText={(text) => setTodoContent(text)}
                />
                <TouchableOpacity onPress={handleAddTodo}>
                    <View style={styles.btn}>
                        <Text style={styles.addBtn}>Add</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    createTodoBox: {
        backgroundColor: '#f7f7f7',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 20,
        borderColor: '#CBC0C0',
        borderWidth: 1,
        width: 250,
    },
    btn: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#9b59b6',
        borderRadius: 20,
        borderColor: '#9b59b6',
        borderWidth: 1,
    },
    addBtn: {
        color: '#fff',

    },
});