import DashboardContextProvider from './context/DashboardContextProvider';
import DashboardLayout from './layouts/DashboardLayout';
import MainLayout from './layouts/MainLayout';
import CommentPage from './pages/CommentPage';
import HomePage from './pages/HomePage';
import MyComponentPage from './pages/MyComponentPage';
import NotFoundPage from './pages/NotFoundPage';
import PostPage from './pages/PostPage';
import ProfilePage from './pages/ProfilePage';
import './styles/styles.scss';
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='profile' element={<ProfilePage />} />
        <Route path='my-component' element={<MyComponentPage />} />
        <Route path="/dashboard/*" element={
          <DashboardContextProvider>
            <DashboardLayout />
          </DashboardContextProvider>
        }>
          <Route path="post" element={<PostPage />} />
          <Route path='comment' element={<CommentPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
