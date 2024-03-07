import React from 'react'
import Sidebar from './sidebar'
import Post from './post'
import ImageWork from '@/public/Rectangle 3-1.png'


const BlockPosts = () => {
    return (
        <div className='flex justify-between pb-11'>

            <div className='flex flex-col border-t border-black gap-10'>
                <Post 
                    title='Иллюстрация к книге Маяк'
                    subtitle='Представляет собой рисунок, отражающий тему одиночества. 
                            На фоне заходящего солнца видны бурлящие волны. 
                            Мы находимся с ними на одном уровне и почти утопаем в них, 
                            а все наше внимание привлевено к огромному сияющему солнцу.'
                    image={ImageWork}
                    date='22 февраля, 2024'
                    linkToDownload='#'
                    linkToWatch='#'
                />
                <Post 
                    title='Иллюстрация к книге Маяк'
                    subtitle='Представляет собой рисунок, отражающий тему одиночества. 
                            На фоне заходящего солнца видны бурлящие волны. 
                            Мы находимся с ними на одном уровне и почти утопаем в них, 
                            а все наше внимание привлевено к огромному сияющему солнцу.'
                    date='22 февраля, 2024'
                    linkToDownload='#'
                    linkToWatch='#'
                />
            </div>

            <Sidebar />
        </div>
    )
}

export default BlockPosts