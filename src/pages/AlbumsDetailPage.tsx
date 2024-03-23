import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Loader } from '../components/Loader';

export const AlbumsDetailPage = () => {
  const { albumId } = useParams();
  const { userId } = useParams();
  const selectedUserId = albumId ? +albumId : 0;
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .then(response => response.json())
      .then(data => {
        setPhotos(data);
        setLoading(false);
      });
  }, [albumId]);

  return (
    <>
      <Helmet>
        <title>
          User {userId} albums details {albumId}
        </title>
        <meta
          name="description"
          content="List of user albums with ID"
        />
      </Helmet>

      {loading && <Loader />}

      {selectedUserId !== 0 && <Link to="..">Back</Link>}
      <h1>
        User {userId} albums {albumId}
      </h1>
      <ul>
        {photos.map((photo: any) => (
          <li key={photo.id}>
            <img
              src={photo.thumbnailUrl}
              alt={photo.title}
            />
            <h2>{photo.title}</h2>
          </li>
        ))}
      </ul>
    </>
  );
};
