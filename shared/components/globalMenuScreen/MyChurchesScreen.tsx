import { ArrowLeft, Heart, Navigation, Clock } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { churches } from "@/data/mockData";

interface MyChurchesScreenProps {
  onBack: () => void;
  onNavigateToChurch: (churchId: string) => void;
}

export function MyChurchesScreen({ onBack, onNavigateToChurch }: MyChurchesScreenProps) {
  // Mock: User follows first 3 churches
  const followedChurches = churches.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="font-semibold text-lg">My Churches</h1>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {followedChurches.map((church) => (
          <Card key={church.id}>
            <CardContent className="p-4">
              <div className="flex items-start gap-3 mb-3">
                <img
                  src={church.image}
                  alt={church.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{church.name}</h3>
                  <Badge variant="secondary" className="mb-2">{church.denomination}</Badge>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{church.nextService}</span>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="text-red-500">
                  <Heart className="h-5 w-5" fill="currentColor" />
                </Button>
              </div>
              <div className="flex gap-2">
                <Button size="sm" onClick={() => onNavigateToChurch(church.id)} className="flex-1">
                  View Church
                </Button>
                <Button size="sm" variant="outline">
                  <Navigation className="h-4 w-4 mr-1" />
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
