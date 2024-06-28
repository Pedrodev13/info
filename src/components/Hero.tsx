import React from "react"
import Imagem from '../../public/images/logo.svg'
import Central from '../../public/images/HighlightImage.svg'

const Hero = () => (
    <div className="overflow-x-hidden">
        <div>
            <img className="" src={Imagem.src} alt="Logo" />
        </div>
            <div className="my-8">
                <div className="gap-28 block md:flex md:justify-center md:items-center">
                    <div className="md:h-auto">
                    <div className="text-white font-montserrat text-4xl lg:text-[75px] lg:leading-none lg:mr-12">Inicie do zero <br /> <span className="text-[#acea00]">informática</span> e <br /> <span className="text-[#acea00]">programação</span>. <br />
                    Especial para <br /> Cardeal da Silva.</div>
                    <p className="text-white text-[12px] lg:text-[20px] font-montSerrat-regular">Informática e programação do <br /> zero no conforto da sua casa.</p>
                    </div>
                    <div className=" mt-10 lg:mt-0">
                    <img className="w-full h-auto" src={Central.src} alt="" />
                </div>
                </div>
                
            </div>

    </div>
)

export default Hero;