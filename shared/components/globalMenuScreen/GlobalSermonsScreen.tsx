import React, { useMemo, useState } from "react";
import { View, Text, Pressable, ScrollView, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ArrowLeft, Play, Video } from "lucide-react-native";
import { Button, Card, CardContent, Badge } from "@/shared/components/ui";
import { sermons } from "@/data/mockData";

interface GlobalSermonsScreenProps {
  onBack: () => void;
  // optional: onPlay?: (sermonId: string) => void;
}

type FilterKey = "All" | "Video Only" | "Audio Only" | "Recent";
const filters: FilterKey[] = ["All", "Video Only", "Audio Only", "Recent"];

export function GlobalSermonsScreen({ onBack }: GlobalSermonsScreenProps) {
  const insets = useSafeAreaInsets();
  const [activeFilter, setActiveFilter] = useState<FilterKey>("All");

  // NOTE: This keeps UI identical; wire real filtering logic later if your data supports it.
  const filteredSermons = useMemo(() => {
    if (activeFilter === "All") return sermons;

    // If your sermon model has fields like `mediaType: "video" | "audio"` or `isVideo`,
    // replace these placeholders.
    if (activeFilter === "Video Only") return sermons.filter((s) => (s as any).mediaType === "video" || (s as any).isVideo);
    if (activeFilter === "Audio Only") return sermons.filter((s) => (s as any).mediaType === "audio" || (s as any).isAudio);

    // "Recent" placeholder — keep original order unless you add a sortable date field
    return sermons;
  }, [activeFilter]);

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View style={{ paddingTop: insets.top }} className="bg-white border-b border-gray-200 px-4 py-3">
        <View className="flex-row items-center gap-3">
          <Pressable
            onPress={onBack}
            className="w-10 h-10 rounded-full items-center justify-center active:bg-gray-100"
          >
            <ArrowLeft size={20} color="#111827" />
          </Pressable>
          <Text className="font-semibold text-lg text-gray-900">All Sermons</Text>
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Filters */}
        <View className="bg-white px-4 py-3 border-b border-gray-200">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="-mx-4 px-4"
            contentContainerStyle={{ gap: 8, paddingBottom: 8 }}
          >
            {filters.map((f) => {
              const active = activeFilter === f;
              return (
                <Pressable
                  key={f}
                  onPress={() => setActiveFilter(f)}
                  className={[
                    "px-4 py-1.5 rounded-full flex-row items-center gap-1",
                    active ? "bg-indigo-600" : "bg-gray-100",
                  ].join(" ")}
                >
                  {f === "All" && <Video size={12} color={active ? "#ffffff" : "#374151"} />}
                  <Text
                    className={[
                      "text-sm font-medium whitespace-nowrap",
                      active ? "text-white" : "text-gray-700",
                    ].join(" ")}
                  >
                    {f}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>

        {/* Sermons List */}
        <View className="p-4 gap-3">
          {filteredSermons.map((sermon) => (
            <Card key={sermon.id} className="overflow-hidden">
              {/* Thumbnail */}
              <View className="relative">
                <Image source={{ uri: sermon.thumbnail }} className="w-full h-40" resizeMode="cover" />

                {sermon.isLive && (
                  <View className="absolute top-2 left-2">
                    <Badge className="bg-red-600">
                      <Text className="text-white text-xs font-semibold">LIVE</Text>
                    </Badge>
                  </View>
                )}

                <Pressable className="absolute inset-0 items-center justify-center bg-black/30 active:bg-black/40">
                  <View className="w-14 h-14 bg-white/90 rounded-full items-center justify-center">
                    <Play size={22} color="#111827" />
                  </View>
                </Pressable>
              </View>

              {/* Details */}
              <CardContent className="p-3">
                <Text className="font-medium text-gray-900 mb-1" numberOfLines={2}>
                  {sermon.title}
                </Text>
                <Text className="text-sm text-gray-600 mb-1" numberOfLines={1}>
                  {sermon.speaker}
                </Text>
                <Text className="text-xs text-gray-500 mb-2" numberOfLines={1}>
                  {sermon.church}
                </Text>

                <View className="flex-row items-center justify-between">
                  <Text className="text-xs text-gray-500">{sermon.date}</Text>
                  <Text className="text-xs text-gray-500">{sermon.duration}</Text>
                </View>
              </CardContent>
            </Card>
          ))}
        </View>

        {/* Bottom padding */}
        <View className="h-20" />
      </ScrollView>
    </View>
  );
}
