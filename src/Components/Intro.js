import React, { Suspense } from 'react'
import "./Intro.css"
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Ring } from '@react-three/drei'
import HackerRoom from '../Components/HackerRoom'
import CanvasLoader from '../Components/CanvasLoader'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import Target from '../Components/Target'
import ReactLogo from '../Components/ReactLogo'
import Cube from '../Components/Cube'
import Rings from '../Components/Rings'
import HeroCamera from '../Components/HeroCamera'
import Button from '../Components/Button'

const Intro = () => {

    const isSmall = useMediaQuery({maxWidth:440})
    const isMobile = useMediaQuery({maxWidth:768})
    const isTablet = useMediaQuery({minWidth:768,maxWidth:1024})

    const sizes = calculateSizes(isSmall,isMobile,isTablet)

    return (
    <div className="intro-container">
        <section  id="home" className="intro" >
            <p id="home" className="section_title_intro">
                Hi, I am Kevin <span className='waving-hand'>👋</span>
            </p>
            <h3 className="front-end-title">I build cool stuff for the web</h3>
            <Canvas className='canvas-container'>
                <Suspense fallback={<CanvasLoader />}>
                    <PerspectiveCamera makeDefault position={[0,0,20]} />
                    <HeroCamera>
                        <HackerRoom 
                            position={sizes.deskPosition} 
                            rotation={[0,-Math.PI,0]} 
                            scale={sizes.deskScale}
                        /> 
                    </HeroCamera>
                    <group>
                        <Target position={sizes.targetPosition}  /> 
                        <ReactLogo position={sizes.reactLogoPosition}  />
                        <Cube position={sizes.cubePosition} />
                        <Rings position={sizes.ringPosition} /> 
                    </group> 
                    <ambientLight intensity={1} />
                    <directionalLight position={[10,10,10]} intensity={0.5} />
                </Suspense> 
            </Canvas>
            <a href="#work" className={`btn`}>
                <i className="fas fa-eye"></i>
                View my work 
            </a>
        </section>
    </div>
)
}

export default Intro
