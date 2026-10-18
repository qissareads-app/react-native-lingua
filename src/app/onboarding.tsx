import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";

export default function Onboarding() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View className="flex-1 justify-between px-6 pb-6 pt-4">
        <View className="flex-row items-center justify-center gap-2 -mt-8">
          <Image
            source={images.mascotLogo}
            resizeMode="contain"
            className="h-10 w-10"
          />
          <Text className="text-h2 text-text-primary">Qissalingo</Text>
        </View>

        <View className="gap-3">
          <Text className="text-h1 text-text-primary">
            Your AI language{"\n"}
            <Text className="text-purple">teacher.</Text>
          </Text>
          <Text className="text-body-lg text-text-secondary">
            Real conversations, personalized lessons, anytime, anywhere.
          </Text>
        </View>

        <View className="flex-1 items-center justify-center">
          <View className="relative w-full items-center justify-center">
            <View className="absolute left-6 top-6 rounded-2xl bg-[#E8F1FF] px-4 py-2">
              <Text className="text-body-md text-text-primary">Hello!</Text>
            </View>
            <View className="absolute right-4 top-0 rounded-2xl bg-[#EFEBFF] px-4 py-2">
              <Text className="text-body-md text-purple">¡Hola!</Text>
            </View>
            <View className="absolute right-2 top-24 rounded-2xl bg-[#FFEEE5] px-4 py-2">
              <Text className="text-body-md text-[#E4572E]">你好!</Text>
            </View>
            <Image
              source={images.mascotWelcome}
              resizeMode="contain"
              className="h-72 w-72"
            />
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.85}
          className="relative h-14 w-full items-center justify-center rounded-full bg-purple"
        >
          <Text className="text-h4 text-white">Get Started</Text>
          <Text className="absolute right-6 text-h4 text-white">›</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
