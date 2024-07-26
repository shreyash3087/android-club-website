/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

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
  return <img src={src} alt="Avatar" className="size-full" />;
}

function AvatarFallback({ children }) {
  return <div className="bg-gray-300 rounded-full">{children}</div>;
}

function Input({ className, ...props }) {
  return <input className={`border p-2 rounded ${className}`} {...props} />;
}
const Author = () => {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-left font-bold">
            About the Everywherist
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Avatar className="w-full h-full">
            <AvatarImage src="https://4kwallpapers.com/images/wallpapers/android-bats-material-design-dark-background-silhouette-5k-2560x1080-8513.png" />
          </Avatar>
          <p className="mt-4 text-left">
            Hello Folks! I'm Android, the smart and fun operating system that
            helps you use your phone or tablet to play games, watch videos, and
            learn new things. Let's explore the digital world together!
          </p>
        </CardContent>
      </Card>
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-left font-bold">
            More Stuff Here
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Link to='/events'> 
  <Button variant="outline" className="w-full text-left flex items-center px-4 py-2 transition duration-300 transform hover:scale-105 hover:bg-green-500 hover:text-white hover:font-bold">
    <StarIcon className="mr-2 h-5 w-5" /> Events
  </Button></Link>
  <Link to='/about'>
  <Button variant="outline" className="w-full text-left flex items-center px-4 py-2 transition duration-300 transform hover:scale-105 hover:bg-green-500 hover:text-white hover:font-bold">
    <BookIcon className="mr-2 h-5 w-5" /> About
  </Button></Link>
  <Link to='/merchandise'>
  <Button variant="outline" className="w-full text-left flex items-center px-4 py-2 transition duration-300 transform hover:scale-105 hover:bg-green-500 hover:text-white hover:font-bold">
    <ArchiveIcon className="mr-2 h-5 w-5" /> Merchandise
  </Button></Link>
  <Link to='/team'>
  <Button variant="outline" className="w-full text-left flex items-center px-4 py-2 transition duration-300 transform hover:scale-105 hover:bg-green-500 hover:text-white hover:font-bold">
    <UsersIcon className="mr-2 h-5 w-5" /> Team
  </Button> </Link>
</CardContent>
      </Card>
      <Card className="bg-white shadow-lg">
  <CardHeader>
    <CardTitle className="text-xl text-left font-bold">
      Contribute to Blogs!
    </CardTitle>
  </CardHeader>
  <CardContent>
    <p className="mb-4 text-left">
      Send us your innovative blogs and get credits!
    </p>
    <h3 className="bg-green-500 text-center h-8 flex items-center justify-center text-white font-bold">
  andoidclub@gmail.com
</h3>  </CardContent>
</Card>
    </div>
  );
};
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

export default Author;
