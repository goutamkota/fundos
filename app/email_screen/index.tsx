import { RelativePathString, useRouter } from 'expo-router';
import { MoveRight } from 'lucide-react-native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

export default function EnterEmailScreen() {
    const [email, setEmail] = useState('');
    const router = useRouter();
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View>
                <Text style={styles.title}>Enter your mail ✉️</Text>
                <Text style={styles.subtitle}>
                    Make sure it's one you check regularly.
                </Text>
                <Text style={styles.codeLabel}>Email</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Enter your email"
                    placeholderTextColor="#888"
                />
                <TouchableOpacity className='flex flex-row justify-center gap-2' style={[styles.button, email.length >= 3 ? styles.buttonActive : null]} >
                    <Text style={[styles.buttonText, email.length >= 3 ? styles.buttonActiveText : null]}>Next</Text>
                    <Text><MoveRight strokeWidth={1} color={email.length >= 3 ? "black" : 'white'} size={25} /></Text>
                </TouchableOpacity>
                <TouchableOpacity className='flex flex-row justify-center gap-2' style={styles.buttonOutline} onPress={() => router.push('/choose_investor_screen' as RelativePathString)}>
                    <Text style={styles.buttonText}>Skip and Verify later</Text>
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
        height: 50,
        paddingHorizontal: 20,
        borderColor: '#333',
        borderWidth: 1,
        color: '#fff',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#666',
        padding: 10,
        width: '100%',
        alignItems: 'center',
        marginBottom: 15
    },
    buttonOutline: {
        borderWidth: 1,
        borderColor: '#666',
        padding: 13,
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
