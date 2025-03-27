// src/components/BlogPost.tsx
import React, { useState, useEffect } from 'react';
import { Post } from '../types';
import rawPosts from '../static/posts.json'
import { useParams } from 'react-router-dom';

interface BlogPostProps {
    post_id: number;
}

const BlogPost = ({ post_id }: BlogPostProps) => {
    const [currentPost, setCurrentPost] = useState<Post | null>(null);
    
    const [comments, setComments] = useState<string[]>([]);
    const [newComment, setNewComment] = useState('');

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setComments([...comments, newComment]);
        setNewComment('');
    };

    return (
        <div>
            <h1>{currentPost.title}</h1>
            <p>{currentPost.content}</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>
        </div>
    );
};

export default BlogPost;
