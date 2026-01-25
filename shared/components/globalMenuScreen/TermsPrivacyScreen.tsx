import { ArrowLeft } from "lucide-react";
import { Button } from "@/app/components/ui/button";

interface TermsPrivacyScreenProps {
  onBack: () => void;
}

export function TermsPrivacyScreen({ onBack }: TermsPrivacyScreenProps) {
  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="font-semibold text-lg">Terms & Privacy</h1>
        </div>
      </div>

      <div className="p-4 prose prose-sm max-w-none">
        <h2>Terms of Service</h2>
        <p>Last updated: January 25, 2026</p>
        <p>Welcome to ChurchHub. By using our app, you agree to these terms of service.</p>
        
        <h3>1. Use of Service</h3>
        <p>ChurchHub is provided as an aggregator platform to help users discover and connect with churches across denominations.</p>
        
        <h3>2. User Accounts</h3>
        <p>You are responsible for maintaining the security of your account and for all activities that occur under your account.</p>
        
        <h3>3. Content</h3>
        <p>Church information is provided by participating churches and community members. We strive for accuracy but cannot guarantee all information is current.</p>

        <h2 className="mt-8">Privacy Policy</h2>
        <p>Your privacy is important to us. This policy explains how we collect, use, and protect your information.</p>
        
        <h3>Information We Collect</h3>
        <ul>
          <li>Account information (name, email)</li>
          <li>Church preferences and saved churches</li>
          <li>Donation history (securely encrypted)</li>
          <li>Usage data and analytics</li>
        </ul>
        
        <h3>How We Use Your Information</h3>
        <ul>
          <li>To provide and improve our services</li>
          <li>To send service updates and notifications</li>
          <li>To personalize your experience</li>
        </ul>
        
        <h3>Data Security</h3>
        <p>We implement industry-standard security measures to protect your personal information and donation data.</p>
      </div>
    </div>
  );
}
