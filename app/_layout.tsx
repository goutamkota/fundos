import { Stack } from 'expo-router';
import { arrRoutes } from './index';
import { PortalHost } from '@rn-primitives/portal';

function capitalizeFirstChar(word: string) {
    return word[0].toUpperCase() + word.slice(1);
}

export default function Layout() {
    return (
        <>
            <Stack>
                <Stack.Screen name="index" options={{ headerTitle: "Home" }} />
                {arrRoutes.map((item, idx) => (
                    <Stack.Screen
                        name={item}
                        key={idx}
                        options={{
                            headerTitle: capitalizeFirstChar(item),
                        }}
                    />
                ))}
            </Stack>
            <PortalHost />
        </>
    );
}