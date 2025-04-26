import { useRouter } from 'expo-router';
import { MoveRight } from 'lucide-react-native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

const FundOSInvitationScreen = () => {
    const [invitationCode, setInvitationCode] = useState('');
    const router = useRouter();
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View>
                <Text style={styles.title}>Hey there! 👋</Text>
                <Text style={styles.message}>
                    We're building something special – and access is currently by invitation only. We're onboarding a select group of investors and founders as we fine-tune the platform to deliver a seamless private market experience.
                </Text>
                <Text style={styles.message}>
                    If you've received an invite, you're all set to dive in. If not, hang tight – we're expanding carefully and may reach out soon through our trusted network.
                </Text>
                <Text style={styles.signature}>- Team FundOS</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.codeLabel}>INVITATION CODE</Text>
                <TextInput
                    style={styles.input}
                    value={invitationCode}
                    onChangeText={setInvitationCode}
                    placeholder="Enter invitation code"
                    placeholderTextColor="#888"
                />
                <TouchableOpacity className='flex flex-row justify-center gap-2' style={styles.button} onPress={() => router.push('/phone_number_screen')}>
                    <Text style={styles.buttonText}>Proceed</Text>
                    <Text><MoveRight strokeWidth={1} color="white" size={25} /></Text>
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
        justifyContent: 'space-between'
    },
    title: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    message: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 10,
        lineHeight: 25
    },
    signature: {
        color: '#ccc',
        fontSize: 14,
        marginBottom: 20,
        textAlign: 'right',
    },
    inputContainer: {
        paddingBottom: 20,
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
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default FundOSInvitationScreen;