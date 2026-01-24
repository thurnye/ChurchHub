import { View, Text, ScrollView, Pressable } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import {
  ArrowLeft,
  Church,
  Book,
  Users,
  ChevronRight,
} from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Card, CardContent, Badge } from "@/shared/components/ui";
import { denominations, churches } from "@/data/mockData";

export function DenominationScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const insets = useSafeAreaInsets();

  const denomination = denominations.find((d) => d.id === id);
  const denominationChurches = churches.filter(
    (c) => c.denomination === denomination?.name
  );

  if (!denomination) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-gray-500">Denomination not found</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View
        style={{ paddingTop: insets.top }}
        className="bg-indigo-600 pb-6"
      >
        <View className="flex-row items-center px-4 py-2">
          <Pressable
            onPress={() => router.back()}
            className="w-10 h-10 bg-white/20 rounded-full items-center justify-center mr-3"
          >
            <ArrowLeft size={20} color="#ffffff" />
          </Pressable>
          <Text className="text-white font-semibold text-lg flex-1">
            {denomination.name}
          </Text>
        </View>
        <View className="px-4 mt-4">
          <View className="flex-row items-center gap-2">
            <Church size={20} color="#ffffff" />
            <Text className="text-white/90">
              {denomination.churchCount.toLocaleString()} churches worldwide
            </Text>
          </View>
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* About Section */}
        <View className="px-4 py-4">
          <Card>
            <CardContent>
              <View className="flex-row items-center gap-2 mb-3">
                <Book size={18} color="#4f46e5" />
                <Text className="font-semibold text-gray-900">About</Text>
              </View>
              <Text className="text-sm text-gray-600 leading-5">
                {denomination.description}
              </Text>
            </CardContent>
          </Card>
        </View>

        {/* Core Beliefs */}
        <View className="px-4 pb-4">
          <Card>
            <CardContent>
              <Text className="font-semibold text-gray-900 mb-3">
                Core Beliefs
              </Text>
              <View className="gap-3">
                {denomination.beliefs.map((belief, index) => (
                  <View key={index} className="flex-row items-start gap-3">
                    <View className="w-6 h-6 bg-indigo-100 rounded-full items-center justify-center mt-0.5">
                      <Text className="text-xs font-medium text-indigo-600">
                        {index + 1}
                      </Text>
                    </View>
                    <Text className="flex-1 text-sm text-gray-600">
                      {belief}
                    </Text>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>
        </View>

        {/* Churches in This Denomination */}
        <View className="px-4 pb-4">
          <View className="flex-row items-center gap-2 mb-3">
            <Users size={18} color="#4f46e5" />
            <Text className="font-semibold text-gray-900">
              {denomination.name} Churches Near You
            </Text>
          </View>

          {denominationChurches.length > 0 ? (
            <View className="gap-3">
              {denominationChurches.map((church) => (
                <Pressable
                  key={church.id}
                  onPress={() => router.push(`/church/${church.id}`)}
                >
                  <Card>
                    <CardContent>
                      <View className="flex-row items-center justify-between">
                        <View className="flex-1">
                          <Text className="font-medium text-gray-900 mb-1">
                            {church.name}
                          </Text>
                          <Text className="text-sm text-gray-500">
                            {church.distance} away
                          </Text>
                        </View>
                        <ChevronRight size={20} color="#9ca3af" />
                      </View>
                    </CardContent>
                  </Card>
                </Pressable>
              ))}
            </View>
          ) : (
            <Card>
              <CardContent className="items-center py-8">
                <Church size={48} color="#9ca3af" />
                <Text className="text-gray-500 mt-3">
                  No churches found in your area
                </Text>
              </CardContent>
            </Card>
          )}
        </View>

        {/* Bottom padding */}
        <View className="h-8" />
      </ScrollView>
    </View>
  );
}
