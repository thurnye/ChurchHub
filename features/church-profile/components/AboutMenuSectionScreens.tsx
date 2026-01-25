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

// ABOUT  SECTION SCREENS
export function ChurchWhoWeAreScreen({ church, onBack }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate
      church={church}
      onBack={onBack}
      title='Who We Are'
      icon={ChurchIcon}
    >
      <Card>
        <CardContent className='p-4 space-y-4'>
          <div>
            <h3 className='font-semibold mb-2'>About {church.name}</h3>
            <p className='text-sm text-gray-600'>{church.description}</p>
          </div>
          <div>
            <h3 className='font-semibold mb-2'>Our History</h3>
            <p className='text-sm text-gray-600'>
              Founded in 1985, we have been serving our community for over 35
              years with unwavering dedication to spreading the Gospel and
              nurturing spiritual growth.
            </p>
          </div>
          <div>
            <h3 className='font-semibold mb-2'>What We Believe</h3>
            <p className='text-sm text-gray-600 mb-2'>
              We are a {church.denomination} congregation committed to biblical
              teaching, vibrant worship, and compassionate service.
            </p>
          </div>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchMissionScreen({ church, onBack }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate
      church={church}
      onBack={onBack}
      title='Mission & Vision'
      icon={Heart}
    >
      <Card className='mb-4'>
        <CardContent className='p-4'>
          <h3 className='font-semibold mb-2'>Our Mission</h3>
          <p className='text-sm text-gray-600'>{church.mission}</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className='p-4'>
          <h3 className='font-semibold mb-2'>Our Vision</h3>
          <p className='text-sm text-gray-600'>{church.vision}</p>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchBeliefsScreen({ church, onBack }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate
      church={church}
      onBack={onBack}
      title='Beliefs / Doctrine'
      icon={BookOpen}
    >
      <Card>
        <CardContent className='p-4'>
          <Accordion type='single' collapsible>
            <AccordionItem value='bible'>
              <AccordionTrigger>The Bible</AccordionTrigger>
              <AccordionContent>
                We believe the Bible is the inspired word of God and our final
                authority for faith and practice.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='salvation'>
              <AccordionTrigger>Salvation</AccordionTrigger>
              <AccordionContent>
                We believe in salvation through faith in Jesus Christ alone.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='trinity'>
              <AccordionTrigger>The Trinity</AccordionTrigger>
              <AccordionContent>
                We believe in one God eternally existing in three persons:
                Father, Son, and Holy Spirit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='church'>
              <AccordionTrigger>The Church</AccordionTrigger>
              <AccordionContent>
                We believe the church is the body of Christ, called to worship,
                fellowship, and service.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchHistoryScreen({ church, onBack }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate
      church={church}
      onBack={onBack}
      title='History'
      icon={FileText}
    >
      <div className='space-y-4'>
        <Card>
          <CardContent className='p-4'>
            <div className='border-l-2 border-indigo-600 pl-4 space-y-4'>
              <div>
                <p className='text-sm font-semibold text-indigo-600'>1985</p>
                <p className='text-sm text-gray-600'>
                  Church founded with 50 members
                </p>
              </div>
              <div>
                <p className='text-sm font-semibold text-indigo-600'>1992</p>
                <p className='text-sm text-gray-600'>
                  New building construction completed
                </p>
              </div>
              <div>
                <p className='text-sm font-semibold text-indigo-600'>2005</p>
                <p className='text-sm text-gray-600'>
                  Expansion to include youth center
                </p>
              </div>
              <div>
                <p className='text-sm font-semibold text-indigo-600'>2020</p>
                <p className='text-sm text-gray-600'>
                  Launch of online worship services
                </p>
              </div>
              <div>
                <p className='text-sm font-semibold text-indigo-600'>2026</p>
                <p className='text-sm text-gray-600'>
                  Over 2,000 active members
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </ChurchScreenTemplate>
  );
}

export function ChurchStructureScreen({ church, onBack }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate
      church={church}
      onBack={onBack}
      title='Structure'
      icon={Users}
    >
      <Card>
        <CardContent className='p-4 space-y-3'>
          <div>
            <h3 className='font-semibold mb-2'>Denominational Structure</h3>
            <p className='text-sm text-gray-600 mb-3'>{church.denomination}</p>
            <div className='pl-4 border-l-2 border-gray-200 space-y-2'>
              <p className='text-sm'>Region / Diocese</p>
              <p className='text-sm'>Provincial Oversight</p>
              <p className='text-sm'>Local Church Governance</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchArchitectureScreen({
  church,
  onBack,
}: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate
      church={church}
      onBack={onBack}
      title='Architecture & Heritage'
      icon={ChurchIcon}
    >
      <Card>
        <CardContent className='p-4 space-y-4'>
          <img
            src={church.image}
            alt={church.name}
            className='w-full h-48 rounded-lg object-cover'
          />
          <div>
            <h3 className='font-semibold mb-2'>Architectural Features</h3>
            <p className='text-sm text-gray-600'>
              Our building features traditional {church.denomination}{' '}
              architecture with beautiful stained glass windows, a spacious
              sanctuary, and modern facilities.
            </p>
          </div>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchClergyScreen({ church, onBack }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate
      church={church}
      onBack={onBack}
      title='Clergy & Leadership'
      icon={Users}
    >
      <div className='space-y-3'>
        <Card>
          <CardContent className='p-4'>
            <div className='flex items-start gap-3'>
              <img
                src={church.pastor.photo}
                alt={church.pastor.name}
                className='w-16 h-16 rounded-full object-cover'
              />
              <div>
                <h3 className='font-semibold'>{church.pastor.name}</h3>
                <p className='text-sm text-gray-600 mb-2'>
                  {church.pastor.role}
                </p>
                <p className='text-sm text-gray-600'>{church.pastor.bio}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        {church.clergy.map((clergy, idx) => (
          <Card key={idx}>
            <CardContent className='p-4'>
              <div className='flex items-center gap-3'>
                <img
                  src={clergy.photo}
                  alt={clergy.name}
                  className='w-12 h-12 rounded-full object-cover'
                />
                <div>
                  <h4 className='font-medium'>{clergy.name}</h4>
                  <p className='text-sm text-gray-600'>{clergy.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </ChurchScreenTemplate>
  );
}

export function ChurchStaffScreen({ church, onBack }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate
      church={church}
      onBack={onBack}
      title='Staff & Lay Leaders'
      icon={Briefcase}
    >
      <Card>
        <CardContent className='p-4 space-y-3'>
          {[
            'Church Warden - John Smith',
            'Music Director - Sarah Williams',
            'Youth Coordinator - Michael Brown',
            'Administrator - Jane Doe',
          ].map((staff, idx) => (
            <div
              key={idx}
              className='flex items-center justify-between py-2 border-b border-gray-100 last:border-0'
            >
              <p className='text-sm'>{staff}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchNewsScreen({ church, onBack }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate
      church={church}
      onBack={onBack}
      title='News'
      icon={FileText}
    >
      <div className='space-y-3'>
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardContent className='p-4'>
              <h3 className='font-semibold mb-2'>Church Announcement {i}</h3>
              <p className='text-sm text-gray-600 mb-2'>
                Important update for our congregation. Stay tuned for more
                details.
              </p>
              <p className='text-xs text-gray-500'>January {20 + i}, 2026</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </ChurchScreenTemplate>
  );
}

export function ChurchCareersScreen({ church, onBack }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate
      church={church}
      onBack={onBack}
      title='Careers'
      icon={Briefcase}
    >
      <Card>
        <CardContent className='p-4 space-y-4'>
          <div>
            <h3 className='font-semibold mb-2'>Join Our Team</h3>
            <p className='text-sm text-gray-600 mb-4'>
              We're always looking for passionate individuals to join our
              ministry team.
            </p>
          </div>
          <div className='space-y-2'>
            <Card className='bg-gray-50'>
              <CardContent className='p-3'>
                <h4 className='font-medium text-sm mb-1'>Youth Pastor</h4>
                <p className='text-xs text-gray-600'>Full-time position</p>
              </CardContent>
            </Card>
            <Card className='bg-gray-50'>
              <CardContent className='p-3'>
                <h4 className='font-medium text-sm mb-1'>Worship Leader</h4>
                <p className='text-xs text-gray-600'>Part-time position</p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
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
