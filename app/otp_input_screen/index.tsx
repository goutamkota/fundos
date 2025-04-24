import { useRouter } from 'expo-router';
import { MoveRight } from 'lucide-react-native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';

export default function OtpInputScreen() {
    const [otpNumber, setOtpNumber] = useState('');
    const router = useRouter();
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View>
                <Text style={styles.title}>Verify your number</Text>
                <Text style={styles.subtitle}>
                    We have sent a verification code to your number +91-9776888193.
                </Text>
                <OtpInput numberOfDigits={4} theme={
                    {
                        pinCodeTextStyle: styles.input,
                        pinCodeContainerStyle: styles.inputContainer,
                    }
                } placeholder="----" type='numeric' onTextChange={(text: any) => setOtpNumber(text)} />
                <TouchableOpacity className='flex flex-row justify-center gap-2 mt-5' style={[styles.button, otpNumber.length === 4 ? styles.buttonActive : null]} onPress={() => router.push('/full_name_screen')}>
                    <Text style={[styles.buttonText, otpNumber.length === 4 ? styles.buttonActiveText : null]}>Verify</Text>
                    <Text><MoveRight strokeWidth={1} color={otpNumber.length === 4 ? "black" : 'white'} size={25} /></Text>
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
    input: {
        color: '#fff',
    },
    inputContainer: {
        width: 60,
        borderRadius: 0
    },
    button: {
        backgroundColor: '#666',
        padding: 15,
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
