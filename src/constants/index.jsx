import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Events", href: "/events" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "merchandise", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Community Support",
    description:
      "Join the Android Club at our college and explore the world of Android development. Connect with like-minded individuals and grow together.",
  },
  {
    icon: <Fingerprint />,
    text: "Explore Android Development",
    description:
      "Dive into the world of Android development and create innovative mobile applications. Learn the latest technologies and best practices.",
  },
  {
    icon: <ShieldHalf />,
    text: "Innovative Solutions",
    description:
      "Learn how to create innovative, cutting-edge, and engaging mobile applications. Turn your ideas into reality with our support.",
  },
  {
    icon: <BatteryCharging />,
    text: "Competition",
    description:
      "Showcase your skills in app competitions and get a chance to win exciting prizes. Participate in hackathons and coding challenges.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration",
    description:
      "Work together with your team in real-time on several projects, enabling seamless collaboration and idea sharing. Build projects collectively.",
  },
  {
    icon: <GlobeLock />,
    text: "Global Reach",
    description:
      "Gain valuable insights into user interactions and behavior within your projects & applications with an integrated analytics dashboard. Reach a wider audience.",
  },
];

export const checklistItems = [
  {
    title: "Teamwork and Coordination",
    description:
      "Our club is known for its excellent teamwork and coordination, ensuring every project and event runs smoothly.",
  },
  {
    title: "Diverse Opportunities",
    description:
      "We offer opportunities in various domains such as Android development, IoT, web development, and machine learning.",
  },
  {
    title: "Great Events",
    description:
      "Participate in a variety of events focused on Android development, IoT, web development, and more.",
  },
  {
    title: "Dedication and Hard Work",
    description:
      "Our members are dedicated and hardworking, always striving to achieve excellence in every project and event.",
  },
];


export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
