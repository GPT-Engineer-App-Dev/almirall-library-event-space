import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative h-[600px] flex items-center justify-center text-white">
        <img src="/placeholder.svg" alt="Library" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Biblioteca Almirall</h1>
          <p className="text-xl mb-8">Your hub for knowledge and events</p>
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90">Explore More</Button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-lg">
              Biblioteca Almirall is more than just a library. We're a vibrant community space
              that combines the love for books with exciting events. Our dual purpose as a
              library and event venue makes us a unique hub for knowledge seekers and
              cultural enthusiasts alike.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="/placeholder.svg" alt="Library Interior" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{event.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">{event.date}</p>
                  <p className="mt-2">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Become a Member</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community and enjoy exclusive benefits, including priority event bookings,
            extended borrowing periods, and access to special collections.
          </p>
          <Button size="lg" variant="secondary">Join Now</Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <form className="max-w-lg mx-auto">
            <div className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Input placeholder="Subject" />
              <Textarea placeholder="Your Message" />
              <Button type="submit" className="w-full">Send Message</Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Biblioteca Almirall</h3>
              <p>123 Library Street, Booktown, BT 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@bibliotecaalmirall.com</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary"><Facebook /></a>
              <a href="#" className="hover:text-primary"><Twitter /></a>
              <a href="#" className="hover:text-primary"><Instagram /></a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 Biblioteca Almirall. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const events = [
  {
    name: "Author Talk: Maria Garcia",
    date: "May 15, 2024",
    description: "Join us for an evening with bestselling author Maria Garcia as she discusses her latest novel."
  },
  {
    name: "Poetry Slam Night",
    date: "May 22, 2024",
    description: "Experience the power of spoken word at our monthly poetry slam event."
  },
  {
    name: "Children's Story Hour",
    date: "Every Saturday",
    description: "Bring your little ones for an hour of enchanting stories and fun activities."
  }
];

export default Index;