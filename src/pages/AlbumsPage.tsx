import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Loader } from '../components/Loader';
import Helmet from 'react-helmet';
import { Albums } from '../types';


export const AlbumsPage = () => {
  const { userId } = useParams();
  const selectedUserId = userId ? +userId : 0;
  const [albums, setAlbums] = useState<Albums[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const apiUrl = userId
      ? `https://jsonplaceholder.typicode.com/users/${userId}/albums`
      : `https://jsonplaceholder.typicode.com/albums`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setAlbums(data);
        setLoading(false);
      })
  }, [userId]);

  return (
    <>
      <Helmet>
        <title>Albums</title>
        <meta
          name="description"
          content="List of user albums with ID"
        />
      </Helmet>

      {loading && <Loader />}

      {selectedUserId !== 0 && <Link to="..">Back</Link>}
      <h1 className="title">
        User {selectedUserId} Albums
      </h1>
      <table className="table is-striped is-narrow">
        <thead>
          <tr className="has-background-link-light">
            <th>#</th>
            <th>Title</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {albums.map(album => (
            <tr key={album.id}>
              <td>{album.id}</td>
              <td>{album.title}</td>
              <td>
                <Link
                  to={`${album.id}`}
                  className="icon button is-inverted is-info"
                >
                  <i className="fas fa-pen"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
