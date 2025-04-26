import { RelativePathString, useRouter } from 'expo-router';
import { Dock, MoveRight } from 'lucide-react-native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

export default function PhoneNumberScreen() {
    const [pan, setPan] = useState('');
    const router = useRouter();
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View>
                <Text style={styles.title}>Enter your Pan Card</Text>
                <Text style={styles.subtitle}>
                    We'll use this to verify your identity and comply with regulations.
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        value={pan}
                        onChangeText={setPan}
                        placeholderTextColor="#888"
                        keyboardType="phone-pad"
                        returnKeyType="done"
                        placeholder="Enter your pan number"
                        maxLength={10}
                    />
                    <Text style={styles.prefix}><Text><Dock strokeWidth={1} color='white' size={25} /></Text></Text>
                </View>
                <TouchableOpacity disabled={pan.length < 10} className='flex flex-row justify-center gap-2' style={[styles.button, (pan.length >= 10) ? styles.buttonActive : null]} onPress={() => router.push('/email_screen' as RelativePathString)}>
                    <Text style={[styles.buttonText, (pan.length >= 10) ? styles.buttonActiveText : null]}>Next</Text>
                    <Text><MoveRight strokeWidth={1} color={(pan.length >= 10) ? "black" : 'white'} size={25} /></Text>
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
    inputContainer: {
        flexDirection: 'row',
        width: '100%',
        borderColor: '#333',
        borderWidth: 1,
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#1a1a1a',
    },
    prefix: {
        color: '#fff',
        paddingHorizontal: 20,
        fontSize: 16,
    },
    input: {
        flex: 1,
        color: '#fff',
        height: 50,
        paddingHorizontal: 20,
        fontSize: 16,
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
