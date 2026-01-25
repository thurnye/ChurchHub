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

// RESOURCES SECTION
export function ChurchSermonLibraryScreen({ church, onBack }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate church={church} onBack={onBack} title="Sermon Library" icon={FileText}>
      <div className="mb-4">
        <input type="search" placeholder="Search sermons..." className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
      </div>
      <div className="space-y-2">
        {[
          { title: "Living by Faith", speaker: church.pastor.name, date: "Jan 21, 2026" },
          { title: "The Power of Prayer", speaker: church.pastor.name, date: "Jan 14, 2026" },
          { title: "Walking in Love", speaker: church.pastor.name, date: "Jan 7, 2026" },
        ].map((sermon, idx) => (
          <Card key={idx}>
            <CardContent className="p-4">
              <h3 className="font-medium mb-1">{sermon.title}</h3>
              <p className="text-sm text-gray-600 mb-1">{sermon.speaker}</p>
              <p className="text-xs text-gray-500">{sermon.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </ChurchScreenTemplate>
  );
}

export function ChurchDevotionalsScreen({ church, onBack }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate church={church} onBack={onBack} title="Devotionals" icon={BookOpen}>
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Daily Devotional - Day {i}</h3>
              <p className="text-sm text-gray-600 mb-2">
                "Trust in the LORD with all your heart and lean not on your own understanding." - Proverbs 3:5
              </p>
              <p className="text-xs text-gray-500">January {25 + i}, 2026</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </ChurchScreenTemplate>
  );
}

export function ChurchStudyGuidesScreen({ church, onBack }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate church={church} onBack={onBack} title="Study Guides" icon={GraduationCap}>
      <div className="space-y-2">
        {["New Believers Guide", "Bible Study Methods", "Prayer Guide", "Spiritual Gifts Assessment"].map((guide, idx) => (
          <Card key={idx}>
            <CardContent className="p-4 flex justify-between items-center">
              <p className="font-medium text-sm">{guide}</p>
              <Button size="sm" variant="outline">Download</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </ChurchScreenTemplate>
  );
}

export function ChurchFormsScreen({ church, onBack }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate church={church} onBack={onBack} title="Forms" icon={FileText}>
      <div className="space-y-2">
        {["Membership Application", "Baptism Request", "Wedding Request", "Volunteer Application", "Prayer Request"].map((form, idx) => (
          <Card key={idx}>
            <CardContent className="p-4 flex justify-between items-center">
              <p className="font-medium text-sm">{form}</p>
              <Button size="sm" variant="outline">Download</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </ChurchScreenTemplate>
  );
}