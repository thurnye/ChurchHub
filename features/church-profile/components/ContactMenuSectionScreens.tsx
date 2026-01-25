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

// CONTACT & VISIT SECTION
export function ChurchContactOfficialsScreen({ church, onBack }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate church={church} onBack={onBack} title="Contact Officials" icon={Phone}>
      <div className="space-y-3">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <img src={church.pastor.photo} alt={church.pastor.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h3 className="font-semibold">{church.pastor.name}</h3>
                <p className="text-sm text-gray-600">{church.pastor.role}</p>
              </div>
            </div>
            <Button size="sm" className="w-full">Send Message</Button>
          </CardContent>
        </Card>
        {church.clergy.slice(0, 2).map((clergy, idx) => (
          <Card key={idx}>
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <img src={clergy.photo} alt={clergy.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h3 className="font-medium">{clergy.name}</h3>
                  <p className="text-sm text-gray-600">{clergy.role}</p>
                </div>
              </div>
              <Button size="sm" variant="outline" className="w-full">Send Message</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </ChurchScreenTemplate>
  );
}

export function ChurchGeneralEnquiriesScreen({ church, onBack }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate church={church} onBack={onBack} title="General Enquiries" icon={Phone}>
      <Card>
        <CardContent className="p-4 space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-gray-400" />
                <a href={`tel:${church.phone}`} className="text-indigo-600">{church.phone}</a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-gray-400" />
                <a href={`mailto:${church.email}`} className="text-indigo-600">{church.email}</a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Office Hours</h3>
            <p className="text-sm text-gray-600">{church.officeHours}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Send a Message</h3>
            <div className="space-y-3">
              <input type="text" placeholder="Your Name" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
              <input type="email" placeholder="Your Email" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
              <textarea placeholder="Your Message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-lg"></textarea>
              <Button className="w-full">Send Message</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchLocationScreen({ church, onBack }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate church={church} onBack={onBack} title="Location & Map" icon={MapPin}>
      <Card className="mb-4">
        <CardContent className="p-0">
          <div className="h-48 bg-gray-200 flex items-center justify-center rounded-t-lg">
            <MapPin className="h-12 w-12 text-gray-400" />
            <p className="text-sm text-gray-500 ml-2">Map placeholder</p>
          </div>
          <div className="p-4">
            <h3 className="font-semibold mb-2">Address</h3>
            <p className="text-sm text-gray-600 mb-3">{church.address}</p>
            <Button className="w-full">Get Directions</Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold mb-2">Parking</h3>
          <p className="text-sm text-gray-600">{church.parkingInfo}</p>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchAccessibilityScreen({ church, onBack }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate church={church} onBack={onBack} title="Accessibility" icon={Users}>
      <Card>
        <CardContent className="p-4 space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Accessibility Features</h3>
            <p className="text-sm text-gray-600 mb-3">{church.accessibilityInfo}</p>
          </div>
          <ul className="text-sm space-y-2">
            <li>✓ Wheelchair accessible entrance</li>
            <li>✓ Accessible restrooms</li>
            <li>✓ Reserved parking spaces</li>
            <li>✓ Hearing assistance available</li>
            <li>✓ Large print materials available</li>
          </ul>
          <div className="bg-indigo-50 p-3 rounded-lg">
            <p className="text-sm">
              For special accommodation requests, please contact our office at {church.phone}
            </p>
          </div>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

function Mail({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
