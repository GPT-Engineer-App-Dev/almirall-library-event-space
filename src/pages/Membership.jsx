import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Membership = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Membership at Biblioteca Almirall</h1>
      
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/2">
          <img 
            src="/library-interior.jpg" 
            alt="Biblioteca Almirall Interior" 
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Our Philosophy for Pre-school</h2>
          <p className="text-lg mb-4">
            At Biblioteca Almirall, we believe that fostering a love for learning and reading 
            starts at an early age. Our pre-school program is designed to nurture curiosity, 
            creativity, and cognitive development in a warm and engaging environment.
          </p>
          <p className="text-lg mb-4">
            We focus on:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Interactive storytelling sessions</li>
            <li>Age-appropriate literacy activities</li>
            <li>Nature-inspired learning experiences</li>
            <li>Social skills development through group activities</li>
            <li>Bilingual exposure (Catalan and Spanish)</li>
          </ul>
          <p className="text-lg">
            Our goal is to create a foundation for lifelong learning and a deep appreciation 
            for literature, all while embracing the unique forest setting of our library.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center mb-8">Membership Benefits</h2>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Standard Membership</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Access to all library resources</li>
              <li>Borrow up to 5 books at a time</li>
              <li>Participate in regular events</li>
              <li>10% discount on paid workshops</li>
            </ul>
            <Button className="w-full mt-4">Join Now</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Family Membership</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>All Standard benefits</li>
              <li>Borrow up to 10 books at a time</li>
              <li>Free entry to family events</li>
              <li>20% discount on children's workshops</li>
            </ul>
            <Button className="w-full mt-4">Join Now</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Premium Membership</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>All Family benefits</li>
              <li>Priority booking for events</li>
              <li>Extended borrowing periods</li>
              <li>Access to rare book collection</li>
            </ul>
            <Button className="w-full mt-4">Join Now</Button>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <p className="text-lg mb-4">
          Ready to join our community of book lovers and lifelong learners?
        </p>
        <Button size="lg">Become a Member Today</Button>
      </div>
    </div>
  );
};

export default Membership;