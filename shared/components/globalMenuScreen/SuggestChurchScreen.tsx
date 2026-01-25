import { ArrowLeft } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";

interface SuggestChurchScreenProps {
  onBack: () => void;
}

export function SuggestChurchScreen({ onBack }: SuggestChurchScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="font-semibold text-lg">Suggest a Church</h1>
        </div>
      </div>

      <div className="p-4">
        <p className="text-sm text-gray-600 mb-4">Help us grow our directory by suggesting a church in your area.</p>
        <Card>
          <CardContent className="p-4 space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Church Name *</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Denomination *</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                <option>Select denomination</option>
                <option>Pentecostal</option>
                <option>Anglican</option>
                <option>Catholic</option>
                <option>Baptist</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Address *</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Phone</label>
              <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Website</label>
              <input type="url" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Additional Notes</label>
              <textarea className="w-full px-3 py-2 border border-gray-300 rounded-lg" rows={3}></textarea>
            </div>
            <Button className="w-full">Submit Suggestion</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
