import React, { useState } from 'react'
import Button from '../components/Button';
import Globe from 'react-globe.gl'
const About = () => {
    const points = [
        { lat: 20.5937, lng: 78.9629, weight: 1 }, // Example point for India
        // Add more points as needed
    ];
    const [hascopied,sethascopied] = useState(false);
    const handlecopy =() =>{
        navigator.clipboard.writeText('aryanmahendru7@gmail.com');
        sethascopied(true);
        setTimeout(() => {
           sethascopied(false); 
        }, 2000);
    }

    const sumWeight = points.reduce((sum, point) => sum + (point.weight || 0), 0);
    return (
        <section className="c-space my-20" id="contact">
            <div className="grid xl:grid-cols-3 xl:grid-rows-1 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl: row-span-4">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid1" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Hi, I'm Aryan!
                                <span className='thinking-emoji'> &#128516;</span>
                            </p>
                            <p className="grid-subtext">
                                <span><i>"The skill? You name it, I have it — or I'm on my way.."</i></span><br />
                                
                                I'm a passionate <strong>coder</strong> and <strong>chess player</strong>, embracing strategy in every game. A <strong>spiritual believer</strong>, I seek deeper meanings in life. from unlocking insights with data science to pushing boundaries in <strong>AI</strong> and <strong>ML</strong> and As a <strong>guitarist</strong>, I express creativity through music, while <strong>reading novels</strong> fuels my imagination. My fascination with <strong>astrophysics</strong> drives my curiosity about the universe, and as a <strong>badminton player</strong>, I enjoy staying active. Each passion shapes my unique journey.
                            </p>

                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid2" className='w-full center ml-6 h-full sm:w-[276px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>Tech Stack</p>
                            <p className="grid-subtext">
                                I specialize in a wide range of technologies.
                                <br />
                                I work extensively with frameworks and libraries like <strong><em>Next.js</em></strong>, <strong><em>React</em></strong>, and <strong><em>Three.js</em></strong> to build dynamic and immersive experiences. For backend development,and Exploring fresh horizons in  <strong><em>Flutter</em></strong>  and <strong><em>native</em></strong> for anroid development
                                I use <strong><em>Node.js</em></strong> and <strong><em>Python</em></strong>, ensuring robust and scalable solutions.  My expertise in databases includes <strong><em>PostgreSQL</em></strong>, <strong><em>Prisma</em></strong>, <strong><em>MongoDB</em></strong>, <strong><em>MySQL</em></strong>, and <strong><em>Firebase</em></strong>, providing flexibility in choosing the right database for any project. Additionally, I have experience with <strong><em>DevOps</em></strong> tools such as <strong><em>Docker</em></strong> and <strong><em>Kubernetes</em></strong>, ensuring smooth deployment and management of applications. and started getting emmense interest in <strong><em>OpenCv</em></strong> and <strong><em>DL</em></strong> algorithms in <strong><em>AI-ML</em></strong> universe
                            </p>

                        </div>
                    </div>
                </div>
                <div className="grid-container">
                    <div className="rounded-3xl xl:row-span-1 w-full sm:h-[326px] h-full flex justify-center items-center">
                        <Globe
                            height={326}
                            width={326}
                            backgroundColor="rgba(0,0,0,0)"
                            backgroundImageOpacity={0.5}
                            showAtmosphere
                            // showGraticules
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            animateIn={true}
                            labelsData={[
                                {
                                    lat: 27.8753,
                                    lng: 79.9147,
                                    text: "HOME!",
                                    color: 'white',
                                    size: 2,
                                    altitude: 0.1,
                                },
                                {
                                    lat: 31.253609,
                                    lng: 75.70367,
                                    text: "I'm here!",
                                    color: 'white',
                                    size: 2.2,
                                    altitude: 0.1,
                                }
                            ]}
                            labelColor={(label) => label.color}
                            labelText={(label) => label.text}
                            labelSize={(label) => label.size}
                            labelAltitude={(label) => label.altitude}

                        />
                    </div>
                    <div>
                        <p className="grid-headtext"><strong><em>Rotate</em></strong> the globe to find me!</p>
                        <p className='grid-subtext'>
                            I am currently embarking on my undergraduate journey at Phagwara, proudly representing the vibrant city of Shahjahanpur in Uttar Pradesh(home).
                        </p>
                        <Button  name="Get in touch!" />
                    </div>

                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid3" className="w-full sm:h-[266px] h-fit object-contain" />
                        <div>
                            <p className='grid-headtext'>
                                Know me well! <span className="waving-hand">&#128521;</span>
                            </p>
                            <p className="grid-subtext">                From crafting great web experiences to building innovative Android apps, from unlocking insights with data science to pushing boundaries in AI and ML — I'm everywhere tech thrives. An untitled Astrophysicist , lifelong learner, creator, and problem solver, bringing ideas to life across the digital spectrum.

                            </p>
                        </div>
                    </div>

                </div>
                <div className='xl:col-span-1 xl:row-span-2 pointer' onClick={handlecopy}>
                <div className='grid-container'>
                <img  src="/assets/grid4.png" alt="grid4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/>
                <div className='space-y-2'>
                <p className='grid-subtext text-center'>
                Contact me!
                </p>
                <div className='copy-container'>
                    <img src={hascopied? "assets/tick.svg":"assets/copy.svg"} alt="copy" />
                    <p className='lg:text-xl md:text-xl font-medium text-gray-gradient text-white'>aryanmahendru7@gmail.com

                    </p>
                </div>
                </div>
                </div>
                </div>

            </div>
        </section>
    )
}

export default About
