import React from "react";
import { View, Text } from "react-native";
import {
  Users,
  Heart,
  HeartHandshake,
} from "lucide-react-native";

import { Church } from "@/data/mockData";
import { ChurchScreenTemplate } from "./ChurchScreenTemplate";
import { Card, CardContent, Button } from "@/shared/components/ui";

interface ChurchScreenProps {
  church: Church;
}

// COMMUNITY SECTION
export function ChurchCommunityProgramsScreen({ church }: ChurchScreenProps) {
  const programs = ["Literacy Program", "After School Care", "Senior Support", "Job Training"];

  return (
    <ChurchScreenTemplate
      church={church}
      title="Community Programs"
      icon={HeartHandshake}
    >
      <View className="gap-3">
        {programs.map((program, idx) => (
          <Card key={idx}>
            <CardContent className="p-4">
              <Text className="font-medium text-gray-900 mb-2">{program}</Text>
              <Text className="text-sm text-gray-600 mb-3">
                Serving our local community with love.
              </Text>
              <Button size="sm" variant="outline" className="w-full">
                <Text className="text-gray-900 font-medium">Learn More</Text>
              </Button>
            </CardContent>
          </Card>
        ))}
      </View>
    </ChurchScreenTemplate>
  );
}

export function ChurchOutreachScreen({ church}: ChurchScreenProps) {
  const items = [
    "Street Evangelism",
    "Prison Ministry",
    "Hospital Visitation",
    "Community Clean-up",
    "Homeless Support",
  ];

  return (
    <ChurchScreenTemplate
      church={church}
      title="Outreach & Charity"
      icon={Heart}
    >
      <Card>
        <CardContent className="p-4">
          <View className="mb-4">
            <Text className="font-semibold text-gray-900 mb-2">
              Our Outreach Ministries
            </Text>
            <Text className="text-sm text-gray-600">
              Extending God's love to our community and beyond.
            </Text>
          </View>

          <View className="gap-2 mb-4">
            {items.map((t) => (
              <Text key={t} className="text-sm text-gray-900">
                • {t}
              </Text>
            ))}
          </View>

          <Button className="w-full">
            <Text className="text-white font-medium">Join an Outreach</Text>
          </Button>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchFoodBanksScreen({ church}: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate
      church={church}
      title="Food Banks / Drop-in"
      icon={HeartHandshake}
    >
      <Card>
        <CardContent className="p-4">
          <View className="mb-4">
            <Text className="font-semibold text-gray-900 mb-2">
              Food Bank Ministry
            </Text>
            <Text className="text-sm text-gray-600">
              Providing food assistance to families in need.
            </Text>
          </View>

          <View className="bg-indigo-50 p-3 rounded-xl mb-4">
            <Text className="font-medium text-sm text-gray-900 mb-2">
              Operating Hours
            </Text>
            <Text className="text-sm text-gray-800">Wednesdays & Saturdays</Text>
            <Text className="text-sm text-gray-800">10:00 AM - 2:00 PM</Text>
          </View>

          <View>
            <Text className="font-semibold text-gray-900 mb-2">How to Help</Text>
            <View className="gap-2">
              <Button size="sm" className="w-full">
                <Text className="text-white font-medium">Donate Food</Text>
              </Button>
              <Button size="sm" variant="outline" className="w-full">
                <Text className="text-gray-900 font-medium">Volunteer</Text>
              </Button>
            </View>
          </View>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchHealthCounselingScreen({ church}: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate
      church={church}
      title="Health & Counseling"
      icon={Heart}
    >
      <View className="gap-4">
        <Card>
          <CardContent className="p-4">
            <Text className="font-semibold text-gray-900 mb-2">Health Services</Text>
            <Text className="text-sm text-gray-600 mb-3">
              Free health screenings and wellness programs.
            </Text>
            <Text className="text-sm text-gray-600">First Saturday of each month</Text>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <Text className="font-semibold text-gray-900 mb-2">Counseling Services</Text>
            <Text className="text-sm text-gray-600 mb-3">
              Professional pastoral counseling available.
            </Text>
            <Button size="sm" className="w-full">
              <Text className="text-white font-medium">Request Appointment</Text>
            </Button>
          </CardContent>
        </Card>
      </View>
    </ChurchScreenTemplate>
  );
}

export function ChurchVolunteerScreen({ church}: ChurchScreenProps) {
  const areas = [
    "Worship Team",
    "Children's Ministry",
    "Hospitality",
    "Media Team",
    "Outreach",
    "Prayer Ministry",
  ];

  return (
    <ChurchScreenTemplate
      church={church}
      title="Volunteer Opportunities"
      icon={Users}
    >
      <Card>
        <CardContent className="p-4">
          <View className="mb-4">
            <Text className="font-semibold text-gray-900 mb-2">Serve With Us</Text>
            <Text className="text-sm text-gray-600">
              Use your gifts to serve God and our community.
            </Text>
          </View>

          <View className="gap-2">
            {areas.map((area, idx) => (
              <Card key={idx} className="bg-gray-50">
                <CardContent className="p-3">
                  <View className="flex-row items-center justify-between">
                    <Text className="text-sm font-medium text-gray-900">{area}</Text>
                    <Button size="sm" variant="ghost">
                      <Text className="text-indigo-600 font-medium">Join</Text>
                    </Button>
                  </View>
                </CardContent>
              </Card>
            ))}
          </View>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}
