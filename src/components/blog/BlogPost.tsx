// src/components/BlogPost.tsx
import React, { useState, useEffect } from 'react';
import { Post } from '../../types';
import rawPosts from '../../static/posts.json'
import { useParams } from 'react-router-dom';
import BlogPostLoader from './BlogPostLoader';

const BlogPost = () => {
    const [currentPost, setCurrentPost] = useState<Post | null>(null);

    const { id } = useParams()

    useEffect(() => {
        if (id) {
            const selectedPost = rawPosts.find(post => post.id.toString() === id);
            setCurrentPost(selectedPost || null); // Ensure it's always a defined value
        } else {
            setCurrentPost(null); // Reset if there's no id
        }
    }, [id]);


    if (!currentPost) {
        return <div>Loading...</div>; // Or any fallback UI
    }

    return (
        <div>
            <article>
                <h1>{currentPost.title}</h1>
                <BlogPostLoader post_id={currentPost.id}/>
            </article>
        </div>
    );
};

export default BlogPost;
