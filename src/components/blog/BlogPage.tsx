// src/components/BlogPage.tsx
import React, { useEffect, useState } from 'react';
import { Post } from '../../types';
import { Link } from 'react-router-dom';
import rawPosts from '../../static/posts.json'

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
                <article key={post.id}>
                    {post.date} <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    <hr />
                </article>
            ))}
        </div>
    );
};

export default BlogPage;

