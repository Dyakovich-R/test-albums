/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';

import { PostList } from '../components/PostList';
import { Loader } from '../components/Loader';
import { PostsContext } from '../store/PostsContext';
import { Link, useParams } from 'react-router-dom';

export const PostsPage: React.FC = () => {
  const { posts, loading, errorMessage, loadPosts } = useContext(PostsContext);

  const { userId } = useParams();
  const selectedUserId = userId ? +userId : 0;

  useEffect(() => {
    loadPosts(selectedUserId);
  }, [selectedUserId]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="">
      {selectedUserId !==0 && <Link to="..">Back</Link>}

      <h1 className="title">User {selectedUserId} Posts</h1>
      {posts.length > 0 ? (
        <PostList posts={posts} />
      ) : (
        <p>There are no posts yet</p>
      )}
      {errorMessage && <p className="notification is-danger">{errorMessage}</p>}
    </div>
  );
};
