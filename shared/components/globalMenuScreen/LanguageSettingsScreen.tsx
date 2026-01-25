import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";

interface LanguageSettingsScreenProps {
  onBack: () => void;
}

export function LanguageSettingsScreen({ onBack }: LanguageSettingsScreenProps) {
  const languages = [
    { code: "en", name: "English", nativeName: "English" },
    { code: "yo", name: "Yoruba", nativeName: "Yorùbá" },
    { code: "ig", name: "Igbo", nativeName: "Igbo" },
    { code: "ha", name: "Hausa", nativeName: "Hausa" },
    { code: "fr", name: "French", nativeName: "Français" },
    { code: "pt", name: "Portuguese", nativeName: "Português" },
    { code: "es", name: "Spanish", nativeName: "Español" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="font-semibold text-lg">Language Settings</h1>
        </div>
      </div>

      <div className="p-4">
        <p className="text-sm text-gray-600 mb-4">Select your preferred language for the app.</p>
        <Card>
          <CardContent className="p-0">
            {languages.map((lang, idx) => (
              <button
                key={lang.code}
                className={`w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 ${
                  idx !== languages.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <div>
                  <p className="font-medium text-sm">{lang.name}</p>
                  <p className="text-xs text-gray-500">{lang.nativeName}</p>
                </div>
                {lang.code === "en" && (
                  <Check className="h-5 w-5 text-indigo-600" />
                )}
              </button>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
