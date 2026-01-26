import React, { useMemo, useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import { Heart, DollarSign, FileText } from "lucide-react-native";

import { Church } from "@/data/mockData";
import { ChurchScreenTemplate } from "./ChurchScreenTemplate";
import { Card, CardContent } from "@/shared/components/ui";

interface ChurchScreenProps {
  church: Church;
}

/** Small reusable RN button (Pressable) */
function AppPressable({
  label,
  onPress,
  variant = "primary",
  size = "md",
  disabled,
}: {
  label: string;
  onPress?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}) {
  const pad =
    size === "sm" ? "px-3 py-2" : size === "lg" ? "px-4 py-4" : "px-4 py-3";

  const base = "rounded-xl items-center justify-center";
  const bg =
    variant === "primary"
      ? "bg-indigo-600"
      : variant === "outline"
      ? "bg-white border border-gray-300"
      : "bg-transparent";
  const text =
    variant === "primary" ? "text-white" : "text-gray-900";

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={`${base} ${pad} ${bg} ${disabled ? "opacity-50" : ""}`}
    >
      <Text className={`font-semibold ${size === "sm" ? "text-sm" : "text-base"} ${text}`}>
        {label}
      </Text>
    </Pressable>
  );
}

/** Simple "select" replacement */
function ChipSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <View className="gap-2">
      <Text className="text-sm font-medium text-gray-900">{label}</Text>
      <View className="flex-row flex-wrap gap-2">
        {options.map((opt) => {
          const active = opt === value;
          return (
            <Pressable
              key={opt}
              onPress={() => onChange(opt)}
              className={`px-3 py-2 rounded-full border ${
                active ? "bg-indigo-50 border-indigo-600" : "bg-white border-gray-200"
              }`}
            >
              <Text className={`text-sm font-medium ${active ? "text-indigo-700" : "text-gray-700"}`}>
                {opt}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

// GIVE / DONATE SECTION

export function ChurchWhyGiveScreen({ church }: ChurchScreenProps) {
  const bullets = [
    "Support our local ministry and outreach",
    "Maintain our facilities",
    "Fund missions and missionaries",
    "Help those in need",
    "Invest in the next generation",
  ];

  return (
    <ChurchScreenTemplate church={church} title="Why We Give" icon={Heart}>
      <Card>
        <CardContent className="p-4">
          <View className="gap-4">
            <View>
              <Text className="font-semibold text-gray-900 mb-2">The Heart of Giving</Text>
              <Text className="text-sm text-gray-600">
                Giving is an act of worship and obedience to God. Through your generous giving, we can:
              </Text>
            </View>

            <View className="gap-2">
              {bullets.map((t) => (
                <Text key={t} className="text-sm text-gray-700">
                  • {t}
                </Text>
              ))}
            </View>

            <View className="bg-indigo-50 p-3 rounded-xl">
              <Text className="text-sm italic text-gray-700">
                “Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion,
                for God loves a cheerful giver.” — 2 Corinthians 9:7
              </Text>
            </View>
          </View>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchHowToGiveScreen({ church }: ChurchScreenProps) {
  const ways = useMemo(
    () => [
      { title: "Online Giving", desc: "Secure online donations via card or bank transfer" },
      { title: "During Service", desc: "Give through offering baskets during worship" },
      { title: "Bank Transfer", desc: "Direct deposit to church account" },
      { title: "Check / Cash", desc: "Mail or drop off at church office" },
    ],
    []
  );

  return (
    <ChurchScreenTemplate church={church} title="How to Give" icon={DollarSign}>
      <Card>
        <CardContent className="p-4">
          <View className="gap-3">
            <Text className="font-semibold text-gray-900">Ways to Give</Text>

            <View className="gap-2">
              {ways.map((w) => (
                <Card key={w.title} className="bg-gray-50">
                  <CardContent className="p-3">
                    <Text className="font-medium text-sm text-gray-900 mb-1">{w.title}</Text>
                    <Text className="text-xs text-gray-600">{w.desc}</Text>
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

export function ChurchOnlineGivingScreen({ church }: ChurchScreenProps) {
  const [donationType, setDonationType] = useState("Tithe");
  const [amount, setAmount] = useState<number>(50);

  const presets = [25, 50, 100, 250];

  return (
    <ChurchScreenTemplate church={church} title="Online Giving" icon={DollarSign}>
      <Card>
        <CardContent className="p-4">
          <View className="gap-4">
            <ChipSelect
              label="Donation Type"
              value={donationType}
              options={["Tithe", "Offering", "Missions", "Building Fund"]}
              onChange={setDonationType}
            />

            <View className="gap-2">
              <Text className="text-sm font-medium text-gray-900">Amount</Text>

              <View className="flex-row flex-wrap gap-2">
                {presets.map((p) => {
                  const active = amount === p;
                  return (
                    <Pressable
                      key={p}
                      onPress={() => setAmount(p)}
                      className={`px-3 py-2 rounded-xl border-2 ${
                        active ? "border-indigo-600 bg-indigo-50" : "border-gray-200 bg-white"
                      }`}
                    >
                      <Text className={`font-medium ${active ? "text-indigo-700" : "text-gray-800"}`}>
                        ${p}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>

              <TextInput
                value={String(amount)}
                onChangeText={(t) => {
                  const n = Number(t.replace(/[^\d]/g, ""));
                  setAmount(Number.isFinite(n) ? n : 0);
                }}
                keyboardType="number-pad"
                placeholder="Custom amount"
                placeholderTextColor="#9ca3af"
                className="w-full px-3 py-3 border border-gray-300 rounded-xl bg-white text-gray-900"
              />
            </View>

            <AppPressable
              label={`Give Securely ($${amount || 0})`}
              size="lg"
              onPress={() => {}}
              disabled={!amount || amount <= 0}
            />

            <Text className="text-xs text-center text-gray-500">
              Your donation is secure and tax-deductible
            </Text>
          </View>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchPledgesScreen({ church }: ChurchScreenProps) {
  const [pledgeAmount, setPledgeAmount] = useState("");
  const [frequency, setFrequency] = useState("Once");


  return (
    <ChurchScreenTemplate church={church} title="Pledges" icon={FileText}>
      <Card>
        <CardContent className="p-4">
          <View className="gap-4">
            <View>
              <Text className="font-semibold text-gray-900 mb-2">Make a Pledge</Text>
              <Text className="text-sm text-gray-600">
                Commit to supporting our ministry through a financial pledge.
              </Text>
            </View>

            <View className="gap-2">
              <Text className="text-sm font-medium text-gray-900">Pledge Amount</Text>
              <TextInput
                value={pledgeAmount}
                onChangeText={setPledgeAmount}
                keyboardType="number-pad"
                placeholder="Annual pledge amount"
                placeholderTextColor="#9ca3af"
                className="w-full px-3 py-3 border border-gray-300 rounded-xl bg-white text-gray-900"
              />
            </View>

            
            <ChipSelect
              label="Frequency"
              value={frequency}
              options={["Once","Weekly", "Monthly", "Quarterly", "Annually"]}
              onChange={setFrequency}
            />

            <AppPressable
              label="Submit Pledge"
              onPress={() => {}}
              disabled={!pledgeAmount.trim()}
            />
          </View>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchReceiptsScreen({ church }: ChurchScreenProps) {
  const receipts = useMemo(
    () => [
      { date: "Jan 15, 2026", type: "Tithe", amount: 100 },
      { date: "Jan 8, 2026", type: "Tithe", amount: 100 },
      { date: "Jan 1, 2026", type: "Tithe", amount: 50 },
    ],
    []
  );

  const total = receipts.reduce((sum, r) => sum + r.amount, 0);

  return (
    <ChurchScreenTemplate church={church} title="Receipts" icon={FileText}>
      <Card className="mb-4">
        <CardContent className="p-6 bg-indigo-600 rounded-2xl">
          <Text className="text-sm text-white/80 mb-1">Total Giving (2026)</Text>
          <Text className="text-3xl font-bold text-white">${total.toFixed(2)}</Text>
        </CardContent>
      </Card>

      <View className="gap-2">
        {receipts.map((r, idx) => (
          <Card key={idx}>
            <CardContent className="p-4 flex-row items-center justify-between">
              <View>
                <Text className="font-medium text-sm text-gray-900">{r.date}</Text>
                <Text className="text-xs text-gray-600">{r.type}</Text>
              </View>

              <View className="items-end">
                <Text className="font-semibold text-gray-900">${r.amount}</Text>
                <Pressable onPress={() => {}} className="mt-2 px-2 py-1">
                  <Text className="text-sm text-indigo-600 font-semibold">Download</Text>
                </Pressable>
              </View>
            </CardContent>
          </Card>
        ))}
      </View>
    </ChurchScreenTemplate>
  );
}
