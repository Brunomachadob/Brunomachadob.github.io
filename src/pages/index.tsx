import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Link } from '../components/Link';
import { ScrollTopButton } from '../components/ScrollTopButton';
import { SectionSubTitle, SectionTitle } from '../components/Section';
import { Project, ProjectBody, ProjectTitle } from '../components/Project';
import { TehcnologyList } from '../components/TechnologyList';
import { Experience } from '../components/Experience';

const name = 'Bruno Brandão';

export const Head: HeadFC = () => (
  <>
    <html lang="en" className="scroll-smooth" />
    <body className="antialiased text-gray-800 dark:text-slate-400 bg-gray-100 dark:bg-gray-800" />
    <title>{name}</title>
  </>
);

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <main className="container mx-auto px-4">
        <section
          id="about"
          className="container grid justify-items-center max-w-screen-xl mx-auto px-4 scroll-mt-16 my-10"
        >
          <div className="flex flex-col md:flex-row justify-center items-center">
            <img
              className="flex rounded-full max-w-64 m-4"
              src="https://avatars2.githubusercontent.com/u/4688763"
            />
            <div className="flex flex-col justify-center items-start m-4">
              <p className={`primary-accent-text text-6xl`}>Hello, I&apos;m Bruno.</p>
              <p className={`primary-accent-text text-4xl`}>Lead Software Engineer @ N26</p>
              <div className="flex flex-row justify-center mb-4">
                <Link
                  title="Email"
                  href="mailto:brunomb.web@gmail.com"
                  includeLinkIcon={false}
                  className="m-2 ml-0 text-2xl"
                >
                  <i className="devicon-google-plain"></i>
                </Link>
                <Link
                  title="LinkedIn"
                  href="https://www.linkedin.com/in/brunomachadob/"
                  includeLinkIcon={false}
                  className="m-2 text-2xl"
                >
                  <i className="devicon-linkedin-plain"></i>
                </Link>
                <Link
                  title="Github"
                  href="https://github.com/brunomachadob"
                  includeLinkIcon={false}
                  className="m-2 text-2xl"
                >
                  <i className="devicon-github-original"></i>
                </Link>
              </div>
              <p>
                I&apos;m knowledge addicted, graduated in Computer Engineering that loves math,
                physics and astronomy, that also happens to be a passionate and experienced Software
                Engineer.
              </p>
              <br />
              <p>
                Currently living in Berlin 🇩🇪, working for{' '}
                <Link title="N26" href="https://n26.com/en-de">
                  N26
                </Link>
                , helping them build the first bank you&apos;ll love.
              </p>
            </div>
          </div>
        </section>
        <section id="experience" className="container scroll-mt-16 my-10">
          <SectionTitle>Experience</SectionTitle>
          <div className="mt-5 space-y-10">
            <Experience
              position="Lead Backend Engineer"
              company="N26"
              location="Berlin, Germany"
              startDate={new Date(2019, 9, 1)}
              technologies={[
                'github',
                'kotlin',
                'go',
                'terraform',
                'docker',
                'kubernetes',
                'postgresql',
                'spring',
              ]}
            >
              <p>N26 is building the first bank you&apos;ll ❤️.</p>
              <p>
                Currently working for the Platform Engineering domain, which enables our Product
                Engineers to build awesome products.
              </p>
            </Experience>
            <Experience
              position="Senior Fullstack Engineer"
              company="BorderGuru"
              location="Hamburg, Germany"
              startDate={new Date(2018, 10, 1)}
              endDate={new Date(2019, 8, 1)}
              technologies={[
                'github',
                'nodejs',
                'docker',
                'nomad',
                'typescript',
                'react',
                'mongodb',
              ]}
            >
              <p>
                BorderGuru is a company from Hermes and Otto that simplify shipping to customers all
                over the world.
              </p>
              <p>
                Here I&apos;m currently working in a NodeJS+Typescript microservice with a React
                frontend that handles millions of parcels a year.
              </p>
            </Experience>
            <Experience
              position="Staff Engineer"
              company="Softbox"
              location="Uberlândia, Brazil"
              startDate={new Date(2018, 0, 1)}
              endDate={new Date(2018, 8, 1)}
              technologies={['gitlab', 'java', 'javascript', 'docker']}
            >
              <p>
                Softbox is a well known company in Brazil, with products ranging from electronic
                document management, trade marketing and BI, providing solutions to large companies,
                such as Redbull, Unilever, BASF, among others.
              </p>
              <p>
                I was the technical leader of Dashbox, our BI product and part of the company
                architecture team and one of the core members of{' '}
                <Link className="text-sm" title="ThrustJS" href="https://github.com/Thrustjs">
                  ThrustJS
                </Link>
                .
              </p>
            </Experience>
            <Experience
              position="Software Developer"
              company="Sankhya"
              location="Uberlândia, Brazil"
              startDate={new Date(2011, 8, 1)}
              endDate={new Date(2017, 11, 1)}
              technologies={['subversion', 'java', 'javascript', 'angularjs', 'sass']}
            >
              <p>
                Sankhya is one of the top 3 ERP companies in Brazil, with focus on medium to large
                companies.
              </p>
              <p>
                This is where my carreer properly started as a developer, it was a really long and
                nice journey through various projects and learning experiences, being my last
                project the upgrade of the company framework from Adobe Flex to AngularJS, as a
                technically leading a team of four people.
              </p>
            </Experience>
            <Experience
              position="IT Analyst"
              company="Universidade de Uberaba"
              location="Uberlândia, Brazil"
              startDate={new Date(2010, 1, 1)}
              endDate={new Date(2011, 8, 1)}
            >
              <p>It was a scholarship on my university, essentially my first job.</p>
              <p>
                I used to work as support of the university IT lab, doing computer maintenances on
                software and hardware as well as assisting students within the lab.
              </p>
            </Experience>
          </div>
        </section>
        <section id="education" className="container scroll-mt-16 my-10">
          <SectionTitle>Education</SectionTitle>
          <div className="mt-5 space-y-10">
            <Experience
              position="Computer Engineering"
              company="UNIUBE"
              location="Uberlândia, Brazil"
              startDate={new Date(2010, 0, 1)}
              endDate={new Date(2014, 11, 1)}
            />
          </div>
        </section>
        <section id="projects" className="container scroll-mt-16 my-10">
          <SectionTitle>Projects and toy applications</SectionTitle>
          <SectionSubTitle>
            Bellow you will find some projects and toy applications I have created
          </SectionSubTitle>
          <div className="mt-5 space-y-10">
            <Project>
              <ProjectTitle
                href="https://brunomb.com/xgh"
                technologies={['html5', 'sass', 'github']}
              >
                eXtreme Go Horse (XGH) Process
              </ProjectTitle>
              <ProjectBody>
                <p>
                  Simply to not let the joke die. The{' '}
                  <span className="font-bold">best methodology</span> for software development is
                  back!
                </p>
                <p>
                  Now we have a proper website with an English version, and you can share anchor
                  links for specific axioms.
                </p>
              </ProjectBody>
            </Project>
            <Project>
              <ProjectTitle
                href="https://brunomb.com/ddgw"
                technologies={['html5', 'sass', 'github']}
              >
                Deep Dive into God&apos;s Word
              </ProjectTitle>
              <ProjectBody>
                <p>This is a study/research compilation of my Bible reading.</p>
                <p>
                  My idea is to have a living document that will be updated from time to time
                  according to new understandings, debates with friends and more researches. I also
                  have plans to use this in quick sessions with people that are interested on
                  learning and debating about it.
                </p>
              </ProjectBody>
            </Project>
            <Project>
              <ProjectTitle
                href="https://brunomb.com/smart-game-discounts"
                technologies={['react', 'materialui', 'github']}
              >
                Game Studio Fidelity Program
              </ProjectTitle>
              <ProjectBody>
                <p>This is a study/research compilation of my Bible reading.</p>
                <p>
                  My idea is to have a living document that will be updated from time to time
                  according to new understandings, debates with friends and more researches.
                </p>
                <p>
                  I also have plans to use this in quick sessions with people that are interested on
                  learning and debating about it.
                </p>
              </ProjectBody>
            </Project>
            <Project>
              <ProjectTitle
                href="https://github.com/brunomachadob/word-matcher"
                technologies={['kotlin']}
              >
                Word Matcher
              </ProjectTitle>
              <ProjectBody>
                <p>
                  This is a toy application I created to help me find a valid possible word based in
                  an input that be either:
                </p>
                <ul className="list-disc ml-8">
                  <li>scrambled (e.g. lolhe wdlro)</li>
                  <li>with characters placeholders (e.g. he_lo wo_ld)</li>
                </ul>
                <p>
                  I probably shouldn&apos;t have done this one, this is kinda cheating the games,
                  right? 😬
                </p>
              </ProjectBody>
            </Project>
            <Project>
              <ProjectTitle
                href="https://gist.github.com/Brunomachadob/34f39128df8fef369a647bdbb8f6d44b"
                technologies={['kotlin']}
              >
                Diffie Hellman
              </ProjectTitle>
              <ProjectBody>
                <p>
                  This is a scratch implementation of Diffie-Hellman I created to consolidate the
                  learnings about it.
                </p>
                <p className="italic">
                  You can simply copy and paste it into a IntelliJ IDEA scratch and run.
                </p>
              </ProjectBody>
            </Project>
            <Project>
              <ProjectTitle
                href="https://gist.github.com/Brunomachadob/ff675e893328c5adc439aeec078bee37"
                technologies={['kotlin']}
              >
                Onion Routing (Tor)
              </ProjectTitle>
              <ProjectBody>
                <p>
                  This is a scratch implementation of an Onion Routing system I created to
                  consolidate the learnings about it.
                </p>
                <p className="italic">
                  You can simply copy and paste it into a IntelliJ IDEA scratch and run.
                </p>
              </ProjectBody>
            </Project>
            <Project>
              <ProjectTitle href="https://github.com/Brunomachadob/fluk" technologies={['kotlin']}>
                Fluk
              </ProjectTitle>
              <ProjectBody>
                <p>
                  This is a toy library I created to learn and implement a basic Flux architecture.
                </p>
                <p>It contains all the basic features expected from the architecture, like:</p>
                <ul className="list-disc ml-8">
                  {[
                    'Dispatch mechanism',
                    'Middlewares',
                    'Subscribers',
                    'Value watchers',
                    'Selectors',
                    'Time travel mechanism',
                    'Thread safe store',
                  ].map((item) => (
                    <li key={item}>
                      <input type="checkbox" disabled={true} checked={true} />
                      {` ${item}`}
                    </li>
                  ))}
                </ul>
              </ProjectBody>
            </Project>
            <Project>
              <ProjectTitle href="https://github.com/Brunomachadob/timed" technologies={['kotlin']}>
                Timed
              </ProjectTitle>
              <ProjectBody>
                <p>This is a toy library I created that implements timers and stop-watchers.</p>
              </ProjectBody>
            </Project>
            <Project>
              <ProjectTitle
                href="https://github.com/Brunomachadob/jdbc-executor"
                technologies={['kotlin']}
              >
                jdbc-executor
              </ProjectTitle>
              <ProjectBody>
                <p>This is a toy library I created that wraps and simplifies usage of JDBC.</p>
              </ProjectBody>
            </Project>
          </div>
        </section>
      </main>
      <footer className="flex flex-col items-center p-4 space-y-2">
        <p>
          This page is hosted by <i title='Github Pages' className="devicon-github-original"></i> and powered by
        </p>
        <TehcnologyList
          colored
          technologies={['typescript', 'react', 'gatsby', 'tailwindcss', 'devicon']}
        />
      </footer>
      <ScrollTopButton />
    </>
  );
};

export default IndexPage;
