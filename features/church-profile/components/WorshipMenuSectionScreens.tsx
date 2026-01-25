// This file contains all remaining church screens for quick implementation
import {
  BookOpen,
  FileText,
  Users,
  Church as ChurchIcon,
  Briefcase,
  Calendar,
  Video,
  Music,
  Droplet,
  Gift,
  GraduationCap,
  Heart,
  DollarSign,
  Phone,
  MapPin,
  HeartHandshake,
} from 'lucide-react';
import { Church } from '@/data/mockData';
import { ChurchScreenTemplate } from './ChurchScreenTemplate';
import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/ui/accordion';

interface ChurchScreenProps {
  church: Church;
  onBack: () => void;
}

// WORSHIP SECTION SCREENS

export function ChurchSundayServicesScreen({
  church,
  onBack,
}: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate
      church={church}
      onBack={onBack}
      title='Sunday Services'
      icon={ChurchIcon}
    >
      <div className='space-y-3'>
        {church.serviceTimes
          .filter((s) => s.day === 'Sunday')
          .map((service, idx) => (
            <Card key={idx}>
              <CardContent className='p-4'>
                <h3 className='font-semibold mb-2'>{service.type}</h3>
                <p className='text-sm text-gray-600 mb-3'>
                  {service.day} at {service.time}
                </p>
                {church.hasLivestream && (
                  <Button size='sm' className='w-full'>
                    <Video className='h-4 w-4 mr-2' />
                    Watch Online
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
      </div>
    </ChurchScreenTemplate>
  );
}

export function ChurchWeekdayServicesScreen({
  church,
  onBack,
}: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate
      church={church}
      onBack={onBack}
      title='Weekday & Special Services'
      icon={Calendar}
    >
      <Card>
        <CardContent className='p-4 space-y-3'>
          <div>
            <h3 className='font-semibold mb-2'>Weekday Services</h3>
            {church.serviceTimes
              .filter((s) => s.day !== 'Sunday')
              .map((service, idx) => (
                <div
                  key={idx}
                  className='py-2 border-b border-gray-100 last:border-0'
                >
                  <p className='font-medium text-sm'>{service.type}</p>
                  <p className='text-sm text-gray-600'>
                    {service.day} at {service.time}
                  </p>
                </div>
              ))}
          </div>
          <div>
            <h3 className='font-semibold mb-2'>Special Services</h3>
            <p className='text-sm text-gray-600'>
              Check our events calendar for special services and celebrations.
            </p>
          </div>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchWorshipOnlineScreen({
  church,
  onBack,
}: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate
      church={church}
      onBack={onBack}
      title='Worship Online'
      icon={Video}
    >
      <Card className='mb-4'>
        <CardContent className='p-4'>
          <h3 className='font-semibold mb-2'>Join Us Online</h3>
          <p className='text-sm text-gray-600 mb-4'>
            Experience worship from anywhere with our live streaming services.
          </p>
          <Button className='w-full'>
            <Video className='h-4 w-4 mr-2' />
            Watch Live Stream
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardContent className='p-4'>
          <h3 className='font-semibold mb-2'>Live Stream Schedule</h3>
          <div className='space-y-2'>
            {church.serviceTimes.map((service, idx) => (
              <div
                key={idx}
                className='flex justify-between items-center py-2 border-b border-gray-100 last:border-0'
              >
                <div>
                  <p className='font-medium text-sm'>{service.type}</p>
                  <p className='text-xs text-gray-600'>{service.day}</p>
                </div>
                <p className='text-sm font-medium'>{service.time}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchSermonsScreen({ church, onBack }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate
      church={church}
      onBack={onBack}
      title='Sermons & Homilies'
      icon={FileText}
    >
      <p className='text-sm text-gray-600 mb-4'>
        Listen to our latest sermon recordings and teachings.
      </p>
      <Button variant='outline' className='w-full mb-4'>
        View Sermon Library
      </Button>
      <Card>
        <CardContent className='p-4'>
          <h3 className='font-semibold mb-2'>Latest Sermon</h3>
          <p className='text-sm font-medium mb-1'>Living by Faith</p>
          <p className='text-sm text-gray-600 mb-2'>{church.pastor.name}</p>
          <p className='text-xs text-gray-500'>January 21, 2026</p>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchMusicScreen({ church, onBack }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate
      church={church}
      onBack={onBack}
      title='Music Ministry'
      icon={Music}
    >
      <Card>
        <CardContent className='p-4 space-y-4'>
          <div>
            <h3 className='font-semibold mb-2'>Our Music Ministry</h3>
            <p className='text-sm text-gray-600'>
              Join our vibrant worship team in leading the congregation in
              praise and worship.
            </p>
          </div>
          <div>
            <h3 className='font-semibold mb-2'>Choirs & Ensembles</h3>
            <ul className='space-y-2'>
              <li className='text-sm'>• Main Choir</li>
              <li className='text-sm'>• Youth Choir</li>
              <li className='text-sm'>• Worship Band</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchBaptismScreen({ church, onBack }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate
      church={church}
      onBack={onBack}
      title='Baptism & Weddings'
      icon={Droplet}
    >
      <div className='space-y-4'>
        <Card>
          <CardContent className='p-4'>
            <h3 className='font-semibold mb-2'>Baptism</h3>
            <p className='text-sm text-gray-600 mb-3'>
              Baptism is a sacred ordinance representing new life in Christ.
            </p>
            <Button size='sm' className='w-full'>
              Request Baptism
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className='p-4'>
            <h3 className='font-semibold mb-2'>Weddings</h3>
            <p className='text-sm text-gray-600 mb-3'>
              We would be honored to host your special day.
            </p>
            <Button size='sm' className='w-full'>
              Wedding Inquiry
            </Button>
          </CardContent>
        </Card>
      </div>
    </ChurchScreenTemplate>
  );
}

export function ChurchStewardshipScreen({ church, onBack }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate
      church={church}
      onBack={onBack}
      title='Stewardship'
      icon={Gift}
    >
      <Card>
        <CardContent className='p-4 space-y-4'>
          <div>
            <h3 className='font-semibold mb-2'>Biblical Stewardship</h3>
            <p className='text-sm text-gray-600'>
              Stewardship is about managing God's gifts wisely - our time,
              talents, and treasures.
            </p>
          </div>
          <div>
            <h3 className='font-semibold mb-2'>Teaching Resources</h3>
            <ul className='space-y-2'>
              <li className='text-sm'>• Biblical Principles of Giving</li>
              <li className='text-sm'>• Tithing and Offerings</li>
              <li className='text-sm'>• Financial Stewardship</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchSacramentsScreen({ church, onBack }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate
      church={church}
      onBack={onBack}
      title='Sacraments / Ordinances'
      icon={BookOpen}
    >
      <Card>
        <CardContent className='p-4'>
          <Accordion type='single' collapsible>
            <AccordionItem value='baptism'>
              <AccordionTrigger>Baptism</AccordionTrigger>
              <AccordionContent>
                An outward expression of an inward faith in Jesus Christ.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='communion'>
              <AccordionTrigger>Holy Communion</AccordionTrigger>
              <AccordionContent>
                Remembering Christ's sacrifice through bread and wine.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='confirmation'>
              <AccordionTrigger>Confirmation</AccordionTrigger>
              <AccordionContent>
                Affirming one's faith publicly as a mature believer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchNewslettersScreen({ church, onBack }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate
      church={church}
      onBack={onBack}
      title='Newsletters'
      icon={FileText}
    >
      <Card className='mb-4'>
        <CardContent className='p-4'>
          <h3 className='font-semibold mb-2'>Subscribe to Our Newsletter</h3>
          <p className='text-sm text-gray-600 mb-3'>
            Stay updated with church news and events.
          </p>
          <Button className='w-full'>Subscribe</Button>
        </CardContent>
      </Card>
      <div className='space-y-2'>
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardContent className='p-3'>
              <p className='font-medium text-sm mb-1'>January {i} Newsletter</p>
              <p className='text-xs text-gray-500'>Published Jan {i}, 2026</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </ChurchScreenTemplate>
  );
}
