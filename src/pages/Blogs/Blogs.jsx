/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import BlogItem from "./BlogItem";
import Intro from "./Intro";
import Author from "./Author";
import Landingpage from "./Landingpage";
import { useLocation } from "react-router-dom";

function Card({ children, className }) {
  return <div className={`rounded-lg p-4 ${className}`}>{children}</div>;
}

function CardHeader({ children }) {
  return <div className="mb-4">{children}</div>;
}

function CardTitle({ children, className }) {
  return <h2 className={`text-xl font-bold ${className}`}>{children}</h2>;
}

function CardDescription({ children, className }) {
  return <p className={`text-sm text-gray-600 ${className}`}>{children}</p>;
}

function CardContent({ children }) {
  return <div>{children}</div>;
}

function Button({ children, className, variant, ...props }) {
  let baseStyles = "px-4 py-2 rounded";
  if (variant === "outline") {
    baseStyles += " border border-gray-300";
  } else {
    baseStyles += " bg-green-600 text-white";
  }
  return (
    <button className={`${baseStyles} ${className}`} {...props}>
      {children}
    </button>
  );
}

function Avatar({ children, className }) {
  return (
    <div className={`inline-flex items-center ${className}`}>{children}</div>
  );
}

function AvatarImage({ src }) {
  return <img src={src} alt="Avatar" className="rounded-full" />;
}

function AvatarFallback({ children }) {
  return <div className="bg-gray-300 rounded-full">{children}</div>;
}

function Input({ className, ...props }) {
  return <input className={`border p-2 rounded ${className}`} {...props} />;
}

export default function Component() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Landingpage />
      <div className="min-h-screen text-gray-800">
        <div className="container mx-auto py-8 px-4">
          <div className="space-y-8 animate-fade-in">
            <Intro />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in-up">
              <div className="lg:col-span-2 space-y-8">
              <BlogItem
  title="Introducing AndroidOS: Your Gateway to a Seamless Digital Experience"
  tag="#AndroidOS #TechInnovation #SmartTechnology"
  img="https://imgeng.jagran.com/images/2023/sep/Google%20Android%20Logo1693974048059.jpg"
  body={`<p>Android is an open-source operating system developed by Google, designed primarily for touchscreen mobile devices such as smartphones and tablets. Based on the Linux kernel, Android provides a robust and flexible platform that supports a vast ecosystem of applications and services. Launched in 2008, Android quickly gained popularity due to its open-source nature, allowing developers to create and distribute apps freely, which fostered innovation and a diverse app marketplace.</p>
        <p>Android’s architecture is built around a layer of Java-based APIs, with a Linux kernel at its core. This architecture provides a solid foundation for a wide range of devices, from budget smartphones to high-end tablets and smartwatches. The operating system’s customization capabilities are a significant advantage, enabling manufacturers to tailor the user experience while maintaining core functionality.</p>
        <p>Google Play, the official app store for Android, hosts millions of apps, games, and digital content, making it one of the largest app marketplaces globally. Android also supports a range of programming languages, including Java, Kotlin, and C++, facilitating the development of a wide array of applications. With continuous updates and a commitment to user privacy and security, Android remains a leading platform in the mobile technology landscape, driving innovation and enhancing user experiences across the globe.</p>`}
  date="12 July 2024"
/>

