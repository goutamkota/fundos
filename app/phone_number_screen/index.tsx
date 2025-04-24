import { useRouter } from 'expo-router';
import { MoveRight } from 'lucide-react-native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

export default function PhoneNumberScreen() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const router = useRouter();
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View>
                <Text style={styles.title}>Enter phone number</Text>
                <Text style={styles.subtitle}>
                    Your number helps us verify your identity and keep your account secure.
                </Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.prefix}>+91</Text>
                    <View style={styles.divider} />
                    <TextInput
                        style={styles.input}
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        placeholder="9876543210"
                        placeholderTextColor="#888"
                        keyboardType="phone-pad"
                        returnKeyType="done"
                        maxLength={10}
                    />
                </View>
                <TouchableOpacity className='flex flex-row justify-center gap-2' style={[styles.button, phoneNumber.length === 10 ? styles.buttonActive : null]} onPress={() => router.push('/otp_input_screen')}>
                    <Text style={[styles.buttonText, phoneNumber.length === 10 ? styles.buttonActiveText : null]}>Proceed</Text>
                    <Text><MoveRight strokeWidth={1} color={phoneNumber.length === 10 ? "black" : 'white'} size={25} /></Text>
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
        paddingHorizontal: 10,
        fontSize: 16,
    },
    divider: {
        width: 1,
        height: '60%',
        backgroundColor: '#888',
    },
    input: {
        flex: 1,
        color: '#fff',
        paddingHorizontal: 10,
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
