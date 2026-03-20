import { BrowserRouter, Routes, Route } from "react-router";
import { AppLayout } from "./shared/layouts";
import { HomePage, PerfilDetailPage } from "./pages";
import { Navigate } from "react-router";

export const App = () => { 
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/perfil" element={<PerfilDetailPage/>}/>

          <Navigate to="/"/>
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}