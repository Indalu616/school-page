import Campus from "./Components/Campus/Campus";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Photo from "./Components/Photos/Photo";
import Programs from "./Components/Programs/Programs";
import Testimonial from "./Components/Testimonials/Testimonial";
import Title from "./Components/Title/Title";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Title title="Our program" subtitle="What We Offer"/>
      <Programs/>
      <Campus/>
      <Title title="Gallery" subtitle="Campus Photos"/>
      <Photo/>
      <Title title="Testimonials" subtitle="What Student says"/>
      <Testimonial/>
      <Title title="Contact us" subtitle="Get In Touch"/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
