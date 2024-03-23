import React from 'react';
import { User } from '../types/User';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  users: User[];
  onSelect?: (user: User | null) => void;
};

export const UsersList: React.FC<Props> = ({
  users,
  onSelect = () => {},
}) => {
  const { userId } = useParams();
  const selectedUserId = userId ? +userId : 0;

  return (
    <table className="table is-narrow">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Posts</th>
          <th>Albums</th>
        </tr>
      </thead>

      <tbody>
        {users.map(user => (
          <>
            <tr
              key={user.id}
              className={classNames({
                'has-background-warning': user.id === selectedUserId,
              })}
            >
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user.id === selectedUserId ? (
                  <Link
                    to=".."
                    relative="path"
                    className="icon button is-success"
                  >
                    <i className="far fa-eye-slash" />
                  </Link>
                ) : (
                  <Link
                    to={`${user.id}/posts`}
                    relative="path"
                    className="icon button is-success is-inverted"
                  >
                    <i className="far fa-eye" />
                  </Link>
                )}
              </td>
              <td>
                {user.id === selectedUserId ? (
                  <Link
                    to=".."
                    relative="path"
                    className="icon button is-success"
                  >
                    <i className="far fa-images-slash" />
                  </Link>
                ) : (
                  <Link
                    to={`${user.id}/albums`}
                    relative="path"
                    className="icon button is-success is-inverted"
                  >
                    <i className="far fa-images" />
                  </Link>
                )}
              </td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
};
