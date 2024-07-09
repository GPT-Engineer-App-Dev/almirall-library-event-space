import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">About Biblioteca Almirall</h1>
      
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/2">
          <Card>
            <CardContent className="p-0">
              <img 
                src="/mona-ruiz.jpg" 
                alt="Mona Ruiz, Founder of Biblioteca Almirall" 
                className="w-full h-auto rounded-t-lg"
              />
            </CardContent>
          </Card>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Meet Our Founder: Mona Ruiz</h2>
          <p className="text-lg mb-4">
            Mona Ruiz, an African Colombian visionary with a passion for literature and community building, 
            founded Biblioteca Almirall with the dream of creating a unique space where knowledge and nature intertwine.
          </p>
          <p className="text-lg mb-4">
            With her distinctive long, fuzzy, curly hair and warm smile, Mona has become a beloved figure in our 
            community, known for her innovative approach to library services and her commitment to inclusivity.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Mona's Vision</h2>
        <p className="text-lg mb-4">
          Mona's vision for Biblioteca Almirall goes beyond traditional library services. She envisioned a place 
          where the love for books could be nurtured in harmony with nature, creating a unique learning environment 
          that stimulates creativity and fosters a deep connection with literature and the environment.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Achievements and Contributions</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Pioneered the concept of forest libraries in Barcelona</li>
          <li>Implemented innovative reading programs for children and adults</li>
          <li>Established partnerships with local schools and universities</li>
          <li>Launched successful environmental education initiatives</li>
          <li>Received the "Innovator in Library Sciences" award in 2022</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Mona's Message</h2>
        <blockquote className="text-lg italic border-l-4 border-primary pl-4 py-2 mb-4">
          "Books are the seeds of knowledge, and our library is the fertile ground where they grow. 
          Here, surrounded by the beauty of nature, we nurture not just the mind, but also the soul."
        </blockquote>
        <p className="text-lg">
          - Mona Ruiz, Founder of Biblioteca Almirall
        </p>
      </div>
    </div>
  );
};

export default About;