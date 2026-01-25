import { ArrowLeft, Bell, Globe, Heart } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";

interface PreferencesScreenProps {
  onBack: () => void;
}

export function PreferencesScreen({ onBack }: PreferencesScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="font-semibold text-lg">Preferences</h1>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <Card>
          <CardContent className="p-4 space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Preferred Denomination</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                <option>All Denominations</option>
                <option>Pentecostal</option>
                <option>Anglican</option>
                <option>Catholic</option>
                <option>Baptist</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Preferred Church</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                <option>None Selected</option>
                <option>Grace Community Church</option>
                <option>St. James Cathedral</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Worship Style</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                <option>All Styles</option>
                <option>Contemporary</option>
                <option>Traditional</option>
                <option>Blended</option>
              </select>
            </div>
          </CardContent>
        </Card>

        <h3 className="font-semibold">Notifications</h3>
        <Card>
          <CardContent className="p-4 space-y-3">
            {["Service Reminders", "Event Updates", "New Sermons", "Prayer Requests"].map((item) => (
              <div key={item} className="flex items-center justify-between">
                <span className="text-sm">{item}</span>
                <input type="checkbox" className="w-5 h-5" defaultChecked />
              </div>
            ))}
          </CardContent>
        </Card>

        <Button className="w-full">Save Preferences</Button>
      </div>
    </div>
  );
}
