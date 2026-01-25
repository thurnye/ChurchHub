import { ArrowLeft, LucideIcon } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Church } from "@/data/mockData";
import { ReactNode } from "react";

interface ChurchScreenTemplateProps {
  church: Church;
  onBack: () => void;
  title: string;
  icon?: LucideIcon;
  children: ReactNode;
}

export function ChurchScreenTemplate({ church, onBack, title, icon: Icon, children }: ChurchScreenTemplateProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2 flex-1">
            {Icon && <Icon className="h-5 w-5 text-gray-600" />}
            <h1 className="font-semibold text-lg">{title}</h1>
          </div>
        </div>
      </div>

      {/* Church Banner (Optional) */}
      <div 
        className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"
        style={church.accentColor ? { background: `linear-gradient(135deg, ${church.accentColor}20, ${church.accentColor}10)` } : {}}
      >
        <img src={church.image} alt={church.name} className="w-20 h-20 rounded-lg object-cover shadow-md" />
      </div>

      {/* Content */}
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}
