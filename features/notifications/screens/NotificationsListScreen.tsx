// NotificationsListScreen.tsx (React Native + NativeWind)
// ✅ No Button/Badge components — uses Pressable + Text
// ✅ lucide-react-native icons
// ✅ Filter chips + "mark all read" + unread indicator + empty state

import React, { useMemo, useState } from "react";
import { SafeAreaView, View, Text, Pressable, ScrollView } from "react-native";
import { ArrowLeft, Bell, CheckCheck } from "lucide-react-native";
import { notifications as mockNotifications } from "@/data/mockData";

interface NotificationsListScreenProps {
  onBack: () => void;
  onViewNotification: (notificationId: string) => void;
}

type Filter = "all" | "church" | "event" | "community";

export function NotificationsListScreen({
  onBack,
  onViewNotification,
}: NotificationsListScreenProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const [items, setItems] = useState(() => mockNotifications);

  const unreadCount = useMemo(() => items.filter((n) => !n.read).length, [items]);

  const filteredNotifications = useMemo(() => {
    return items.filter((notification) => {
      if (filter === "all") return true;
      if (filter === "church")
        return (
          notification.sourceType === "church" ||
          notification.sourceType === "pastor"
        );
      if (filter === "event") return notification.sourceType === "event";
      if (filter === "community") return notification.sourceType === "group";
      return true;
    });
  }, [items, filter]);

  const markAllRead = () => {
    setItems((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const getIconTheme = (sourceType: string) => {
    switch (sourceType) {
      case "church":
        return { bg: "bg-indigo-100", color: "#4f46e5" };
      case "pastor":
        return { bg: "bg-purple-100", color: "#7c3aed" };
      case "event":
        return { bg: "bg-green-100", color: "#16a34a" };
      case "group":
        return { bg: "bg-amber-100", color: "#d97706" };
      default:
        return { bg: "bg-gray-100", color: "#6b7280" };
    }
  };

  const Chip = ({
    label,
    value,
  }: {
    label: string;
    value: Filter;
  }) => {
    const active = filter === value;
    return (
      <Pressable
        onPress={() => setFilter(value)}
        className={`px-4 py-2 rounded-full mr-2 ${
          active ? "bg-indigo-600" : "bg-gray-100"
        }`}
      >
        <Text className={`text-sm font-medium ${active ? "text-white" : "text-gray-700"}`}>
          {label}
        </Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white border-b border-gray-200 px-4 py-3">
        <View className="flex-row items-center justify-between mb-3">
          <View className="flex-row items-center gap-3">
            <Pressable
              onPress={onBack}
              className="h-10 w-10 rounded-xl items-center justify-center"
              style={{ backgroundColor: "rgba(0,0,0,0.04)" }}
            >
              <ArrowLeft size={20} color="#111827" />
            </Pressable>

            <View>
              <Text className="font-semibold text-lg text-gray-900">
                Notifications
              </Text>
              {unreadCount > 0 && (
                <Text className="text-xs text-gray-500">{unreadCount} unread</Text>
              )}
            </View>
          </View>

          <Pressable
            onPress={markAllRead}
            className="flex-row items-center px-3 py-2 rounded-xl"
            style={{ backgroundColor: "rgba(79,70,229,0.08)" }}
            disabled={items.length === 0 || unreadCount === 0}
          >
            <CheckCheck size={16} color="#4f46e5" />
            <Text className="ml-2 text-sm font-medium text-indigo-600">
              Mark all read
            </Text>
          </Pressable>
        </View>

        {/* Filters */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerClassName="pr-4"
        >
          <Chip label="All" value="all" />
          <Chip label="Church" value="church" />
          <Chip label="Event" value="event" />
          <Chip label="Community" value="community" />
        </ScrollView>
      </View>

      {/* List */}
      <ScrollView contentContainerClassName="p-4 pb-10">
        {filteredNotifications.length > 0 ? (
          <View className="gap-2">
            {filteredNotifications.map((notification) => {
              const isUnread = !notification.read;
              const theme = getIconTheme(notification.sourceType);

              return (
                <Pressable
                  key={notification.id}
                  onPress={() => onViewNotification(notification.id)}
                  className={`bg-white rounded-2xl p-4 ${
                    isUnread ? "shadow-sm" : ""
                  }`}
                  style={
                    isUnread
                      ? { borderLeftWidth: 4, borderLeftColor: "#4f46e5" }
                      : { borderLeftWidth: 4, borderLeftColor: "transparent" }
                  }
                >
                  <View className="flex-row items-start gap-3">
                    <View className={`p-2 rounded-full ${theme.bg}`}>
                      <Bell size={16} color={theme.color} />
                    </View>

                    <View className="flex-1">
                      <View className="flex-row items-start justify-between gap-2 mb-1">
                        <Text className="font-semibold text-sm text-gray-900 flex-1">
                          {notification.title}
                        </Text>
                        {isUnread && (
                          <View className="w-2 h-2 rounded-full bg-indigo-600 mt-1" />
                        )}
                      </View>

                      <Text className="text-sm text-gray-600 mb-2">
                        {notification.message}
                      </Text>

                      <View className="flex-row items-center justify-between">
                        <Text className="text-xs text-gray-500">
                          {notification.timestamp}
                        </Text>

                        {!!notification.actionLabel && (
                          <Text className="text-xs text-indigo-600 font-medium">
                            {notification.actionLabel} →
                          </Text>
                        )}
                      </View>
                    </View>
                  </View>
                </Pressable>
              );
            })}
          </View>
        ) : (
          <View className="items-center justify-center py-12 px-4">
            <View className="w-16 h-16 rounded-full bg-gray-100 items-center justify-center mb-4">
              <Bell size={32} color="#9ca3af" />
            </View>
            <Text className="text-gray-500 text-center">
              No notifications in this category
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
