// MediaPlayerScreen.tsx (React Native + NativeWind)
// ✅ No Button component
// ✅ Uses Pressable
// ✅ Uses @react-native-community/slider (install if needed)
// ✅ Uses lucide-react-native icons
// ✅ Keeps your UI/flow: live badge, progress (non-live), volume, up-next

import React, { useMemo, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import Slider from "@react-native-community/slider";
import {
  ArrowLeft,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Share2,
  Bookmark,
  MessageCircle,
  Users,
} from "lucide-react-native";

import { sermons } from "@/data/mockData";

interface MediaPlayerScreenProps {
  sermonId: string;
  onBack: () => void;
}

export function MediaPlayerScreen({ sermonId, onBack }: MediaPlayerScreenProps) {
  const sermon = useMemo(
    () => sermons.find((s) => s.id === sermonId) || sermons[0],
    [sermonId]
  );

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(12); // percent
  const [volume, setVolume] = useState(0.75); // 0..1

  const isLive = !!sermon.isLive;
  const viewerCount = isLive ? 342 : undefined;

  const related = useMemo(
    () => sermons.filter((s) => s.id !== sermon.id).slice(0, 3),
    [sermon.id]
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      {/* Header overlay */}
      <View className="absolute top-0 left-0 right-0 z-20 px-4 pt-3 pb-3">
        <View className="max-w-md mx-auto flex-row items-center justify-between">
          <Pressable
            onPress={onBack}
            className="h-10 w-10 rounded-xl items-center justify-center"
            style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
          >
            <ArrowLeft size={20} color="#fff" />
          </Pressable>

          <View className="flex-row gap-2">
            <Pressable
              onPress={() => {}}
              className="h-10 w-10 rounded-xl items-center justify-center"
              style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
            >
              <Share2 size={20} color="#fff" />
            </Pressable>
            <Pressable
              onPress={() => {}}
              className="h-10 w-10 rounded-xl items-center justify-center"
              style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
            >
              <Bookmark size={20} color="#fff" />
            </Pressable>
          </View>
        </View>
      </View>

      <ScrollView contentContainerClassName="pb-10">
        {/* Player area */}
        <View className="relative h-[60vh] bg-black items-center justify-center">
          <Image
            source={{ uri: sermon.thumbnail }}
            className="absolute inset-0 w-full h-full opacity-40"
            resizeMode="cover"
          />

          {/* Live badges */}
          {isLive && (
            <View className="absolute top-16 left-4 flex-row gap-3">
              <View className="px-3 py-1 rounded-full bg-red-600">
                <Text className="text-white font-semibold text-xs">🔴 LIVE</Text>
              </View>

              {!!viewerCount && (
                <View
                  className="px-3 py-1 rounded-full flex-row items-center"
                  style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                >
                  <Users size={14} color="#fff" />
                  <Text className="text-white text-xs ml-1">
                    {viewerCount} watching
                  </Text>
                </View>
              )}
            </View>
          )}

          {/* Big play/pause */}
          <Pressable
            onPress={() => setIsPlaying((p) => !p)}
            className="w-20 h-20 rounded-full items-center justify-center"
            style={{ backgroundColor: "rgba(255,255,255,0.92)" }}
          >
            {isPlaying ? (
              <Pause size={40} color="#4f46e5" />
            ) : (
              <View className="ml-1">
                <Play size={40} color="#4f46e5" />
              </View>
            )}
          </Pressable>
        </View>

        {/* Controls section */}
        <View className="max-w-md mx-auto px-4 pt-6">
          {/* Title */}
          <View className="mb-6">
            <Text className="text-white text-xl font-bold mb-2">
              {sermon.title}
            </Text>
            <View className="flex-row items-center gap-2">
              <Text className="text-gray-300 text-sm">{sermon.speaker}</Text>
              <Text className="text-gray-400 text-sm">•</Text>
              <Text className="text-gray-300 text-sm">{sermon.church}</Text>
            </View>
          </View>

          {/* Progress (not live) */}
          {!isLive && (
            <View className="mb-6">
              <Slider
                value={progress}
                onValueChange={setProgress}
                minimumValue={0}
                maximumValue={100}
                step={1}
                minimumTrackTintColor="#4f46e5"
                maximumTrackTintColor="#374151"
                thumbTintColor="#ffffff"
              />
              <View className="flex-row justify-between mt-2">
                <Text className="text-gray-400 text-xs">12:34</Text>
                <Text className="text-gray-400 text-xs">{sermon.duration}</Text>
              </View>
            </View>
          )}

          {/* Playback buttons */}
          <View className="flex-row items-center justify-center gap-6 mb-6">
            <Pressable
              disabled={isLive}
              onPress={() => {}}
              className="h-12 w-12 rounded-full items-center justify-center"
              style={{
                backgroundColor: isLive
                  ? "rgba(255,255,255,0.06)"
                  : "rgba(255,255,255,0.12)",
                opacity: isLive ? 0.5 : 1,
              }}
            >
              <SkipBack size={24} color="#fff" />
            </Pressable>

            <Pressable
              onPress={() => setIsPlaying((p) => !p)}
              className="h-14 w-14 rounded-full items-center justify-center bg-indigo-600"
            >
              {isPlaying ? (
                <Pause size={24} color="#fff" />
              ) : (
                <View className="ml-0.5">
                  <Play size={24} color="#fff" />
                </View>
              )}
            </Pressable>

            <Pressable
              disabled={isLive}
              onPress={() => {}}
              className="h-12 w-12 rounded-full items-center justify-center"
              style={{
                backgroundColor: isLive
                  ? "rgba(255,255,255,0.06)"
                  : "rgba(255,255,255,0.12)",
                opacity: isLive ? 0.5 : 1,
              }}
            >
              <SkipForward size={24} color="#fff" />
            </Pressable>
          </View>

          {/* Volume */}
          <View className="mb-6">
            <View className="flex-row items-center gap-3">
              <Volume2 size={20} color="#9ca3af" />
              <View className="flex-1">
                <Slider
                  value={volume}
                  onValueChange={setVolume}
                  minimumValue={0}
                  maximumValue={1}
                  step={0.01}
                  minimumTrackTintColor="#ffffff"
                  maximumTrackTintColor="#374151"
                  thumbTintColor="#ffffff"
                />
              </View>
            </View>
          </View>

          {/* Live chat */}
          {isLive && (
            <View className="mb-6">
              <Pressable
                onPress={() => {}}
                className="w-full h-12 rounded-xl border border-gray-600 items-center justify-center flex-row"
              >
                <MessageCircle size={18} color="#fff" />
                <Text className="text-white font-semibold ml-2">
                  Open Live Chat
                </Text>
              </Pressable>
            </View>
          )}

          {/* Up next */}
          <View className="mb-10">
            <Text className="text-white font-semibold mb-3">Up Next</Text>

            <View className="gap-3">
              {related.map((r) => (
                <Pressable
                  key={r.id}
                  onPress={() => {}}
                  className="flex-row gap-3 p-3 rounded-2xl"
                  style={{ backgroundColor: "#1f2937" }} // gray-800
                >
                  <Image
                    source={{ uri: r.thumbnail }}
                    className="w-20 h-20 rounded-xl"
                    resizeMode="cover"
                  />
                  <View className="flex-1">
                    <Text
                      className="text-white font-medium text-sm mb-1"
                      numberOfLines={2}
                    >
                      {r.title}
                    </Text>
                    <Text className="text-gray-400 text-xs">{r.speaker}</Text>
                    <Text className="text-gray-400 text-xs">{r.duration}</Text>
                  </View>
                </Pressable>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

