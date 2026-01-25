// Continuation of church screens - Ministries, Give, Events, Community, Resources, Contact
import { GraduationCap, BookOpen, Users, Heart, DollarSign, Calendar, Music, HeartHandshake, FileText, Phone, MapPin } from "lucide-react";
import { Church } from "@/data/mockData";
import { ChurchScreenTemplate } from "./ChurchScreenTemplate";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

interface ChurchScreenProps {
  church: Church;
  onBack: () => void;
}



// GIVE / DONATE SECTION
export function ChurchWhyGiveScreen({ church, onBack }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate church={church} onBack={onBack} title="Why We Give" icon={Heart}>
      <Card>
        <CardContent className="p-4 space-y-4">
          <div>
            <h3 className="font-semibold mb-2">The Heart of Giving</h3>
            <p className="text-sm text-gray-600">
              Giving is an act of worship and obedience to God. Through your generous giving, we can:
            </p>
          </div>
          <ul className="text-sm space-y-2">
            <li>• Support our local ministry and outreach</li>
            <li>• Maintain our facilities</li>
            <li>• Fund missions and missionaries</li>
            <li>• Help those in need</li>
            <li>• Invest in the next generation</li>
          </ul>
          <div className="bg-indigo-50 p-3 rounded-lg">
            <p className="text-sm italic text-gray-700">
              "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." - 2 Corinthians 9:7
            </p>
          </div>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}
