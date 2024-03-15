import React from 'react'
import Image from 'next/image'
import WorkIcon from '@/public/menuposts-icons/bxs-briefcase 1.svg'
import TrophyIcon from '@/public/menuposts-icons/bxs-trophy (1) 1.svg'
import GraduationIcon from '@/public/menuposts-icons/bxs-graduation 1.svg'
import SchoolIcon from '@/public/menuposts-icons/bxs-school 1.svg'
import TennisIcon from '@/public/menuposts-icons/bxs-tennis-ball (1) 1.svg'
import DonateheartIcon from '@/public/menuposts-icons/bxs-donate-heart 1.svg'


const MenuPosts = () => {
    return (
        <div className="dropdown dropdown-left">
            <div tabIndex={0} 
                role="button" 
                className="flex flex-col items-center w-20 py-6 gap-8 border-b border-l border-black border-t-white">
                    <button> <Image src={WorkIcon} alt="WorkIcon" /> </button>
                    <button> <Image src={TrophyIcon} alt="TrophyIcon" /> </button>
                    <button> <Image src={GraduationIcon} alt="GraduationIcon" /> </button>
                    <button> <Image src={SchoolIcon} alt="SchoolIcon" /> </button>
                    <button> <Image src={TennisIcon} alt="TennisIcon" /> </button>
                    <button> <Image src={DonateheartIcon} alt="DonateheartIcon" /> </button>
            </div>
        </div>
    )
}

export default MenuPosts