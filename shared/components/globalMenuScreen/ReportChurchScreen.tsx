import { ArrowLeft } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";

interface ReportChurchScreenProps {
  onBack: () => void;
}

export function ReportChurchScreen({ onBack }: ReportChurchScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="font-semibold text-lg">Report Church Info</h1>
        </div>
      </div>

      <div className="p-4">
        <Card>
          <CardContent className="p-4 space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Church Name</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="Select or type church name" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Issue Type</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                <option>Incorrect Address</option>
                <option>Incorrect Service Times</option>
                <option>Incorrect Contact Info</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Details</label>
              <textarea className="w-full px-3 py-2 border border-gray-300 rounded-lg" rows={4} placeholder="Please describe the issue..."></textarea>
            </div>
            <Button className="w-full">Submit Report</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
