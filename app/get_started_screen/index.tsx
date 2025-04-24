import { useRouter } from 'expo-router';
import { MoveRight } from 'lucide-react-native';
import { View, Text, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';

export default function GetStartedPage() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#000" />
            <Text style={styles.title}>Invest in What's Next.</Text>
            <TouchableOpacity style={styles.button} className='w-100 gap-2 flex flex-row item-center justify-center' onPress={() => router.push('/invitation_screen')}>
                <Text style={styles.buttonText}>
                    Get started
                </Text>
                <Text>
                    <MoveRight color="black" size={25} />
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 40,
        fontFamily: 'TiemposText-Regular',
    },
    button: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 30,
        width: "100%",
    },
    buttonText: {
        color: '#000',
        fontSize: 18,
        fontWeight: '500',
        textAlign: "center"
    },
});