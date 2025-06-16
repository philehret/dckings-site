
import dynamic from 'next/dynamic';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

const Carousel = dynamic(() => import('react-responsive-carousel').then(mod => mod.Carousel), { ssr: false });

export default function Home() {
  return (
    <main className="font-sans text-gray-900">
      {/* Slideshow */}
      <section className="py-10 bg-gray-100">
        <h2 className="text-center text-3xl font-bold mb-6">Our Team in Action</h2>
        <div className="max-w-5xl mx-auto">
          <Carousel autoPlay infiniteLoop showThumbs={false}>
            {[1,2,3,4,5].map((num) => (
              <div key={num}>
                <img src={`/photo${num}.jpg`} alt={`Team Photo ${num}`} />
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Social Icons */}
      <section className="py-10 text-center bg-white">
        <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
        <div className="flex justify-center space-x-6 text-3xl text-blue-700">
          <a href="https://instagram.com/dckings_lfk" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.youtube.com/@DCKingsLFK" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-10 px-6 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        <iframe
          src="https://forms.office.com/Pages/ResponsePage.aspx?id=UJe0ub7dkUi8QWTNhh8E5NNC4ReBGslPmxvx0dxs_ytURVVBVVpES042U1oxOFZIRkk5MjFHS1c1US4u"
          width="100%"
          height="800"
          className="max-w-4xl mx-auto"
          frameBorder="0"
          title="Contact Form"
        ></iframe>
      </section>

      <footer className="py-6 text-center bg-blue-800 text-white text-sm">
        &copy; {new Date().getFullYear()} Douglas County Kings. All rights reserved.
      </footer>
    </main>
  );
}
