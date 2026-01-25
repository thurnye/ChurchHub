import React, { useMemo, useState } from "react";
import { View, Text, Pressable, ScrollView, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ArrowLeft, Calendar, MapPin, Clock } from "lucide-react-native";
import { Button, Card, CardContent, Badge } from "@/shared/components/ui";
import { events } from "@/data/mockData";

interface GlobalEventsScreenProps {
  onBack: () => void;
}

type FilterKey = "All" | "This Week" | "This Month" | "Pentecostal" | "Anglican";

const filters: FilterKey[] = ["All", "This Week", "This Month", "Pentecostal", "Anglican"];

export function GlobalEventsScreen({ onBack }: GlobalEventsScreenProps) {
  const insets = useSafeAreaInsets();
  const [activeFilter, setActiveFilter] = useState<FilterKey>("All");

  // NOTE: denomination filters work now; date filters are placeholder until you add date logic.
  const filteredEvents = useMemo(() => {
    if (activeFilter === "All") return events;

    if (activeFilter === "Pentecostal" || activeFilter === "Anglican") {
      return events.filter((e) => e.denomination === activeFilter);
    }

    return events;
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
          <Text className="font-semibold text-lg text-gray-900">All Events</Text>
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
                    "px-4 py-1.5 rounded-full",
                    active ? "bg-indigo-600" : "bg-gray-100",
                  ].join(" ")}
                >
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

        {/* Events List */}
        <View className="p-4 gap-3">
          {filteredEvents.map((event) => (
            <Card key={event.id}>
              <CardContent className="p-0">
                {/* Main row */}
                <View className="flex-row gap-3 p-4">
                  <Image source={{ uri: event.image }} className="w-20 h-20 rounded-lg" resizeMode="cover" />

                  <View className="flex-1">
                    <Text className="font-semibold text-gray-900 mb-1" numberOfLines={1}>
                      {event.title}
                    </Text>

                    <Text className="text-sm text-gray-600 mb-2" numberOfLines={1}>
                      {event.church}
                    </Text>

                    <View className="flex-row items-center gap-2 mb-2">
                      <View className="flex-row items-center gap-1">
                        <Calendar size={12} color="#6b7280" />
                        <Text className="text-xs text-gray-500">{event.date}</Text>
                      </View>

                      <View className="flex-row items-center gap-1">
                        <Clock size={12} color="#6b7280" />
                        <Text className="text-xs text-gray-500">{event.time}</Text>
                      </View>
                    </View>

                    <Badge variant="secondary">
                      <Text className="text-xs text-gray-700">{event.denomination}</Text>
                    </Badge>
                  </View>
                </View>

                {/* Actions */}
                <View className="border-t border-gray-100 p-3 flex-row gap-2">
                  <View className="flex-1">
                    <Button size="sm" className="w-full">
                      <Text className="text-white font-medium">RSVP</Text>
                    </Button>
                  </View>

                  <View className="flex-1">
                    <Button size="sm" variant="outline" className="w-full">
                      <View className="flex-row items-center justify-center gap-1">
                        <MapPin size={14} color="#111827" />
                        <Text className="text-sm text-gray-900 font-medium">Directions</Text>
                      </View>
                    </Button>
                  </View>
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
