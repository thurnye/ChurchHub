// NotificationDetailScreen.tsx (React Native + NativeWind)
// ✅ No Button component (uses Pressable)
// ✅ Keeps your shadcn-like look (Badge-like pill styles)
// ✅ lucide-react-native icons

import React, { useMemo } from "react";
import { SafeAreaView, View, Text, Pressable, ScrollView } from "react-native";
import { ArrowLeft, Bell } from "lucide-react-native";
import { notifications } from "@/data/mockData";

interface NotificationDetailScreenProps {
  notificationId: string;
  onBack: () => void;
  onActionPress?: (notificationId: string) => void; // optional
}

export function NotificationDetailScreen({
  notificationId,
  onBack,
  onActionPress,
}: NotificationDetailScreenProps) {
  const notification = useMemo(
    () => notifications.find((n) => n.id === notificationId) || notifications[0],
    [notificationId]
  );

  const getSourceTypeTheme = (type: string) => {
    switch (type) {
      case "church":
        return { pillBg: "bg-indigo-100", pillText: "text-indigo-700", iconBg: "bg-indigo-100", icon: "#4f46e5" };
      case "pastor":
        return { pillBg: "bg-purple-100", pillText: "text-purple-700", iconBg: "bg-purple-100", icon: "#7c3aed" };
      case "event":
        return { pillBg: "bg-green-100", pillText: "text-green-700", iconBg: "bg-green-100", icon: "#16a34a" };
      case "group":
        return { pillBg: "bg-amber-100", pillText: "text-amber-700", iconBg: "bg-amber-100", icon: "#d97706" };
      default:
        return { pillBg: "bg-gray-100", pillText: "text-gray-700", iconBg: "bg-gray-100", icon: "#6b7280" };
    }
  };

  const getSourceTypeLabel = (type: string) => {
    switch (type) {
      case "church":
        return "Church Update";
      case "pastor":
        return "Pastor Message";
      case "event":
        return "Event Notification";
      case "group":
        return "Group Update";
      default:
        return "Notification";
    }
  };

  const theme = getSourceTypeTheme(notification.sourceType);

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white border-b border-gray-200 px-4 py-3">
        <View className="flex-row items-center gap-3">
          <Pressable
            onPress={onBack}
            className="h-10 w-10 rounded-xl items-center justify-center"
            style={{ backgroundColor: "rgba(0,0,0,0.04)" }}
          >
            <ArrowLeft size={20} color="#111827" />
          </Pressable>

          <Text className="font-semibold text-lg text-gray-900">Notification</Text>
        </View>
      </View>

      <ScrollView contentContainerClassName="p-4 pb-10">
        {/* Main card */}
        <View className="bg-white rounded-2xl p-6 shadow-sm">
          {/* Icon + Type badge */}
          <View className="flex-row items-center gap-3 mb-4">
            <View className={`p-3 rounded-full ${theme.iconBg}`}>
              <Bell size={24} color={theme.icon} />
            </View>

            <View className="flex-1">
              <View className={`self-start px-3 py-1 rounded-full ${theme.pillBg}`}>
                <Text className={`text-xs font-semibold ${theme.pillText}`}>
                  {getSourceTypeLabel(notification.sourceType)}
                </Text>
              </View>
            </View>
          </View>

          {/* Title */}
          <Text className="text-xl font-bold text-gray-900 mb-2">
            {notification.title}
          </Text>

          {/* Meta */}
          <View className="flex-row items-center flex-wrap gap-2 mb-4">
            <Text className="text-sm text-gray-500">{notification.source}</Text>
            <Text className="text-sm text-gray-400">•</Text>
            <Text className="text-sm text-gray-500">{notification.timestamp}</Text>
          </View>

          {/* Message */}
          <View className="mb-6">
            <Text className="text-gray-700 leading-relaxed">
              {notification.message}
            </Text>
          </View>

          {/* Action */}
          {!!notification.actionType && !!notification.actionLabel && (
            <View className="pt-4 border-t border-gray-100">
              <Pressable
                onPress={() => onActionPress?.(notification.id)}
                className="w-full h-12 rounded-xl bg-indigo-600 items-center justify-center"
              >
                <Text className="text-white font-semibold">
                  {notification.actionLabel}
                </Text>
              </Pressable>
            </View>
          )}
        </View>

        {/* Related info */}
        <View className="mt-4 bg-white rounded-2xl p-4 shadow-sm">
          <Text className="font-semibold text-gray-900 mb-2">
            About {notification.source}
          </Text>
          <Text className="text-sm text-gray-600 leading-relaxed">
            Stay connected with {notification.source} by enabling notifications for important updates,
            events, and announcements.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
