// church-screens-events.tsx (React Native + NativeWind)
// Converts the provided EVENTS section screens to RN.
// Assumes you have:
// - lucide-react-native installed
// - ChurchScreenTemplate (RN) that accepts `icon` as a lucide-react-native component
// - Card/CardContent/Button RN components supporting `className` (NativeWind)

import React from "react";
import { View, Text } from "react-native";
import { Calendar, Music, FileText } from "lucide-react-native";

import { Church } from "@/data/mockData";
import { ChurchScreenTemplate } from "./ChurchScreenTemplate";
import { Card, CardContent, Button } from "@/shared/components/ui";

interface ChurchScreenProps {
  church: Church;
  onBack: () => void;
}

// EVENTS SECTION
export function ChurchEventsScreen({ church }: ChurchScreenProps) {
  const items = [
    { title: "Youth Revival", date: "Jan 28, 2026", time: "6:00 PM" },
    { title: "Women's Conference", date: "Feb 5, 2026", time: "10:00 AM" },
    { title: "Church Picnic", date: "Feb 15, 2026", time: "12:00 PM" },
  ];

  return (
    <ChurchScreenTemplate
      church={church}
      title="What's On"
      icon={Calendar}
    >
      <View className="gap-3">
        {items.map((event, idx) => (
          <Card key={idx}>
            <CardContent className="p-4">
              <Text className="font-semibold text-gray-900 mb-2">
                {event.title}
              </Text>
              <Text className="text-sm text-gray-600 mb-3">
                {event.date} at {event.time}
              </Text>

              <Button size="sm" className="w-full" onPress={() => {}}>
                <Text className="text-white font-medium">RSVP</Text>
              </Button>
            </CardContent>
          </Card>
        ))}
      </View>
    </ChurchScreenTemplate>
  );
}

export function ChurchSpecialServicesScreen({ church }: ChurchScreenProps) {
  const services = [
    { title: "Easter Sunday", date: "April 20, 2026" },
    { title: "Christmas Eve Service", date: "December 24, 2026" },
    { title: "Thanksgiving Service", date: "November 26, 2026" },
  ];

  return (
    <ChurchScreenTemplate
      church={church}
      title="Special Services"
      icon={Calendar}
    >
      <Card>
        <CardContent className="p-4">
          {services.map((service, idx) => (
            <View
              key={idx}
              className={`py-3 ${idx !== services.length - 1 ? "border-b border-gray-100" : ""}`}
            >
              <Text className="font-medium text-sm text-gray-900 mb-1">
                {service.title}
              </Text>
              <Text className="text-xs text-gray-600">{service.date}</Text>
            </View>
          ))}
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchConferencesScreen({ church }: ChurchScreenProps) {
  const conferences = [
    {
      title: "Annual Leadership Retreat",
      date: "March 15-17, 2026",
      location: "Mountain View Conference Center",
    },
    {
      title: "Women's Retreat",
      date: "May 10-12, 2026",
      location: "Lakeside Retreat Center",
    },
  ];

  return (
    <ChurchScreenTemplate
      church={church}
      title="Conferences / Retreats"
      icon={Calendar}
    >
      <View className="gap-3">
        {conferences.map((c, idx) => (
          <Card key={idx}>
            <CardContent className="p-4">
              <Text className="font-semibold text-gray-900 mb-2">{c.title}</Text>
              <Text className="text-sm text-gray-600 mb-2">{c.date}</Text>
              <Text className="text-sm text-gray-600 mb-3">{c.location}</Text>

              <Button size="sm" className="w-full" onPress={() => {}}>
                <Text className="text-white font-medium">Register</Text>
              </Button>
            </CardContent>
          </Card>
        ))}
      </View>
    </ChurchScreenTemplate>
  );
}

export function ChurchLecturesScreen({ church }: ChurchScreenProps) {
  const events = [
    { title: "Theological Lecture Series", date: "Feb 1, 2026" },
    { title: "Choir Recital", date: "Mar 8, 2026" },
  ];

  return (
    <ChurchScreenTemplate
      church={church}
      title="Lectures / Recitals"
      icon={Music}
    >
      <Card>
        <CardContent className="p-4">
          <Text className="font-semibold text-gray-900 mb-3">Upcoming Events</Text>

          <View className="gap-2">
            {events.map((e, idx) => (
              <Card key={idx} className="bg-gray-50">
                <CardContent className="p-3">
                  <Text className="font-medium text-sm text-gray-900 mb-1">
                    {e.title}
                  </Text>
                  <Text className="text-xs text-gray-600">{e.date}</Text>
                </CardContent>
              </Card>
            ))}
          </View>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchPastEventsScreen({ church }: ChurchScreenProps) {
  const past = [
    { title: "Christmas Service 2025", date: "Dec 25, 2025" },
    { title: "Harvest Festival", date: "Nov 15, 2025" },
    { title: "Youth Camp", date: "Aug 10-15, 2025" },
  ];

  return (
    <ChurchScreenTemplate
      church={church}
      title="Past Events Archive"
      icon={FileText}
    >
      <Text className="text-sm text-gray-600 mb-4">
        Browse our past events and activities.
      </Text>

      <View className="gap-2">
        {past.map((event, idx) => (
          <Card key={idx}>
            <CardContent className="p-3">
              <Text className="font-medium text-sm text-gray-900">
                {event.title}
              </Text>
              <Text className="text-xs text-gray-600">{event.date}</Text>
            </CardContent>
          </Card>
        ))}
      </View>
    </ChurchScreenTemplate>
  );
}
