"use client";

import { useEffect, useState } from 'react';
import { assets } from '@/constant/assets';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BsGithub } from 'react-icons/bs';
import { IoMdOpen } from 'react-icons/io';
import { BsInfoCircle } from 'react-icons/bs';
import { FiFigma } from 'react-icons/fi';
import styles from "./home.module.css";

const tabs = [
    {
        name: 'DAY 1',
        image: assets.home.myLatestProject.suitcase,
        data: [
            {
                slug: 'transform-portfolio-design-to-web-app-1',
                title: 'Opening ceremony',
                image: assets.home.events.openingCeremony,
            },
            {
                slug: 'transform-portfolio-design-to-web-app-2',
                title: 'Exhibition',
                image: assets.home.events.scienceExh,
            },
            {
                slug: 'transform-portfolio-design-to-web-app-3',
                title: 'Coding Challenge',
                image: assets.home.events.codingChallenge,
            },
            {
                slug: 'transform-portfolio-design-to-web-app-4',
                title: 'Cinematography',
                image: assets.home.events.cinema,
            },
            {
                slug: 'transform-portfolio-design-to-web-app-5',
                title: 'Cosplay',
                image: assets.home.events.cos,
            },
            {
                slug: 'transform-portfolio-design-to-web-app-6',
                title: 'Fashion Show',
                image: assets.home.events.fashionShow,
            },
            {
                slug: 'transform-portfolio-design-to-web-app-6',
                title: 'Workshop/Bootcamp',
                image: assets.home.events.workShop,
            },
            {
                slug: 'transform-portfolio-design-to-web-app-6',
                title: ' Bridge Making',
                image: assets.home.events.bridgeMaking,
            },
            {
                slug: 'transform-portfolio-design-to-web-app-6',
                title: ' Eco Cart',
                image: assets.home.events.ecoKart,
            },
            {
                slug: 'transform-portfolio-design-to-web-app-6',
                title: ' Face Painting',
                image: assets.home.events.paintain,
            },
        ]
    },
    {
        name: 'Day 2',
        image: assets.home.myLatestProject.figma,
        data: [
            // {
            //     slug: 'portfolio-web-design',
            //     title: 'Hackathon Starts',
            //     image: assets.home.myLatestProject.projects.portfolioWebsite,
                
            // },
            {
                slug: 'portfolio-web-design',
                title: 'Designing Challenge',
                image: assets.home.events.designC,
                
            },
            {
                slug: 'portfolio-web-design',
                title: 'E-Sports Competition',
                image: assets.home.events.eSportsComp,
                
            },
            {
                slug: 'portfolio-web-design',
                title: 'Capture the flag',
                image: assets.home.events.captureFlag,
                
            },
            {
                slug: 'portfolio-web-design',
                title: 'Treasure Hunt',
                image: assets.home.events.hunting,
                
            },
            {
                slug: 'portfolio-web-design',
                title: 'Finding Mona',
                image: assets.home.events.mona,
                
            },
            {
                slug: 'portfolio-web-design',
                title: 'Jamming',
                image: assets.home.events.jamming,
                
            },
            {
                slug: 'portfolio-web-design',
                title: 'Dance Competition',
                image: assets.home.events.dancing,
                
            },
            {
                slug: 'portfolio-web-design',
                title: 'StandUp Comedy',
                image: assets.home.events.comedy,
                
            },
        ],
    },
    {
        name: "Day 3",
        image: assets.home.myLatestProject.figma,
        data: [
            {
                slug: "closing-ceremony-tech-talk",
                title: "Closing Ceremony & Tech Talk",
                image: assets.home.events.closingCeremony
            },
            // {
            //     slug: "hackathon-presentations-jury-review",
            //     title: "Hackathon Presentations & Jury Review",
            //     // image: "assets.home.events.hackathon"
            // },
            {
                slug: "award-ceremony-recognition",
                title: "Award Ceremony & Recognition",
                image: assets.home.events.awards,
            },
            {
                slug: "cultural-event-star-concert",
                title: "Cultural Event and Star Concert",
                image: assets.home.events.star
            },
            {
                slug: "band-war",
                title: "Band War",
                image: assets.home.events.bandWar,
            }
        ]
    }
    
    
];

// tabs.push({
//     name: 'More',
//     image: assets.home.myLatestProject.rocket,
//     data: []
// });

