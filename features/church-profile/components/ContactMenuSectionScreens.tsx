// church-screens-contact.tsx (React Native + NativeWind)
// Converts the provided CONTACT & VISIT screens to React Native.
// Assumes:
// - ChurchScreenTemplate is RN + NativeWind and accepts icon from lucide-react-native
// - Card/CardContent/Button are RN components that accept className (NativeWind)
// - If you want real map + directions, plug in expo-location + react-native-maps / Linking

import React, { useState } from "react";
import { View, Text, TextInput, Linking, Platform } from "react-native";
import {
  Phone,
  MapPin,
  Users,
  Mail as MailIcon,
} from "lucide-react-native";

import { Church } from "@/data/mockData";
import { ChurchScreenTemplate } from "./ChurchScreenTemplate";
import { Card, CardContent, Button } from "@/shared/components/ui";

interface ChurchScreenProps {
  church: Church;
}

// helpers
const openPhone = (phone: string) => Linking.openURL(`tel:${phone}`);
const openEmail = (email: string) => Linking.openURL(`mailto:${email}`);

const openMaps = (address: string) => {
  const encoded = encodeURIComponent(address);
  const url =
    Platform.OS === "ios"
      ? `maps:0,0?q=${encoded}`
      : `geo:0,0?q=${encoded}`;
  Linking.openURL(url);
};

// CONTACT & VISIT SECTION
export function ChurchContactOfficialsScreen({ church }: ChurchScreenProps) {
  const topClergy = church.clergy?.slice(0, 2) ?? [];

  return (
    <ChurchScreenTemplate
      church={church}
      title="Contact Officials"
      icon={Phone}
    >
      <View className="gap-3">
        <Card>
          <CardContent className="p-4">
            <View className="flex-row items-center gap-3 mb-3">
              {/* Replace with your Avatar component if you have one */}
              <View className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-ignore */}
                <ImageLike uri={church.pastor.photo} />
              </View>

              <View className="flex-1">
                <Text className="font-semibold text-gray-900" numberOfLines={1}>
                  {church.pastor.name}
                </Text>
                <Text className="text-sm text-gray-600" numberOfLines={1}>
                  {church.pastor.role}
                </Text>
              </View>
            </View>

            <Button
              size="sm"
              className="w-full"
              onPress={() => openEmail(church.email)}
            >
              <Text className="text-white font-medium">Send Message</Text>
            </Button>
          </CardContent>
        </Card>

        {topClergy.map((clergy, idx) => (
          <Card key={idx}>
            <CardContent className="p-4">
              <View className="flex-row items-center gap-3 mb-3">
                <View className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  {/* @ts-ignore */}
                  <ImageLike uri={clergy.photo} />
                </View>

                <View className="flex-1">
                  <Text className="font-medium text-gray-900" numberOfLines={1}>
                    {clergy.name}
                  </Text>
                  <Text className="text-sm text-gray-600" numberOfLines={1}>
                    {clergy.role}
                  </Text>
                </View>
              </View>

              <Button
                size="sm"
                variant="outline"
                className="w-full"
                onPress={() => openEmail(clergy.email)}
              >
                <Text className="text-gray-900 font-medium">Send Message</Text>
              </Button>
            </CardContent>
          </Card>
        ))}
      </View>
    </ChurchScreenTemplate>
  );
}

