// church-screens-ministries.tsx (React Native + NativeWind) — Pressable only

import React from "react";
import { View, Text, Pressable } from "react-native";
import { GraduationCap, BookOpen, Users, Heart } from "lucide-react-native";

import { Church } from "@/data/mockData";
import { ChurchScreenTemplate } from "./ChurchScreenTemplate";
import { Card, CardContent } from "@/shared/components/ui";


interface ChurchScreenProps {
  church: Church;
  onBack: () => void;
}

function AppPressable({
  label,
  onPress,
  variant = "primary",
}: {
  label: string;
  onPress: () => void;
  variant?: "primary" | "outline" | "ghost";
}) {
  return (
    <Pressable
      onPress={onPress}
      className={[
        "w-full rounded-xl px-4 py-3 items-center justify-center",
        variant === "primary" && "bg-indigo-600",
        variant === "outline" && "border border-gray-300 bg-white",
        variant === "ghost" && "bg-transparent",
      ].join(" ")}
    >
      <Text
        className={[
          "font-semibold",
          variant === "primary" && "text-white",
          (variant === "outline" || variant === "ghost") && "text-gray-900",
        ].join(" ")}
      >
        {label}
      </Text>
    </Pressable>
  );
}

// MINISTRIES SECTION
export function ChurchFaithFormationScreen({ church }: ChurchScreenProps) {
  const programs = [
    "New Believers Class",
    "Discipleship Training",
    "Leadership Development",
    "Spiritual Mentoring",
  ];

  return (
    <ChurchScreenTemplate church={church}  title="Faith Formation" icon={GraduationCap}>
      <Card>
        <CardContent className="p-4">
          <View className="gap-4">
            <View>
              <Text className="font-semibold text-gray-900 mb-2">Growing in Faith</Text>
              <Text className="text-sm text-gray-600">
                We offer various programs to help you grow in your walk with Christ.
              </Text>
            </View>

            <View className="gap-2">
              {programs.map((program, idx) => (
                <Card key={idx} className="bg-gray-50">
                  <CardContent className="p-3">
                    <Text className="text-sm font-medium text-gray-900">{program}</Text>
                  </CardContent>
                </Card>
              ))}
            </View>
          </View>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchBibleStudyScreen({ church }: ChurchScreenProps) {
  const sessions = [
    { title: "Wednesday Night Study", time: "7:00 PM - 8:30 PM" },
    { title: "Sunday Morning Class", time: "9:00 AM - 10:00 AM" },
  ];

  return (
    <ChurchScreenTemplate church={church}  title="Bible Study / Catechism" icon={BookOpen}>
      <Card>
        <CardContent className="p-4">
          <View className="gap-4">
            <View>
              <Text className="font-semibold text-gray-900 mb-2">Bible Study Groups</Text>
              <Text className="text-sm text-gray-600">
                Join a small group for deep biblical study and fellowship.
              </Text>
            </View>

            <View className="gap-2">
              {sessions.map((s, idx) => (
                <Card key={idx} className="bg-gray-50">
                  <CardContent className="p-3">
                    <Text className="font-medium text-sm text-gray-900 mb-1">{s.title}</Text>
                    <Text className="text-xs text-gray-600">{s.time}</Text>
                  </CardContent>
                </Card>
              ))}
            </View>
          </View>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchYouthFamilyScreen({ church }: ChurchScreenProps) {
  const childrenItems = [
    "• Sunday School (Ages 4-12)",
    "• Children's Worship",
    "• Vacation Bible School",
  ];
  const youthItems = [
    "• Youth Group (Ages 13-18)",
    "• Friday Night Fellowship",
    "• Youth Camps & Retreats",
  ];

  return (
    <ChurchScreenTemplate church={church}  title="Children, Youth & Family" icon={Users}>
      <View className="gap-4">
        <Card>
          <CardContent className="p-4">
            <Text className="font-semibold text-gray-900 mb-2">Children's Ministry</Text>
            <Text className="text-sm text-gray-600 mb-3">Nurturing young hearts for Jesus.</Text>
            <View className="gap-1">
              {childrenItems.map((t, idx) => (
                <Text key={idx} className="text-sm text-gray-700">
                  {t}
                </Text>
              ))}
            </View>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <Text className="font-semibold text-gray-900 mb-2">Youth Ministry</Text>
            <Text className="text-sm text-gray-600 mb-3">Building strong foundations in faith.</Text>
            <View className="gap-1">
              {youthItems.map((t, idx) => (
                <Text key={idx} className="text-sm text-gray-700">
                  {t}
                </Text>
              ))}
            </View>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <Text className="font-semibold text-gray-900 mb-2">Family Ministry</Text>
            <Text className="text-sm text-gray-600">Strengthening families through faith.</Text>
          </CardContent>
        </Card>
      </View>
    </ChurchScreenTemplate>
  );
}

export function ChurchGroupsScreen({ church }: ChurchScreenProps) {
  const groups = [
    "Men's Fellowship",
    "Women's Ministry",
    "Senior Saints",
    "Young Adults",
    "Prayer Warriors",
    "Choir Ministry",
  ];

  return (
    <ChurchScreenTemplate church={church}  title="Church Groups / Bodies" icon={Users}>
      <View className="gap-3">
        {groups.map((group, idx) => (
          <Card key={idx}>
            <CardContent className="p-4">
              <Text className="font-medium text-gray-900 mb-2">{group}</Text>
              <Text className="text-sm text-gray-600 mb-3">Join us for fellowship and growth.</Text>

              <AppPressable label="Learn More" variant="outline" onPress={() => {}} />
            </CardContent>
          </Card>
        ))}
      </View>
    </ChurchScreenTemplate>
  );
}

export function ChurchPastoralCareScreen({ church }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate church={church}  title="Pastoral Care" icon={Heart}>
      <Card>
        <CardContent className="p-4">
          <View className="gap-4">
            <View>
              <Text className="font-semibold text-gray-900 mb-2">Pastoral Care Ministry</Text>
              <Text className="text-sm text-gray-600">
                Our pastoral care team is here to support you through life's joys and challenges.
              </Text>
            </View>

            <View className="gap-2">
              <AppPressable label="Request Prayer" variant="primary" onPress={() => {}} />
              <AppPressable label="Schedule Counseling" variant="outline" onPress={() => {}} />
              <AppPressable label="Hospital Visit Request" variant="outline" onPress={() => {}} />
            </View>
          </View>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchMembershipScreen({ church }: ChurchScreenProps) {
  const steps = [
    "Attend New Members Class",
    "Meet with Pastor",
    "Confirmation or Transfer",
    "Welcome to the Family!",
  ];

  return (
    <ChurchScreenTemplate church={church}  title="Membership & Confirmation" icon={Users}>
      <Card>
        <CardContent className="p-4">
          <View className="gap-4">
            <View>
              <Text className="font-semibold text-gray-900 mb-2">Become a Member</Text>
              <Text className="text-sm text-gray-600">
                We invite you to join our church family and participate fully in the life of our congregation.
              </Text>
            </View>

            <View>
              <Text className="font-semibold text-gray-900 mb-2">Membership Process</Text>
              <View className="gap-2">
                {steps.map((s, idx) => (
                  <View key={idx} className="flex-row items-start">
                    <Text className="text-sm text-gray-700 mr-2">{idx + 1}.</Text>
                    <Text className="text-sm text-gray-700 flex-1">{s}</Text>
                  </View>
                ))}
              </View>
            </View>

            <AppPressable label="Start Membership Process" variant="primary" onPress={() => {}} />
          </View>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}