<BlogItem
  title="Top 5 Android Apps to Boost Your Productivity in 2024"
  img="https://theninehertz.com/wp-content/uploads/2023/02/Android-app-Development-Company.jpg"
  tag="#AndroidApps #Productivity #TechTrends"
  body={`<p>Looking to enhance your productivity? Explore the top 5 Android🤖 apps of 2024, designed to streamline your workflow, boost your efficiency, and keep you organized. Let’s unlock your full potential!</p>
        <ol className="list-decimal pl-5 space-y-4">
          <li>
            <h3 className="font-semibold">Todoist</h3>
            <p><strong>Description:</strong> Todoist is a powerful task manager that helps you organize your tasks and projects with ease. With features like task prioritization, due dates, and project templates, you can stay on top of your work and personal life effortlessly.</p>
            <p><strong>Key Features:</strong></p>
            <ul className="list-disc pl-5">
              <li>Task prioritization</li>
              <li>Project templates</li>
              <li>Collaboration tools</li>
            </ul>
            <p><strong>Download Link:</strong> <a href="https://play.google.com/store/apps/details?id=com.todoist" className="text-green-600 hover:underline">Todoist on Google Play</a></p>
          </li>
          <li>
            <h3 className="font-semibold">Evernote</h3>
            <p><strong>Description:</strong> Evernote is your digital notebook for everything from quick notes to comprehensive to-do lists. With its robust search functionality and ability to sync across all your devices, you'll never lose track of important information again.</p>
            <p><strong>Key Features:</strong></p>
            <ul className="list-disc pl-5">
              <li>Multi-device sync</li>
              <li>Advanced search capabilities</li>
              <li>Note organization</li>
            </ul>
            <p><strong>Download Link:</strong> <a href="https://play.google.com/store/apps/details?id=com.evernote" className="text-green-600 hover:underline">Evernote on Google Play</a></p>
          </li>
          <li>
            <h3 className="font-semibold">Trello</h3>
            <p><strong>Description:</strong> Trello uses boards, lists, and cards to help you organize and prioritize your projects in a fun, flexible, and rewarding way. Perfect for both personal and professional use, Trello keeps everything in one place and makes collaboration easy.</p>
            <p><strong>Key Features:</strong></p>
            <ul className="list-disc pl-5">
              <li>Drag-and-drop interface</li>
              <li>Customizable boards</li>
              <li>Team collaboration</li>
            </ul>
            <p><strong>Download Link:</strong> <a href="https://play.google.com/store/apps/details?id=com.trello" className="text-green-600 hover:underline">Trello on Google Play</a></p>
          </li>
          <li>
            <h3 className="font-semibold">Google Keep</h3>
            <p><strong>Description:</strong> Google Keep is a simple and intuitive app for capturing, editing, sharing, and collaborating on your notes on any device. Jot down quick thoughts, create checklists, and set reminders all within one app.</p>
            <p><strong>Key Features:</strong></p>
            <ul className="list-disc pl-5">
              <li>Voice memos</li>
              <li>Location-based reminders</li>
              <li>Easy sharing</li>
            </ul>
            <p><strong>Download Link:</strong> <a href="https://play.google.com/store/apps/details?id=com.google.android.keep" className="text-green-600 hover:underline">Google Keep on Google Play</a></p>
          </li>
          <li>
            <h3 className="font-semibold">Forest: Stay Focused</h3>
            <p><strong>Description:</strong> Forest is a unique app that helps you stay focused and boost productivity. Plant a tree in Forest when you need to stay away from your phone, and watch it grow as you remain focused. If you leave the app, your tree dies.</p>
            <p><strong>Key Features:</strong></p>
            <ul className="list-disc pl-5">
              <li>Focus timer</li>
              <li>Gamified productivity</li>
              <li>Real tree planting (in partnership with Trees for the Future)</li>
            </ul>
            <p><strong>Download Link:</strong> <a href="https://play.google.com/store/apps/details?id=cc.forestapp" className="text-green-600 hover:underline">Forest on Google Play</a></p>
          </li>
        </ol>
        <p>By incorporating these top Android apps into your daily routine, you can optimize your productivity and stay organized throughout 2024. Give them a try and watch your efficiency soar!</p>`}
  date="12 July 2024"
/>

<BlogItem
  title="Exploring Artificial Intelligence in Modern Technology"
  tag="#AI #TechInnovation #MachineLearning"
  img="https://www.iqvis.com/wp-content/uploads/2017/01/artificial_intelligence.jpg"
  body={`<p>Artificial Intelligence (AI) is revolutionizing modern technology across industries, from healthcare to finance and beyond. AI mimics human intelligence through algorithms and data, enabling machines to learn from experience, adapt to new inputs, and perform human-like tasks. Here's how AI is transforming the landscape:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Healthcare:</strong> AI aids in diagnostics, personalized treatment plans, and drug discovery, improving patient outcomes.</li>
          <li><strong>Finance:</strong> AI powers predictive analytics for market trends, fraud detection, and personalized financial advice.</li>
          <li><strong>Automotive:</strong> AI enables self-driving cars, enhancing safety and efficiency on the roads.</li>
          <li><strong>Retail:</strong> AI enhances customer experience through personalized recommendations and inventory management.</li>
        </ul>
        <p>AI's impact continues to grow, driving innovation and shaping the future of technology. Embrace AI to stay ahead in today's dynamic world!</p>`}
  date="15 July 2024"
/>

<BlogItem
  title="The Rise of Blockchain Technology and Its Implications"
  tag="#Blockchain #Crypto #Decentralization"
  img="https://www.computersupport.com/wp-content/uploads/2017/07/Blockchain-Technology-July-6.jpg"
  body={`<p>Blockchain technology, best known for its role in cryptocurrencies like Bitcoin, is transforming various sectors beyond finance. Here’s why blockchain is gaining traction:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Decentralization:</strong> Blockchain eliminates the need for intermediaries, enhancing transparency and reducing costs.</li>
          <li><strong>Security:</strong> Blockchain's cryptographic security ensures data integrity and protection against tampering.</li>
          <li><strong>Smart Contracts:</strong> Blockchain supports self-executing contracts, automating processes and reducing disputes.</li>
          <li><strong>Supply Chain:</strong> Blockchain enhances traceability and authenticity, ensuring ethical sourcing and reducing fraud.</li>
        </ul>
        <p>Explore blockchain's potential in reshaping industries and fostering innovation globally. Stay informed about this disruptive technology and its evolving applications!</p>`}
  date="18 July 2024"
/>
              </div>

              <Author />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ArchiveIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="5" x="2" y="3" rx="1" />
      <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
      <path d="M10 12h4" />
    </svg>
  );
}

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function ReplyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 17 4 12 9 7" />
      <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
