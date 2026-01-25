import { View, Text, ScrollView, Pressable, TextInput } from "react-native";
import { router } from "expo-router";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ArrowLeft, ChevronDown } from "lucide-react-native";

import { Button, Card, CardContent } from "@/shared/components/ui";

export function ReportChurchScreen() {
  const insets = useSafeAreaInsets();
  const [form, setForm] = useState({
    churchName: "",
    issueType: "Incorrect Address",
    details: "",
  });

  const handleSubmit = () => {
    console.log("Submitting report:", form);
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
          <Text className="font-semibold text-lg text-gray-900">Report Church Info</Text>
        </View>
      </View>

      <ScrollView className="flex-1 p-4" showsVerticalScrollIndicator={false}>
        <Card>
          <CardContent className="gap-4">
            {/* Church Name */}
            <View>
              <Text className="text-sm font-medium text-gray-900 mb-2">Church Name</Text>
              <TextInput
                value={form.churchName}
                onChangeText={(text) => setForm({ ...form, churchName: text })}
                className="px-3 py-3 border border-gray-300 rounded-lg text-gray-900"
                placeholder="Select or type church name"
                placeholderTextColor="#9ca3af"
              />
            </View>

            {/* Issue Type */}
            <View>
              <Text className="text-sm font-medium text-gray-900 mb-2">Issue Type</Text>
              <Pressable className="flex-row items-center justify-between px-3 py-3 border border-gray-300 rounded-lg">
                <Text className="text-gray-900">{form.issueType}</Text>
                <ChevronDown size={20} color="#6b7280" />
              </Pressable>
            </View>

            {/* Details */}
            <View>
              <Text className="text-sm font-medium text-gray-900 mb-2">Details</Text>
              <TextInput
                value={form.details}
                onChangeText={(text) => setForm({ ...form, details: text })}
                className="px-3 py-3 border border-gray-300 rounded-lg text-gray-900"
                placeholder="Please describe the issue..."
                placeholderTextColor="#9ca3af"
                multiline
                numberOfLines={4}
                textAlignVertical="top"
                style={{ minHeight: 100 }}
              />
            </View>

            <Button className="w-full" onPress={handleSubmit}>
              <Text className="text-white font-medium">Submit Report</Text>
            </Button>
          </CardContent>
        </Card>

        <View className="h-8" />
      </ScrollView>
    </View>
  );
}
