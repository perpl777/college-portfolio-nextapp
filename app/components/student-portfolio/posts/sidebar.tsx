import React from 'react'
import Image from 'next/image'
import WorkIcon from '@/public/sidebar-icons/bxs-briefcase 1.svg'
import TrophyIcon from '@/public/sidebar-icons/bxs-trophy (1) 1.svg'
import GraduationIcon from '@/public/sidebar-icons/bxs-graduation 1.svg'
import SchoolIcon from '@/public/sidebar-icons/bxs-school 1.svg'
import TennisIcon from '@/public/sidebar-icons/bxs-tennis-ball (1) 1.svg'
import DonateheartIcon from '@/public/sidebar-icons/bxs-donate-heart 1.svg'


const Sidebar = () => {
    return (
        <div className="dropdown dropdown-left ">
            <div tabIndex={0} 
                role="button" 
                className="flex flex-col items-center w-20 pt-6 pb-6 gap-8 border-b border-l border-black">
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

export default Sidebar