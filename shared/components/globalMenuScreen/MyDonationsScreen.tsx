import { ArrowLeft, Download, DollarSign } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";

interface MyDonationsScreenProps {
  onBack: () => void;
}

export function MyDonationsScreen({ onBack }: MyDonationsScreenProps) {
  const donations = [
    { id: "1", church: "Grace Community Church", amount: 100, date: "Jan 15, 2026", type: "Tithe" },
    { id: "2", church: "St. James Cathedral", amount: 50, date: "Jan 8, 2026", type: "Offering" },
    { id: "3", church: "Grace Community Church", amount: 100, date: "Jan 1, 2026", type: "Tithe" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="font-semibold text-lg">My Donations</h1>
        </div>
      </div>

      <div className="p-4">
        <Card className="mb-4 bg-gradient-to-br from-indigo-500 to-purple-600 text-white border-0">
          <CardContent className="p-6">
            <p className="text-sm text-white/80 mb-1">Total Giving (2026)</p>
            <h2 className="text-3xl font-bold">$250.00</h2>
          </CardContent>
        </Card>

        <h2 className="font-semibold mb-3">Donation History</h2>
        <div className="space-y-2">
          {donations.map((donation) => (
            <Card key={donation.id}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium mb-1">{donation.church}</h3>
                    <p className="text-sm text-gray-600 mb-1">{donation.type}</p>
                    <p className="text-xs text-gray-500">{donation.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-lg">${donation.amount}</p>
                    <Button size="sm" variant="ghost" className="mt-1">
                      <Download className="h-3 w-3 mr-1" />
                      Receipt
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
