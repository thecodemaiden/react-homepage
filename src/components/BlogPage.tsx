// src/components/BlogPage.tsx
import React, { useEffect, useState } from 'react';
import { Post } from '../types';
import { useParams, Link } from 'react-router-dom';
import BlogPost from './BlogPost';
import rawPosts from '../static/posts.json'

const BlogPage = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = (() => {
        setPosts(rawPosts);
    });

    return (
        <div>
            <h1>Blog</h1>
            {posts.map((post) => (
                <div key={post.id}>
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default BlogPage;

