import { MoveRight } from 'lucide-react-native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Button, Pressable } from 'react-native';
import CustomRadioGroup from '~/components/CustomRadioGroup';
import { Checkbox } from '~/components/ui/checkbox';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '~/components/ui/dialog';
import { Label } from '~/components/ui/label';

const options = [
    {
        value: 'Individual',
        label: 'Individual Investor',
        description: "I'm investing as a person using my personal capital",
    },
    {
        value: 'Entity',
        label: 'Entity Investor',
        description: "I'm investing on behalf of a company, LLP, trust, or registered fund.",
    },
];


export default function EnterEmailScreen() {
    const [value, setValue] = useState('');
    const [checked, setChecked] = useState(false);

    const toggleCheckbox = () => {
        setChecked(prev => !prev);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <Dialog>
                <View>
                    <Text style={styles.title}>Choose investor type</Text>
                    <Text style={styles.subtitle}>
                        Make sure you select a correct type.
                    </Text>
                    <CustomRadioGroup arr={options} value={value} setValue={setValue} />
                </View>
                {value && <DialogTrigger asChild>
                    <TouchableOpacity className='flex flex-row justify-center gap-2 mt-5' style={[styles.button, value ? styles.buttonActive : null]} >
                        <Text style={[styles.buttonText, value ? styles.buttonActiveText : null]}>Next</Text>
                        <Text><MoveRight strokeWidth={1} color={value ? "black" : 'white'} size={25} /></Text>
                    </TouchableOpacity>
                </DialogTrigger>}
                <DialogContent className='sm:max-w-[425px]'>
                    <View>
                        <Text style={styles.title}>Declaration</Text>
                        <Text style={styles.message}>
                            I am an individual investor who has net tangible assets of at least two crore rupees excluding value of my principal residence, and:
                        </Text>
                        <Text style={styles.message}>
                            <View className='flex flex-col'>
                                <Text style={styles.msg}>1. have early-stage investment experience, or</Text>
                                <Text style={styles.msg}>2. have experience as a serial entrepreneur, or</Text>
                                <Text style={styles.msg}>3. am a senior management professional(s) with at least ten years of experience.</Text>
                            </View>
                        </Text>
                    </View>
                    <Pressable onPress={toggleCheckbox} style={styles.checkCont}>
                        <Checkbox style={styles.checkbox} checked={checked} onCheckedChange={setChecked} />
                        <Text style={styles.label}>
                            I confirm that I qualify as an Angel Investor{'\n'}
                            based on the above condition(s)<Text style={styles.asterisk}>*</Text>
                        </Text>
                    </Pressable>
                    <DialogFooter>
                        <DialogClose asChild>
                            <TouchableOpacity className='flex flex-row justify-center gap-2 mt-5' style={[styles.button, checked ? styles.buttonActive : null]} >
                                <Text style={[styles.buttonText, checked ? styles.buttonActiveText : null]}>Agree and continue</Text>
                                <Text><MoveRight strokeWidth={1} color={checked ? "black" : 'white'} size={25} /></Text>
                            </TouchableOpacity>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog >
        </KeyboardAvoidingView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a',
        padding: 20,
        justifyContent: 'space-between'
    },
    checkbox: {
        borderRadius: 0
    },
    checkCont: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        gap: 15,
        marginTop: 60,
        justifyContent: 'flex-start'
    },
    label: {
        marginLeft: 8,
        color: '#ffffff',
        fontSize: 14,
        lineHeight: 20,
    },
    asterisk: {
        fontSize: 12,
        lineHeight: 20,
    },
    message: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 10,
        lineHeight: 25
    },
    msg: {
        color: '#fff',
        fontSize: 16,
        lineHeight: 25
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


{/* <DialogHeader>
                        <DialogTitle>Declaration</DialogTitle>
                        <DialogDescription> */}
{/* <View className='flex flex-col gap-4'>
                                <Text className='text-white'> */}
{/* I am an individual investor who has net tangible assets of at least two crore rupees excluding value of my principal residence, and: */ }
{/* </Text>
                                <Text className='text-white'> */}
{/* 1. have early-stage investment experience, or
                    2. have experience as a serial entrepreneur, or
                    3. am a senior management professional(s) with at least ten years of experience. */}
{/* </Text>
                            </View> */}
{/* </DialogDescription>
                    </DialogHeader> */}