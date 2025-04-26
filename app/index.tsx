import { Link, RelativePathString } from "expo-router"
import { Text, View } from "react-native"
import "../global.css"
export const arrRoutes: string[] = ['get_started_screen', 'invitation_screen', 'phone_number_screen', 'otp_input_screen', 'full_name_screen', 'email_screen', 'choose_investor_screen', 'kyc_start_screen', 'pan_screen', 'aadhaar_screen', 'professional_background_screen', 'contibution_screen', 'profile_pic_screen']

export default function Home() {
    return (
        <>
            <View className="flex gap-4 flex-row m-4 flex-wrap">
                {
                    arrRoutes.map((item, index) => (
                        <Link key={index} href={`/${item}` as RelativePathString}>
                            <View className="px-5 py-3 border rounded-md">
                                <Text>{item.toUpperCase()}</Text>
                            </View>
                        </Link>
                    ))
                }
            </View>
        </>
    )
}

