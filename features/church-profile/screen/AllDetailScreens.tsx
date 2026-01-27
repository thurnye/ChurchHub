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

// -------------------------
// Career List Screen
// -------------------------
interface CareerListScreenProps {
  onBack: () => void;
  onViewCareer: (careerId: string) => void;
}

export function CareerListScreen({ onBack, onViewCareer }: CareerListScreenProps) {
  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white border-b border-gray-200 px-4 py-3">
        <View className="flex-row items-center gap-3">
          <IconBtn onPress={onBack} className="bg-transparent">
            <ArrowLeft size={20} color="#111827" />
          </IconBtn>
          <Text className="font-semibold text-lg text-gray-900">
            Career Opportunities
          </Text>
        </View>
      </View>

      <ScrollView contentContainerClassName="p-4 gap-3 pb-24">
        {careers.map((career) => (
          <Pressable
            key={career.id}
            onPress={() => onViewCareer(career.id)}
            className="bg-white rounded-xl p-4 border border-gray-100"
          >
            <View className="flex-row items-start justify-between mb-2">
              <View className="flex-1 pr-2">
                <Text className="font-semibold text-gray-900 mb-1">
                  {career.title}
                </Text>
                <Text className="text-sm text-gray-600 mb-2">
                  {career.church}
                </Text>
              </View>

              <Badge variant="secondary">
                <Text className="text-xs">{career.type}</Text>
              </Badge>
            </View>

            <View className="flex-row items-center gap-2">
              <Text className="text-xs text-gray-500">{career.department}</Text>
              <Text className="text-xs text-gray-400">•</Text>
              <Text className="text-xs text-gray-500">Posted {career.postedDate}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

// -------------------------
// Career Detail Screen
// -------------------------
interface CareerDetailScreenProps {
  careerId: string;
  onBack: () => void;
}

export function CareerDetailScreen({ careerId, onBack }: CareerDetailScreenProps) {
  const career = useMemo(
    () => careers.find((c) => c.id === careerId) || careers[0],
    [careerId]
  );

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white border-b border-gray-200 px-4 py-3">
        <View className="flex-row items-center gap-3">
          <IconBtn onPress={onBack}>
            <ArrowLeft size={20} color="#111827" />
          </IconBtn>
          <Text className="font-semibold text-lg text-gray-900">Job Details</Text>
        </View>
      </View>

      <ScrollView contentContainerClassName="p-4 pb-28">
        <View className="bg-white rounded-xl p-6 border border-gray-100 mb-4">
          <View className="mb-3 self-start">
            <Badge variant="secondary">
              <Text className="text-xs">{career.type}</Text>
            </Badge>
          </View>

          <Text className="text-xl font-bold text-gray-900 mb-2">
            {career.title}
          </Text>
          <Text className="text-gray-600 mb-4">{career.church}</Text>

          <View className="gap-3 mb-6">
            <View className="flex-row items-center gap-2">
              <Users size={16} color="#6b7280" />
              <Text className="text-sm text-gray-600">{career.department}</Text>
            </View>
            <View className="flex-row items-center gap-2">
              <MapPin size={16} color="#6b7280" />
              <Text className="text-sm text-gray-600">{career.location}</Text>
            </View>
            <View className="flex-row items-center gap-2">
              <Calendar size={16} color="#6b7280" />
              <Text className="text-sm text-gray-600">Posted {career.postedDate}</Text>
            </View>
          </View>

          <View className="mb-6">
            <Text className="font-semibold text-gray-900 mb-2">Description</Text>
            <Text className="text-sm text-gray-600 leading-6">{career.description}</Text>
          </View>

          <View>
            <Text className="font-semibold text-gray-900 mb-2">Requirements</Text>
            <View className="gap-2">
              {career.requirements.map((req: string, index: number) => (
                <View key={index} className="flex-row items-start gap-2">
                  <Text className="text-indigo-600 mt-1">•</Text>
                  <Text className="text-sm text-gray-600 flex-1">{req}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom CTA */}
      <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <AppPressable label="Apply for Position" size="lg" onPress={() => {}} />
      </View>
    </View>
  );
}

// -------------------------
// Conference Detail Screen
// -------------------------
interface ConferenceDetailScreenProps {
  conferenceId: string;
  onBack: () => void;
}

export function ConferenceDetailScreen({ conferenceId, onBack }: ConferenceDetailScreenProps) {
  const conference = useMemo(
    () => conferences.find((c) => c.id === conferenceId) || conferences[0],
    [conferenceId]
  );

  return (
    <View className="flex-1 bg-gray-50">
      <View className="relative">
        <Image source={{ uri: conference.image }} className="w-full h-56" resizeMode="cover" />

        <View className="absolute top-4 left-4">
          <IconBtn onPress={onBack} className="bg-white/90">
            <ArrowLeft size={20} color="#111827" />
          </IconBtn>
        </View>
      </View>

      <ScrollView
        contentContainerClassName="pb-28"
        className="-mt-6"
      >
        <View className="bg-white rounded-t-3xl px-4 pt-6 pb-6">
          <Text className="text-2xl font-bold text-gray-900 mb-2">
            {conference.title}
          </Text>
          <Text className="text-lg text-indigo-600 mb-4">{conference.theme}</Text>

          <View className="gap-4 mb-6">
            <View className="flex-row items-start gap-3">
              <Calendar size={20} color="#4f46e5" />
              <View>
                <Text className="font-medium text-gray-900">Dates</Text>
                <Text className="text-sm text-gray-600">{conference.dates}</Text>
              </View>
            </View>

            <View className="flex-row items-start gap-3">
              <MapPin size={20} color="#4f46e5" />
              <View>
                <Text className="font-medium text-gray-900">Location</Text>
                <Text className="text-sm text-gray-600">{conference.location}</Text>
              </View>
            </View>
          </View>

          <View className="mb-6">
            <Text className="font-semibold text-gray-900 mb-2">About</Text>
            <Text className="text-sm text-gray-600 leading-6">{conference.description}</Text>
          </View>

          <View className="mb-6">
            <Text className="font-semibold text-gray-900 mb-2">Speakers</Text>
            <View className="flex-row flex-wrap gap-2">
              {conference.speakers.map((speaker: string, index: number) => (
                <Badge key={index} variant="outline">
                  <Text className="text-xs">{speaker}</Text>
                </Badge>
              ))}
            </View>
          </View>

          <View className="mb-6 p-4 bg-gray-50 rounded-xl">
            <Text className="font-semibold text-gray-900 mb-2">Registration</Text>
            <Text className="text-sm text-gray-600 mb-2">{conference.registrationFee}</Text>
            <Text className="text-xs text-gray-500">{conference.accommodation}</Text>
          </View>
        </View>
      </ScrollView>

      <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <AppPressable label="Register Now" size="lg" onPress={() => {}} />
      </View>
    </View>
  );
}

// -------------------------
// Volunteer Program Detail Screen
// -------------------------
interface VolunteerProgramDetailScreenProps {
  programId: string;
  onBack: () => void;
}

export function VolunteerProgramDetailScreen({
  programId,
  onBack,
}: VolunteerProgramDetailScreenProps) {
  const program = useMemo(
    () => volunteerPrograms.find((p) => p.id === programId) || volunteerPrograms[0],
    [programId]
  );

  return (
    <View className="flex-1 bg-gray-50">
      <View className="relative">
        <Image source={{ uri: program.image }} className="w-full h-56" resizeMode="cover" />
        <View className="absolute top-4 left-4">
          <IconBtn onPress={onBack} className="bg-white/90">
            <ArrowLeft size={20} color="#111827" />
          </IconBtn>
        </View>
      </View>

      <ScrollView contentContainerClassName="pb-28" className="-mt-6">
        <View className="bg-white rounded-t-3xl px-4 pt-6 pb-6">
          <View className="mb-3 self-start">
            <Badge variant="secondary">
              <Text className="text-xs">{program.category}</Text>
            </Badge>
          </View>

          <Text className="text-2xl font-bold text-gray-900 mb-2">{program.title}</Text>
          <Text className="text-gray-600 mb-4">{program.church}</Text>

          <View className="gap-4 mb-6">
            <View className="flex-row items-start gap-3">
              <Clock size={20} color="#4f46e5" />
              <View>
                <Text className="font-medium text-gray-900">Time Commitment</Text>
                <Text className="text-sm text-gray-600">{program.timeCommitment}</Text>
              </View>
            </View>
          </View>

          <View className="mb-6">
            <Text className="font-semibold text-gray-900 mb-2">Description</Text>
            <Text className="text-sm text-gray-600 leading-6">{program.description}</Text>
          </View>

          <View className="mb-6">
            <Text className="font-semibold text-gray-900 mb-2">Skills Needed</Text>
            <View className="flex-row flex-wrap gap-2">
              {program.skillsNeeded.map((skill: string, index: number) => (
                <Badge key={index} variant="outline">
                  <Text className="text-xs">{skill}</Text>
                </Badge>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <AppPressable label="Apply to Volunteer" size="lg" onPress={() => {}} />
      </View>
    </View>
  );
}

// -------------------------
// Devotional Detail Screen
// -------------------------
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
