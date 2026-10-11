import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import ControllerArt from '../components/ControllerArt';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { tagline, stats, services, testimonials } from '../data/siteData';

function Home() {
  const statItems: ReactElement[] = [];
  for (let i = 0; i < stats.length; i++) {
    statItems.push(
      <div key={stats[i].label} className='card text-center'>
        <p className='text-3xl font-bold text-neon-light'>{stats[i].value}</p>
        <p className='mt-1 text-silver'>{stats[i].label}</p>
      </div>,
    );
  }

  const serviceItems: ReactElement[] = [];
  for (let i = 0; i < 3; i++) {
    serviceItems.push(
      <ServiceCard
        key={services[i].title}
        service={services[i]}
        detailed={false}
      />,
    );
  }

  const testimonialItems: ReactElement[] = [];
  for (let i = 0; i < testimonials.length; i++) {
    testimonialItems.push(
      <TestimonialCard
        key={testimonials[i].name}
        testimonial={testimonials[i]}
      />,
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className='mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24'>
        <div>
          <p className='font-semibold uppercase tracking-widest text-neon-light'>
            Welcome to PixelVault
          </p>
          <h1 className='mt-3 text-4xl text-white md:text-6xl'>{tagline}</h1>
          <p className='mt-5 text-lg text-silver'>
            Your local game shop for new releases, consoles, gear, trade-ins and
            esports nights. Play more. Pay fair.
          </p>
          <div className='mt-8 flex flex-wrap gap-4'>
            <Link to='/services' className='btn-primary'>
              Browse Services
            </Link>
            <Link to='/about' className='btn-silver'>
              About Us
            </Link>
          </div>
        </div>
        <div className='flex justify-center'>
          <ControllerArt />
        </div>
      </section>

      {/* Company overview */}
      <section className='mx-auto max-w-6xl px-4 py-12'>
        <SectionTitle
          title='Who We Are'
          subtitle='A team of gamers building the best place to play, shop and meet.'
        />
        <p className='mx-auto mb-10 max-w-3xl text-center text-silver'>
          PixelVault started as a small corner store with a big love for games.
          Today we are a community hub with a store, a repair bench and an
          esports arena. Our mission is simple: make great games and great gear
          easy to reach for everyone.
        </p>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>{statItems}</div>
      </section>

      {/* Services */}
      <section className='mx-auto max-w-6xl px-4 py-12'>
        <SectionTitle
          title='What We Offer'
          subtitle='Everything a gamer needs under one roof.'
        />
        <div className='grid gap-6 md:grid-cols-3'>{serviceItems}</div>
        <div className='mt-8 text-center'>
          <Link to='/services' className='btn-primary'>
            See all services
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className='mx-auto max-w-6xl px-4 py-12'>
        <SectionTitle
          title='Player Reviews'
          subtitle='What our community says about us.'
        />
        <div className='grid gap-6 md:grid-cols-3'>{testimonialItems}</div>
      </section>

      {/* Final call to action */}
      <section className='mx-auto max-w-6xl px-4 pb-20 pt-8'>
        <div className='card text-center'>
          <h2 className='text-2xl text-white md:text-3xl'>
            Ready for your next adventure?
          </h2>
          <p className='mt-3 text-silver'>
            Read our latest gaming news and tips on the blog.
          </p>
          <div className='mt-6'>
            <Link to='/blog' className='btn-primary'>
              Visit the Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
