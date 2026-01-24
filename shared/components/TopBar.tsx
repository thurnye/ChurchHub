import { View, Text, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Menu, Search, Bell } from "lucide-react-native";
import { cn } from "@/shared/utils/cn";
import { HamburgerMenu } from "./HamburgerMenu";
import { useState } from "react";
import { router } from "expo-router";

interface TopBarProps {
  title?: string;
  showLogo?: boolean;
  show?: boolean;
  onSearchPress?: () => void;
  onNotificationPress?: () => void;
  className?: string;
}

export function TopBar({
  title,
  showLogo = false,
  show=true,
  onSearchPress,
  onNotificationPress,
  className,
}: TopBarProps) {
  const insets = useSafeAreaInsets();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuNavigation = (churchId: string) => {
      router.push(`/`);
    };

  return (
    <View
      style={{ paddingTop: insets.top }}
      className={cn("bg-white border-b border-gray-100", className)}
    >
      <View className="flex-row items-center justify-between px-4 h-14">
        {/* Left side - Menu button */}
        {show && (
          <Pressable
            onPress={() => setIsMenuOpen(true)}
            className="w-10 h-10 items-center justify-center rounded-full"
          >
            <Menu size={24} color="#374151" />
          </Pressable>
        )}

        {/* Center - Logo or Title */}
        <View className="flex-1 items-center">
          {showLogo ? (
            <View className="flex-row items-center gap-2">
              <View className="w-8 h-8 bg-indigo-600 rounded-lg items-center justify-center">
                <Text className="text-white font-bold text-sm">CH</Text>
              </View>
              <Text className="font-semibold text-lg text-gray-900">
                ChurchHub
              </Text>
            </View>
          ) : title ? (
            <Text className="font-semibold text-lg text-gray-900">{title}</Text>
          ) : null}
        </View>

        {/* Right side - Actions */}
        <View className="flex-row items-center gap-1">
          <Pressable
            onPress={onSearchPress}
            className="w-10 h-10 items-center justify-center rounded-full"
          >
            <Search size={22} color="#374151" />
          </Pressable>
          <Pressable
            onPress={onNotificationPress}
            className="w-10 h-10 items-center justify-center rounded-full"
          >
            <Bell size={22} color="#374151" />
          </Pressable>
        </View>
      </View>
      <HamburgerMenu
              isOpen={isMenuOpen}
              onClose={() => setIsMenuOpen(false)}
              onNavigate={handleMenuNavigation}
            />
    </View>
  );
}