export function ChurchGeneralEnquiriesScreen({ church }: ChurchScreenProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <ChurchScreenTemplate
      church={church}
      title="General Enquiries"
      icon={Phone}
    >
      <Card>
        <CardContent className="p-4">
          {/* Contact Us */}
          <View className="mb-5">
            <Text className="font-semibold text-gray-900 mb-2">Contact Us</Text>

            <View className="gap-3">
              <View className="flex-row items-center gap-2">
                <Phone size={16} color="#9ca3af" />
                <Text
                  className="text-indigo-600"
                  onPress={() => openPhone(church.phone)}
                >
                  {church.phone}
                </Text>
              </View>

              <View className="flex-row items-center gap-2">
                <MailIcon size={16} color="#9ca3af" />
                <Text
                  className="text-indigo-600"
                  onPress={() => openEmail(church.email)}
                >
                  {church.email}
                </Text>
              </View>
            </View>
          </View>

          {/* Office Hours */}
          <View className="mb-5">
            <Text className="font-semibold text-gray-900 mb-2">Office Hours</Text>
            <Text className="text-sm text-gray-600">{church.officeHours}</Text>
          </View>

          {/* Send a Message */}
          <View>
            <Text className="font-semibold text-gray-900 mb-3">Send a Message</Text>

            <View className="gap-3">
              <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Your Name"
                placeholderTextColor="#9ca3af"
                className="w-full px-3 py-3 border border-gray-300 rounded-xl text-gray-900 bg-white"
              />

              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Your Email"
                placeholderTextColor="#9ca3af"
                autoCapitalize="none"
                keyboardType="email-address"
                className="w-full px-3 py-3 border border-gray-300 rounded-xl text-gray-900 bg-white"
              />

              <TextInput
                value={message}
                onChangeText={setMessage}
                placeholder="Your Message"
                placeholderTextColor="#9ca3af"
                multiline
                textAlignVertical="top"
                className="w-full px-3 py-3 border border-gray-300 rounded-xl text-gray-900 bg-white min-h-[120px]"
              />

              <Button
                className="w-full"
                onPress={() => {
                  // Hook this into your API later.
                  // For now, just open the user's email app with a prefilled subject/body.
                  const subject = encodeURIComponent(`General Enquiry - ${church.name}`);
                  const body = encodeURIComponent(
                    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
                  );
                  Linking.openURL(`mailto:${church.email}?subject=${subject}&body=${body}`);
                }}
              >
                <Text className="text-white font-medium">Send Message</Text>
              </Button>
            </View>
          </View>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchLocationScreen({ church }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate
      church={church}
      title="Location & Map"
      icon={MapPin}
    >
      <Card className="mb-4">
        <CardContent className="p-0">
          {/* Map placeholder */}
          <View className="h-48 bg-gray-200 rounded-t-2xl flex-row items-center justify-center">
            <MapPin size={40} color="#9ca3af" />
            <Text className="text-sm text-gray-500 ml-2">Map placeholder</Text>
          </View>

          <View className="p-4">
            <Text className="font-semibold text-gray-900 mb-2">Address</Text>
            <Text className="text-sm text-gray-600 mb-3">{church.address}</Text>

            <Button className="w-full" onPress={() => openMaps(church.address)}>
              <Text className="text-white font-medium">Get Directions</Text>
            </Button>
          </View>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <Text className="font-semibold text-gray-900 mb-2">Parking</Text>
          <Text className="text-sm text-gray-600">{church.parkingInfo}</Text>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchAccessibilityScreen({ church }: ChurchScreenProps) {
  const items = [
    "Wheelchair accessible entrance",
    "Accessible restrooms",
    "Reserved parking spaces",
    "Hearing assistance available",
    "Large print materials available",
  ];

  return (
    <ChurchScreenTemplate
      church={church}
      title="Accessibility"
      icon={Users}
    >
      <Card>
        <CardContent className="p-4">
          <View className="mb-4">
            <Text className="font-semibold text-gray-900 mb-2">
              Accessibility Features
            </Text>
            <Text className="text-sm text-gray-600">{church.accessibilityInfo}</Text>
          </View>

          <View className="gap-2 mb-4">
            {items.map((t) => (
              <Text key={t} className="text-sm text-gray-900">
                ✓ {t}
              </Text>
            ))}
          </View>

          <View className="bg-indigo-50 p-3 rounded-xl">
            <Text className="text-sm text-gray-800">
              For special accommodation requests, please contact our office at{" "}
              <Text className="text-indigo-600" onPress={() => openPhone(church.phone)}>
                {church.phone}
              </Text>
              .
            </Text>
          </View>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

/**
 * Tiny helper to avoid bringing expo-image into this snippet.
 * Replace with:
 *   import { Image } from "expo-image";
 *   <Image source={{ uri }} style={{ width: "100%", height: "100%" }} contentFit="cover" />
 */
function ImageLike({ uri }: { uri: string }) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <View className="flex-1 bg-gray-300" />;
}
