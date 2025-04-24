import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Label } from '~/components/ui/label';
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group';

function CustomRadioGroup({ arr, value, setValue }: { arr: any, value: string; setValue: (value: string) => void }) {

    const handleLabelPress = (label: string) => () => {
        setValue(label);
    };

    return (
        <View style={styles.container}>
            <RadioGroup value={value} onValueChange={setValue} style={styles.radioGroup}>{
                arr.map((item: any) => (
                    <RadioGroupItemWithLabel
                        key={item.value}
                        value={item.value}
                        onLabelPress={handleLabelPress(item.value)}
                        label={item.label}
                        description={item.description}
                    />
                ))
            }
            </RadioGroup>
        </View>
    );
}

function RadioGroupItemWithLabel({
    value,
    onLabelPress,
    label,
    description,
}: {
    value: string;
    onLabelPress: () => void;
    label: string;
    description: string;
}) {
    return (
        <Pressable style={styles.itemContainer} onPress={onLabelPress}>
            <View style={styles.textContainer}>
                <Label nativeID={`label-for-${value}`} style={styles.label}>
                    {label}
                </Label>
                <RadioGroupItem aria-labelledby={`label-for-${value}`} value={value} />
            </View>
            <Text style={styles.description}>{description}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1a1a1a',
        justifyContent: 'center',
    },
    radioGroup: {
        gap: 15,
    },
    itemContainer: {
        backgroundColor: '#2a2a2a',
        padding: 15,
        justifyContent: 'space-between',
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    label: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    description: {
        color: '#ccc',
        fontSize: 14,
        marginTop: 5,
    },
});

export default CustomRadioGroup;
