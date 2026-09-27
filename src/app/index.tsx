import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center gap-2 bg-background px-6">
      <Text className="text-h1 text-purple">lingua</Text>
      <Text className="text-body-md text-text-secondary text-center">
        Learn a language for free
      </Text>
    </View>
  );
}
