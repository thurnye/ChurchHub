// church-screens-details.tsx (React Native + NativeWind)

import React, { useMemo } from "react";
import { View, Text, ScrollView, Pressable, Image } from "react-native";
import {
  ArrowLeft,
  Share2,
  Bookmark,
  Calendar,
  MapPin,
  Users,
  Clock,
  Play,
} from "lucide-react-native";

import { Badge, Card, CardContent } from "@/shared/components/ui";
import { careers, conferences, volunteerPrograms, devotionals } from "@/data/mockData";

/** Small reusable Pressable button */
function AppPressable({
  label,
  onPress,
  variant = "primary",
  size = "md",
  leftIcon,
}: {
  label: string;
  onPress?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  leftIcon?: React.ReactNode;
}) {
  const pad =
    size === "sm" ? "px-3 py-2" : size === "lg" ? "px-4 py-4" : "px-4 py-3";

  const base = "rounded-xl flex-row items-center justify-center gap-2";
  const bg =
    variant === "primary"
      ? "bg-indigo-600"
      : variant === "outline"
      ? "bg-white border border-gray-300"
      : "bg-transparent";
  const text =
    variant === "primary" ? "text-white" : "text-gray-900";

  return (
    <Pressable onPress={onPress} className={`${base} ${pad} ${bg}`}>
      {leftIcon}
      <Text className={`font-semibold ${size === "sm" ? "text-sm" : "text-base"} ${text}`}>
        {label}
      </Text>
    </Pressable>
  );
}

function IconBtn({
  onPress,
  children,
  className = "",
}: {
  onPress?: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Pressable
      onPress={onPress}
      className={`w-10 h-10 rounded-full items-center justify-center ${className}`}
      hitSlop={10}
    >
      {children}
    </Pressable>
  );
}


interface DevotionalDetailScreenProps {
  devotionalId: string;
  onBack: () => void;
}

export function DevotionalDetailScreen({ devotionalId, onBack }: DevotionalDetailScreenProps) {
  const devotional = useMemo(
    () => devotionals.find((d) => d.id === devotionalId) || devotionals[0],
    [devotionalId]
  );

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white border-b border-gray-200 px-4 py-3">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-3">
            <IconBtn onPress={onBack}>
              <ArrowLeft size={20} color="#111827" />
            </IconBtn>
            <View>
              <Text className="font-semibold text-lg text-gray-900">Daily Devotional</Text>
              <Text className="text-xs text-gray-500">{devotional.date}</Text>
            </View>
          </View>

          <View className="flex-row gap-2">
            <IconBtn onPress={() => {}}>
              <Bookmark size={20} color="#111827" />
            </IconBtn>
            <IconBtn onPress={() => {}}>
              <Share2 size={20} color="#111827" />
            </IconBtn>
          </View>
        </View>
      </View>

      <ScrollView contentContainerClassName="p-4 pb-24">
        <View className="bg-white rounded-xl p-6 border border-gray-100">
          <View className="mb-3 self-start">
            <Badge variant="secondary">
              <Text className="text-xs">{devotional.category}</Text>
            </Badge>
          </View>

          <Text className="text-2xl font-bold text-gray-900 mb-4">
            {devotional.title}
          </Text>

          <View className="mb-6 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
            <Text className="text-sm font-semibold text-indigo-900 mb-2">
              {devotional.verse}
            </Text>
            <Text className="text-sm text-indigo-800 italic leading-6">
              “{devotional.verseText}”
            </Text>
          </View>

          <View className="mb-6">
            <Text className="font-semibold text-gray-900 mb-2">Reflection</Text>
            <Text className="text-gray-700 leading-6">{devotional.reflection}</Text>
          </View>

          <View className="pt-4 border-t border-gray-100 flex-row items-center justify-between">
            <View>
              <Text className="text-xs text-gray-500">Written by</Text>
              <Text className="text-sm font-medium text-gray-900">
                {devotional.author}
              </Text>
            </View>

            {!!devotional.audioUrl && (
              <AppPressable
                variant="outline"
                size="sm"
                label="Listen"
                onPress={() => {}}
                leftIcon={<Play size={16} color="#111827" />}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
