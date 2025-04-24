import { RelativePathString, useRouter } from 'expo-router';
import { MoveRight } from 'lucide-react-native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

export default function PhoneNumberScreen() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const router = useRouter();
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View>
                <Text style={styles.title}>Enter your name</Text>
                <Text style={styles.subtitle}>
                    What should we call you?
                </Text>
                <Text style={styles.codeLabel}>First Name</Text>
                <TextInput
                    style={styles.input}
                    value={firstName}
                    onChangeText={setFirstName}
                    placeholder="Enter your first name"
                    placeholderTextColor="#888"
                />
                <Text style={styles.codeLabel}>Last Name</Text>
                <TextInput
                    style={styles.input}
                    value={lastName}
                    onChangeText={setLastName}
                    placeholder="Enter your last name"
                    placeholderTextColor="#888"
                />
                <TouchableOpacity className='flex flex-row justify-center gap-2' style={[styles.button, (firstName.length >= 3 && lastName.length >= 3) ? styles.buttonActive : null]} onPress={() => router.push('/email_screen' as RelativePathString)}>
                    <Text style={[styles.buttonText, (firstName.length >= 3 && lastName.length >= 3) ? styles.buttonActiveText : null]}>Next</Text>
                    <Text><MoveRight strokeWidth={1} color={(firstName.length >= 3 && lastName.length >= 3) ? "black" : 'white'} size={25} /></Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a',
        padding: 20,
    },
    title: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        color: '#00ffcc',
        fontSize: 14,
        marginBottom: 20,
        textAlign: 'left',
    },
    codeLabel: {
        color: '#fff',
        fontSize: 14,
        marginBottom: 5,
    },
    input: {
        borderColor: '#333',
        borderWidth: 1,
        color: '#fff',
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#666',
        padding: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonActive: {
        backgroundColor: '#fff',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    buttonActiveText: {
        color: '#000'
    }
});
