import {
  Dumbbell,
  HeartPulse,
  Users,
  Swords,
  PersonStanding,
  UserRound,
  Award,
  Clock,
  Soup,
  ShieldCheck,
} from "lucide-react";

export const stats = [
  { label: "Active Members", value: 1200, suffix: "+" },
  { label: "Expert Trainers", value: 24, suffix: "" },
  { label: "Weekly Classes", value: 40, suffix: "+" },
  { label: "Years Running", value: 8, suffix: "" },
];

export const programs = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    desc: "Progressive overload programs to build raw power and lean muscle mass.",
  },
  {
    icon: HeartPulse,
    title: "Cardio & HIIT",
    desc: "High-intensity sessions engineered to torch fat and boost endurance fast.",
  },
  {
    icon: Users,
    title: "CrossFit",
    desc: "Functional, high-energy group workouts that never let training get boring.",
  },
  {
    icon: Swords,
    title: "Boxing",
    desc: "Learn technique, release stress and build serious conditioning on the bag.",
  },
  {
    icon: PersonStanding,
    title: "Yoga & Mobility",
    desc: "Recover, stretch and improve flexibility with guided mobility sessions.",
  },
  {
    icon: UserRound,
    title: "1:1 Personal Training",
    desc: "Fully customized coaching with a dedicated trainer focused on your goals.",
  },
];

export const features = [
  {
    icon: Award,
    title: "Certified Coaches",
    desc: "Internationally certified trainers with years of hands-on experience.",
  },
  {
    icon: Clock,
    title: "Open Early & Late",
    desc: "5:00 AM – 11:00 PM daily so training fits your schedule, not ours.",
  },
  {
    icon: Soup,
    title: "Nutrition Support",
    desc: "Custom meal guidance to make sure your results show outside the gym too.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Clean",
    desc: "Daily sanitization and certified safety standards across every zone.",
  },
];

export const trainers = [
  {
    name: "Yassine El Amrani",
    role: "Strength & Conditioning",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Salma Bennis",
    role: "Yoga & Mobility",
    image:
      "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Karim Idrissi",
    role: "Boxing Coach",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Imane Ziani",
    role: "Nutrition & HIIT",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=500&auto=format&fit=crop",
  },
];

export const pricingPlans = [
  {
    name: "Basic",
    price: 250,
    desc: "Great for getting started",
    featured: false,
    included: ["Full gym access", "Locker room access", "1 free assessment"],
    excluded: ["Group classes", "Personal trainer"],
  },
  {
    name: "Premium",
    price: 450,
    desc: "Best value for real progress",
    featured: true,
    included: [
      "Full gym access",
      "Unlimited group classes",
      "Monthly progress check-in",
      "Nutrition guidance",
    ],
    excluded: ["Personal trainer"],
  },
  {
    name: "Elite",
    price: 800,
    desc: "For those who want it all",
    featured: false,
    included: [
      "Full gym access",
      "Unlimited group classes",
      "Weekly 1:1 personal training",
      "Custom nutrition plan",
      "Priority booking",
    ],
    excluded: [],
  },
];

export const testimonials = [
  {
    name: "Anas Tazi",
    since: "Member since 2025",
    quote:
      "I joined Forge 6 months ago and the transformation has been incredible. The coaches actually care about your progress, not just selling memberships.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Sara Amrani",
    since: "Member since 2024",
    quote:
      "Best gym experience in Fes, hands down. Clean facility, great equipment and the group classes keep me motivated every single week.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Omar Fassi",
    since: "Member since 2023",
    quote:
      "The personal training program helped me hit goals I didn't think were possible in under a year. Highly recommend the Elite plan.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
  },
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Trainers", href: "#trainers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];