export default function SectionMyLatestProject() {
    const [activeTab, setActiveTab] = useState(0);

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const router = useRouter();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const tab = urlParams.get('tab');
        if (tab && parseInt(tab) < tabs.length - 1) {
            setActiveTab(parseInt(tab));
        }
    }, [activeTab])

    return (
        <section ref={ref} className={`safe-x-padding ${styles.sectionDistance}`} aria-label='My Latest Project Section'>
            <div className='text-center'>
                <motion.h2 initial={{ y: 100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5 }} className={styles.sectionTitle}>OUR AGENDA</motion.h2>
                {/* <motion.p initial={{ y: 100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.7 }} className={`${styles.sectionDescription} max-w-[706px] mx-auto`}>Take a look at something I&apos;ve worked on, such as a case study, real project, and more</motion.p> */}
            </div>
            <div className='mt-[50px] h-full'>
                <div className='flex flex-col items-center justify-center md:items-start md:flex-row gap-9'>
                    <div className='flex flex-row md:flex-col bg-gray p-3 md:p-[26px] rounded-2xl md:rounded-[25px] gap-x-3 md:gap-x-0 gap-y-[26px]'>
                    {tabs.map((tab, index) => (
    <motion.button
        key={index.toString()}
        className={`relative ${activeTab === index ? 'gradient-bg' : 'bg-white'} w-[75px] h-[75px] md:w-[150px] md:h-[150px] rounded-2xl md:rounded-[25px] flex justify-center items-center shadow-xl overflow-hidden`}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
        onClick={() => {
            setActiveTab(index);
            window.history.pushState({}, '', `?tab=${index}`);
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
    >
        <Image
            src={tab.image}
            alt=""
            width={100}
            height={100}
            style={{ height: 'auto' }}
        />
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full transition-opacity duration-300 opacity-0 bg-gray/10 backdrop-blur-sm rounded-2xl md:rounded-[25px] hover:opacity-100 md:text-2xl">
            <p className={`${activeTab === index ? 'text-white' : 'text-accent'} font-bold transition-colors duration-75 ease-in-out`}>{tab.name}</p>
        </div>
    </motion.button>
))}

                    </div>
                    <div className='overflow-hidden'>
                        <div className='bg-gray rounded-[36px] p-[26px] w-full h-[600px] overflow-y-auto'>
                            <div className='grid grid-flow-row grid-cols-12 gap-[26px]'>
                                {tabs.map((tab, tabIndex) =>
                                    tab.data.map((item, dataIndex) =>
                                        activeTab === tabIndex && (
                                            <motion.div
                                                key={dataIndex.toString()}
                                                className="relative col-span-12 overflow-hidden group xl:col-span-6"
                                                initial={{ opacity: 0, x: -50 }}
                                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                                transition={{ duration: 0.5 }}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <div className="col-span-6">
                                                    <motion.div
                                                        // className="bg-white p-[26px] rounded-2xl md:rounded-[25px] h-[261px] overflow-hidden"
                                                        className="rounded-2xl md:rounded-[25px]"
                                                        initial={{ opacity: 0, x: -50 }}
                                                        animate={inView ? { opacity: 1, x: 0 } : {}}
                                                        transition={{ duration: 0.5, delay: 0.2 + dataIndex * 0.1 }}
                                                    >
                                                        <Image
                                                            className="object-cover w-full h-full"
                                                            src={item.image}
                                                            alt=""
                                                            width={461}
                                                            height={241}
                                                            // style={{  width: '150%', height: '150%' }}

                                                            priority
                                                        />
                                                    </motion.div>
                                                </div>
                                                <div className='absolute top-0 bottom-0 left-0 right-0 hidden transition-all duration-300 gap-y-2 group-hover:block bg-gray/10 backdrop-blur-sm rounded-2xl'>
                                            
    <div className='flex flex-col items-center justify-center w-full h-full select-none lg:select-auto'>
        <p className="p-8 text-xl font-bold text-center transition-all duration-150 ease-in-out line-clamp-1">{item.title}</p>
        <div className='flex flex-row gap-4 text-3xl'>
            {/* {item.repositoryUrl && (
                <Link
                    className="p-4 transition-all duration-150 ease-in-out bg-gray rounded-2xl hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary"
                    href={{
                        pathname: item?.repositoryUrl,
                        query: {
                            utm_source: 'deri.my.id',
                            utm_medium: 'campaign',
                            utm_campaign: 'portfolio'
                        }
                    }}
                    target='_blank'
                    title="Repository"
                >
                    {tabs[activeTab].name.toLowerCase() === "project" ? (
                        <BsGithub />
                    ) : (
                        <FiFigma />
                    )}
                </Link>
            )} */}
          
            {/* Commented out or removed the Link that contains the BsInfoCircle icon */}
            {/* <Link className="p-4 transition-all duration-300 ease-in-out bg-gray rounded-2xl hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary" href={`/project/${item.slug}`} title={`Detail of ${item.title}`}>
                <BsInfoCircle />
            </Link> */}
        </div>
    </div>
</div>


                                            </motion.div>
                                        )
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
