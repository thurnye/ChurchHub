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

// COMMUNITY SECTION
export function ChurchCommunityProgramsScreen({ church, onBack }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate church={church} onBack={onBack} title="Community Programs" icon={HeartHandshake}>
      <div className="space-y-3">
        {["Literacy Program", "After School Care", "Senior Support", "Job Training"].map((program, idx) => (
          <Card key={idx}>
            <CardContent className="p-4">
              <h3 className="font-medium mb-2">{program}</h3>
              <p className="text-sm text-gray-600 mb-3">Serving our local community with love.</p>
              <Button size="sm" variant="outline" className="w-full">Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </ChurchScreenTemplate>
  );
}

export function ChurchOutreachScreen({ church, onBack }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate church={church} onBack={onBack} title="Outreach & Charity" icon={Heart}>
      <Card>
        <CardContent className="p-4 space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Our Outreach Ministries</h3>
            <p className="text-sm text-gray-600 mb-4">Extending God's love to our community and beyond.</p>
          </div>
          <ul className="text-sm space-y-2">
            <li>• Street Evangelism</li>
            <li>• Prison Ministry</li>
            <li>• Hospital Visitation</li>
            <li>• Community Clean-up</li>
            <li>• Homeless Support</li>
          </ul>
          <Button className="w-full">Join an Outreach</Button>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchFoodBanksScreen({ church, onBack }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate church={church} onBack={onBack} title="Food Banks / Drop-in" icon={HeartHandshake}>
      <Card>
        <CardContent className="p-4 space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Food Bank Ministry</h3>
            <p className="text-sm text-gray-600">Providing food assistance to families in need.</p>
          </div>
          <div className="bg-indigo-50 p-3 rounded-lg">
            <p className="font-medium text-sm mb-2">Operating Hours</p>
            <p className="text-sm">Wednesdays & Saturdays</p>
            <p className="text-sm">10:00 AM - 2:00 PM</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">How to Help</h3>
            <div className="space-y-2">
              <Button size="sm" className="w-full">Donate Food</Button>
              <Button size="sm" variant="outline" className="w-full">Volunteer</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchHealthCounselingScreen({ church, onBack }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate church={church} onBack={onBack} title="Health & Counseling" icon={Heart}>
      <div className="space-y-4">
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2">Health Services</h3>
            <p className="text-sm text-gray-600 mb-3">Free health screenings and wellness programs.</p>
            <p className="text-sm text-gray-600">First Saturday of each month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2">Counseling Services</h3>
            <p className="text-sm text-gray-600 mb-3">Professional pastoral counseling available.</p>
            <Button size="sm" className="w-full">Request Appointment</Button>
          </CardContent>
        </Card>
      </div>
    </ChurchScreenTemplate>
  );
}

export function ChurchVolunteerScreen({ church, onBack }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate church={church} onBack={onBack} title="Volunteer Opportunities" icon={Users}>
      <Card>
        <CardContent className="p-4 space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Serve With Us</h3>
            <p className="text-sm text-gray-600 mb-4">Use your gifts to serve God and our community.</p>
          </div>
          <div className="space-y-2">
            {["Worship Team", "Children's Ministry", "Hospitality", "Media Team", "Outreach", "Prayer Ministry"].map((area, idx) => (
              <Card key={idx} className="bg-gray-50">
                <CardContent className="p-3 flex justify-between items-center">
                  <p className="text-sm font-medium">{area}</p>
                  <Button size="sm" variant="ghost">Join</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}