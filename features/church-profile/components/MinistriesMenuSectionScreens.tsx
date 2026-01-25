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

// MINISTRIES SECTION
export function ChurchFaithFormationScreen({ church, onBack }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate church={church} onBack={onBack} title="Faith Formation" icon={GraduationCap}>
      <Card>
        <CardContent className="p-4 space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Growing in Faith</h3>
            <p className="text-sm text-gray-600 mb-4">
              We offer various programs to help you grow in your walk with Christ.
            </p>
          </div>
          <div className="space-y-2">
            {["New Believers Class", "Discipleship Training", "Leadership Development", "Spiritual Mentoring"].map((program, idx) => (
              <Card key={idx} className="bg-gray-50">
                <CardContent className="p-3">
                  <p className="text-sm font-medium">{program}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}
