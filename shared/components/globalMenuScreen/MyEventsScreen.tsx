import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { events } from "@/data/mockData";

interface MyEventsScreenProps {
  onBack: () => void;
}

export function MyEventsScreen({ onBack }: MyEventsScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="font-semibold text-lg">My Events</h1>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div>
          <h2 className="font-semibold mb-3">Upcoming RSVPs</h2>
          <div className="space-y-3">
            {events.slice(0, 2).map((event) => (
              <Card key={event.id}>
                <CardContent className="p-4 flex gap-3">
                  <img src={event.image} alt={event.title} className="w-20 h-20 rounded-lg object-cover" />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{event.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{event.church}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span>{event.date} at {event.time}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-semibold mb-3">Past Events</h2>
          <Button variant="outline" className="w-full">View Event History</Button>
        </div>
      </div>
    </div>
  );
}
