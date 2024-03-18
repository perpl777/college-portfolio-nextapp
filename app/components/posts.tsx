import React from 'react'
import Post from '@/app/components/portfolio-page/posts/post';


interface Post {
    id: number;
    id_student: number;
    title: string;
    subtitle: string;
    image?: string;
    link: string;
}

const Posts: React.FC<{ posts: Post[] }> = ({posts}) => {
    return (
        <>
            {posts.map((post, index) => (
                post && (
                    <div key={index} className={`${index % 2 == 0 ? 'justify-self-start' : 'justify-self-end'} max-[500px]:justify-self-center`}>    
                        <Post
                            key={index}
                            title={post.title}
                            subtitle={post.subtitle}
                            image={post.image}
                            link={post.link}
                        />
                    </div>
                )
            ))}
        </>
    )
}

export default Posts