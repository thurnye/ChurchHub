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

// EVENTS SECTION
export function ChurchEventsScreen({ church, onBack }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate church={church} onBack={onBack} title="What's On" icon={Calendar}>
      <div className="space-y-3">
        {[
          { title: "Youth Revival", date: "Jan 28, 2026", time: "6:00 PM" },
          { title: "Women's Conference", date: "Feb 5, 2026", time: "10:00 AM" },
          { title: "Church Picnic", date: "Feb 15, 2026", time: "12:00 PM" },
        ].map((event, idx) => (
          <Card key={idx}>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">{event.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{event.date} at {event.time}</p>
              <Button size="sm" className="w-full">RSVP</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </ChurchScreenTemplate>
  );
}

export function ChurchSpecialServicesScreen({ church, onBack }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate church={church} onBack={onBack} title="Special Services" icon={Calendar}>
      <Card>
        <CardContent className="p-4 space-y-3">
          {[
            { title: "Easter Sunday", date: "April 20, 2026" },
            { title: "Christmas Eve Service", date: "December 24, 2026" },
            { title: "Thanksgiving Service", date: "November 26, 2026" },
          ].map((service, idx) => (
            <div key={idx} className="py-3 border-b border-gray-100 last:border-0">
              <p className="font-medium text-sm mb-1">{service.title}</p>
              <p className="text-xs text-gray-600">{service.date}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchConferencesScreen({ church, onBack }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate church={church} onBack={onBack} title="Conferences / Retreats" icon={Calendar}>
      <div className="space-y-3">
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2">Annual Leadership Retreat</h3>
            <p className="text-sm text-gray-600 mb-2">March 15-17, 2026</p>
            <p className="text-sm text-gray-600 mb-3">Mountain View Conference Center</p>
            <Button size="sm" className="w-full">Register</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2">Women's Retreat</h3>
            <p className="text-sm text-gray-600 mb-2">May 10-12, 2026</p>
            <p className="text-sm text-gray-600 mb-3">Lakeside Retreat Center</p>
            <Button size="sm" className="w-full">Register</Button>
          </CardContent>
        </Card>
      </div>
    </ChurchScreenTemplate>
  );
}

export function ChurchLecturesScreen({ church, onBack }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate church={church} onBack={onBack} title="Lectures / Recitals" icon={Music}>
      <Card>
        <CardContent className="p-4 space-y-3">
          <div>
            <h3 className="font-semibold mb-2">Upcoming Events</h3>
          </div>
          {[
            { title: "Theological Lecture Series", date: "Feb 1, 2026" },
            { title: "Choir Recital", date: "Mar 8, 2026" },
          ].map((event, idx) => (
            <Card key={idx} className="bg-gray-50">
              <CardContent className="p-3">
                <p className="font-medium text-sm mb-1">{event.title}</p>
                <p className="text-xs text-gray-600">{event.date}</p>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchPastEventsScreen({ church, onBack }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate church={church} onBack={onBack} title="Past Events Archive" icon={FileText}>
      <p className="text-sm text-gray-600 mb-4">Browse our past events and activities.</p>
      <div className="space-y-2">
        {[
          { title: "Christmas Service 2025", date: "Dec 25, 2025" },
          { title: "Harvest Festival", date: "Nov 15, 2025" },
          { title: "Youth Camp", date: "Aug 10-15, 2025" },
        ].map((event, idx) => (
          <Card key={idx}>
            <CardContent className="p-3">
              <p className="font-medium text-sm">{event.title}</p>
              <p className="text-xs text-gray-600">{event.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </ChurchScreenTemplate>
  );
}