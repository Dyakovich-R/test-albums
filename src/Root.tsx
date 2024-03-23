import { App } from './App';
import { PostsProvider } from './store/PostsContext';
import { UsersProvider } from './store/UsersContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { NewPostPage } from './pages/NewPostPage';
import { PostDetailsPage } from './pages/PostDetailsPage';
import { PostsPage } from './pages/PostsPage';
import { UsersPage } from './pages/UsersPage';
import { HomePage } from './pages/HomePage';
import { AlbumsPage } from './pages/AlbumsPage';
import { AlbumsDetailPage } from './pages/AlbumsDetailPage';

export const Root = () => (
  <Router>
    <UsersProvider>
      <PostsProvider>
        <Routes>
          <Route
            path="/"
            element={<App />}
          >
            <Route
              index
              element={<HomePage />}
            />

            <Route path="users">
              <Route
                index
                element={<UsersPage />}
              />

              <Route path=":userId?/posts">
                <Route
                  index
                  element={<PostsPage />}
                />
                <Route
                  path=":postId"
                  element={<PostDetailsPage />}
                />
                {/*<Route
                  path="new"
                  element={<NewPostPage />}
                />*/}
              </Route>

              <Route path=":userId/albums">
                <Route
                  index
                  element={<AlbumsPage />}
                />
                <Route
                  path=":albumId"
                  element={<AlbumsDetailPage />}
                />
              </Route>
            </Route>

            <Route path="albums">
              <Route
                index
                element={<AlbumsPage />}
              />
              <Route
                path=":albumId"
                element={<AlbumsDetailPage />}
              />
            </Route>

            <Route path="posts">
              <Route
                index
                element={<PostsPage />}
              />
              <Route
                path=":postId"
                element={<PostDetailsPage />}
              />
              {/*<Route
                path="new"
                element={<NewPostPage />}
              />*/}
            </Route>
          </Route>

          <Route
            path="*"
            element={<p>Page not found</p>}
          />
        </Routes>
      </PostsProvider>
    </UsersProvider>
  </Router>
);
