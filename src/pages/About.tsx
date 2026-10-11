import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { milestones, values } from '../data/siteData';

function About() {
  const timelineItems: ReactElement[] = [];
  for (let i = 0; i < milestones.length; i++) {
    timelineItems.push(
      <li key={milestones[i].year} className='card flex gap-4'>
        <span className='text-2xl font-bold text-neon-light'>
          {milestones[i].year}
        </span>
        <span className='text-silver-light'>{milestones[i].text}</span>
      </li>,
    );
  }

  const valueItems: ReactElement[] = [];
  for (let i = 0; i < values.length; i++) {
    valueItems.push(
      <div key={values[i].title} className='card'>
        <h3 className='text-xl text-white'>{values[i].title}</h3>
        <p className='mt-2 text-silver'>{values[i].text}</p>
      </div>,
    );
  }

  return (
    <div className='page-wrap'>
      <h1 className='mb-10 text-center text-4xl uppercase text-white'>
        About Us
      </h1>

      <section className='mb-16'>
        <SectionTitle title='Our Story' />
        <p className='mx-auto max-w-3xl text-center text-silver'>
          PixelVault was founded in 2017 by a group of friends who could not
          find a shop that treated games with respect. We began with 200 titles
          and a single shelf. Over the years we added consoles, a repair bench,
          an online store and an arena for tournaments.
        </p>
      </section>

      <section className='mb-16'>
        <SectionTitle title='Milestones' />
        <ul className='mx-auto max-w-3xl space-y-4'>{timelineItems}</ul>
      </section>

      <section className='mb-16'>
        <SectionTitle
          title='Our Culture'
          subtitle='The values we play by every day.'
        />
        <div className='grid gap-6 md:grid-cols-3'>{valueItems}</div>
      </section>

      <section className='card text-center'>
        <h2 className='text-2xl text-white'>
          Meet the people behind the counter
        </h2>
        <div className='mt-6'>
          <Link to='/teams' className='btn-primary'>
            See our team
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
