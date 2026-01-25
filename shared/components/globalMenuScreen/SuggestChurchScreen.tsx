import { View, Text, ScrollView, Pressable, TextInput } from "react-native";
import { router } from "expo-router";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ArrowLeft, ChevronDown } from "lucide-react-native";

import { Button, Card, CardContent } from "@/shared/components/ui";

export function SuggestChurchScreen() {
  const insets = useSafeAreaInsets();
  const [form, setForm] = useState({
    churchName: "",
    denomination: "",
    address: "",
    phone: "",
    website: "",
    notes: "",
  });

  const handleSubmit = () => {
    console.log("Submitting suggestion:", form);
    router.back();
  };

  return (
    <View className="flex-1 bg-gray-50" style={{ paddingTop: insets.top }}>
      {/* Header */}
      <View className="bg-white border-b border-gray-200 px-4 py-3">
        <View className="flex-row items-center gap-3">
          <Pressable
            onPress={() => router.back()}
            className="w-10 h-10 items-center justify-center rounded-full active:bg-gray-100"
          >
            <ArrowLeft size={20} color="#111827" />
          </Pressable>
          <Text className="font-semibold text-lg text-gray-900">Suggest a Church</Text>
        </View>
      </View>

      <ScrollView className="flex-1 p-4" showsVerticalScrollIndicator={false}>
        <Text className="text-sm text-gray-600 mb-4">
          Help us grow our directory by suggesting a church in your area.
        </Text>

        <Card>
          <CardContent className="gap-4">
            {/* Church Name */}
            <View>
              <Text className="text-sm font-medium text-gray-900 mb-2">Church Name *</Text>
              <TextInput
                value={form.churchName}
                onChangeText={(text) => setForm({ ...form, churchName: text })}
                className="px-3 py-3 border border-gray-300 rounded-lg text-gray-900"
                placeholder="Enter church name"
                placeholderTextColor="#9ca3af"
              />
            </View>

            {/* Denomination */}
            <View>
              <Text className="text-sm font-medium text-gray-900 mb-2">Denomination *</Text>
              <Pressable className="flex-row items-center justify-between px-3 py-3 border border-gray-300 rounded-lg">
                <Text className={form.denomination ? "text-gray-900" : "text-gray-400"}>
                  {form.denomination || "Select denomination"}
                </Text>
                <ChevronDown size={20} color="#6b7280" />
              </Pressable>
            </View>

            {/* Address */}
            <View>
              <Text className="text-sm font-medium text-gray-900 mb-2">Address *</Text>
              <TextInput
                value={form.address}
                onChangeText={(text) => setForm({ ...form, address: text })}
                className="px-3 py-3 border border-gray-300 rounded-lg text-gray-900"
                placeholder="Enter address"
                placeholderTextColor="#9ca3af"
              />
            </View>

            {/* Phone */}
            <View>
              <Text className="text-sm font-medium text-gray-900 mb-2">Phone</Text>
              <TextInput
                value={form.phone}
                onChangeText={(text) => setForm({ ...form, phone: text })}
                className="px-3 py-3 border border-gray-300 rounded-lg text-gray-900"
                placeholder="Enter phone number"
                placeholderTextColor="#9ca3af"
                keyboardType="phone-pad"
              />
            </View>

            {/* Website */}
            <View>
              <Text className="text-sm font-medium text-gray-900 mb-2">Website</Text>
              <TextInput
                value={form.website}
                onChangeText={(text) => setForm({ ...form, website: text })}
                className="px-3 py-3 border border-gray-300 rounded-lg text-gray-900"
                placeholder="Enter website URL"
                placeholderTextColor="#9ca3af"
                keyboardType="url"
                autoCapitalize="none"
              />
            </View>

            {/* Notes */}
            <View>
              <Text className="text-sm font-medium text-gray-900 mb-2">Additional Notes</Text>
              <TextInput
                value={form.notes}
                onChangeText={(text) => setForm({ ...form, notes: text })}
                className="px-3 py-3 border border-gray-300 rounded-lg text-gray-900"
                placeholder="Any additional information..."
                placeholderTextColor="#9ca3af"
                multiline
                numberOfLines={3}
                textAlignVertical="top"
                style={{ minHeight: 80 }}
              />
            </View>

            <Button className="w-full" onPress={handleSubmit}>
              <Text className="text-white font-medium">Submit Suggestion</Text>
            </Button>
          </CardContent>
        </Card>

        <View className="h-8" />
      </ScrollView>
    </View>
  );
}
