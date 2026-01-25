import { ArrowLeft, Play, Video } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { sermons } from "@/data/mockData";

interface GlobalSermonsScreenProps {
  onBack: () => void;
}

export function GlobalSermonsScreen({ onBack }: GlobalSermonsScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="font-semibold text-lg">All Sermons</h1>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white px-4 py-3 border-b border-gray-200">
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
          <button className="px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-600 text-white whitespace-nowrap">
            <Video className="h-3 w-3 inline mr-1" />
            All
          </button>
          <button className="px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 whitespace-nowrap">
            Video Only
          </button>
          <button className="px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 whitespace-nowrap">
            Audio Only
          </button>
          <button className="px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 whitespace-nowrap">
            Recent
          </button>
        </div>
      </div>

      {/* Sermons List */}
      <div className="p-4 space-y-3">
        {sermons.map((sermon) => (
          <Card key={sermon.id} className="overflow-hidden">
            <div className="relative">
              <img
                src={sermon.thumbnail}
                alt={sermon.title}
                className="w-full h-40 object-cover"
              />
              {sermon.isLive && (
                <div className="absolute top-2 left-2">
                  <Badge className="bg-red-600">LIVE</Badge>
                </div>
              )}
              <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
                <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center">
                  <Play className="h-6 w-6 text-gray-900 ml-1" fill="currentColor" />
                </div>
              </button>
            </div>
            <CardContent className="p-3">
              <h4 className="font-medium mb-1">{sermon.title}</h4>
              <p className="text-sm text-gray-600 mb-1">{sermon.speaker}</p>
              <p className="text-xs text-gray-500 mb-2">{sermon.church}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{sermon.date}</span>
                <span>{sermon.duration}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
