import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";

import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

import CareDetailPage from "./pages/CareDetailPage";
import CarePostPage from "./pages/CarePostPage";

import GalleryPage from "./pages/GalleryPage";
import CurrentCheckPage from "./pages/CurrentCheckPage";

import MyPage from "./pages/MyPage";
import ProfileEditPage from "./pages/ProfileEditPage";
import PetAddPage from "./pages/PetAddPage";

function App() {
  return (
      <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<SignUpPage />} path="/signup" />
        <Route element={<CarePostPage />} path="/carepost" />
        <Route element={<CareDetailPage />} path="/caredetail" />
        {/* <Route element={<CareDetailPage />} path="/caredetail/:postId" /> */}
        <Route element={<GalleryPage />} path="/gallery" />
        {/* <Route element={<GalleryPage />} path="/gallery/:petId" /> */}
        <Route element={<CurrentCheckPage />} path="/check" />
        <Route element={<MyPage />} path="/mypage" />
        {/* <Route element={<MyPage />} path="/mypage/:userId" /> */}
        <Route element={<ProfileEditPage />} path="/profileedit" />
        {/* <Route element={<ProfileEditPage />} path="/profileedit/:userId" /> */}
        <Route element={<PetAddPage />} path="/petadd" />
        {/* <Route element={<PetAddPage />} path="/petadd/:userId" /> */}
      </Routes>
  );
}

export default App;
