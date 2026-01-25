import { ArrowLeft, Mail, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";

interface HelpSupportScreenProps {
  onBack: () => void;
}

export function HelpSupportScreen({ onBack }: HelpSupportScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="font-semibold text-lg">Help & Support</h1>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <Card>
          <CardContent className="p-4 space-y-3">
            <Button variant="outline" className="w-full justify-start">
              <Mail className="h-4 w-4 mr-2" />
              Email Support
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <MessageCircle className="h-4 w-4 mr-2" />
              Live Chat
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Phone className="h-4 w-4 mr-2" />
              Call Us
            </Button>
          </CardContent>
        </Card>

        <h3 className="font-semibold">Frequently Asked Questions</h3>
        <Card>
          <CardContent className="p-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="faq1">
                <AccordionTrigger>How do I find churches near me?</AccordionTrigger>
                <AccordionContent>
                  Navigate to the "Churches" tab and enable location services. The map will show all churches in your area.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq2">
                <AccordionTrigger>Can I follow multiple churches?</AccordionTrigger>
                <AccordionContent>
                  Yes! You can follow as many churches as you'd like. Simply tap the heart icon on any church profile.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq3">
                <AccordionTrigger>How do I make a donation?</AccordionTrigger>
                <AccordionContent>
                  Visit the church's profile, go to the "Give" tab, and follow the secure payment process.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq4">
                <AccordionTrigger>Is my donation information secure?</AccordionTrigger>
                <AccordionContent>
                  Yes, all donation transactions are encrypted and processed through secure payment gateways.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
