import { RelativePathString, useRouter } from 'expo-router';
import { MoveRight } from 'lucide-react-native';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function KycStartScreen() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Secure your Investments</Text>
            <Text style={styles.subtitle}>
                We verify your identity to protect your account, ensure regulatory compliance, and give you access to exclusive deals.
            </Text>
            <TouchableOpacity style={styles.button} className='w-100 gap-2 flex flex-row item-center justify-center mb-5' onPress={() => router.push('/invitation_screen')}>
                <Text style={styles.buttonDarkText}>
                    Complete KYC Now
                </Text>
            </TouchableOpacity>
            <TouchableOpacity className='flex flex-row justify-center gap-2' style={styles.buttonOutline} onPress={() => router.push('/choose_investor_screen' as RelativePathString)}>
                <Text style={styles.buttonText}>Skip and Verify later</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'flex-end',
        padding: 15,
    },
    title: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        color: '#fff',
        fontSize: 14,
        marginBottom: 40,
    },
    button: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 30,
        width: "100%",
    },
    buttonOutline: {
        borderWidth: 1,
        borderColor: '#666',
        padding: 13,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
        textAlign: "center"
    },
    buttonDarkText: {
        color: '#000',
        fontSize: 18,
        fontWeight: '500',
        textAlign: "center"
    },
});