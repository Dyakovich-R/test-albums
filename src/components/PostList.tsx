import React from 'react';
import { Post } from '../types/Post';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

type Props = {
  posts: Post[];
  selectedPostId?: number;
  onSelect?: (post: Post) => void;
};

export const PostList: React.FC<Props> = React.memo((({
  posts,
  selectedPostId,
  onSelect = () => {},
}) => {
  return (
    <table className="table is-striped is-narrow">
      <thead>
        <tr className="has-background-link-light">
          <th>#</th>
          <th>Title</th>
          <th>Body</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
  
      <tbody>
        {posts.map(post => (
          <tr 
            key={post.id} 
            className={classNames({
              'has-background-info': selectedPostId === post.id,
            })}
          >
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
            <td>
              <Link
              to={`${post.id}`}
                className="icon button is-inverted is-info"
                onClick={() => onSelect(post)}
              >
                <i className="fas fa-pen"></i>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}));
