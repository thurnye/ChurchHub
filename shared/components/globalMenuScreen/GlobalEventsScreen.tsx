import { ArrowLeft, Calendar, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { events } from "@/data/mockData";

interface GlobalEventsScreenProps {
  onBack: () => void;
}

export function GlobalEventsScreen({ onBack }: GlobalEventsScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="font-semibold text-lg">All Events</h1>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white px-4 py-3 border-b border-gray-200">
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
          <button className="px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-600 text-white whitespace-nowrap">
            All
          </button>
          <button className="px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 whitespace-nowrap">
            This Week
          </button>
          <button className="px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 whitespace-nowrap">
            This Month
          </button>
          <button className="px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 whitespace-nowrap">
            Pentecostal
          </button>
          <button className="px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 whitespace-nowrap">
            Anglican
          </button>
        </div>
      </div>

      {/* Events List */}
      <div className="p-4 space-y-3">
        {events.map((event) => (
          <Card key={event.id}>
            <CardContent className="p-0">
              <div className="flex gap-3 p-4">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{event.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{event.church}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <Calendar className="h-3 w-3" />
                    <span>{event.date}</span>
                    <Clock className="h-3 w-3 ml-1" />
                    <span>{event.time}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {event.denomination}
                  </Badge>
                </div>
              </div>
              <div className="border-t border-gray-100 p-3 flex gap-2">
                <Button size="sm" className="flex-1">
                  RSVP
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <MapPin className="h-3 w-3 mr-1" />
                  Directions
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
