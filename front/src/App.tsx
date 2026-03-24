import { BrowserRouter, Routes, Route } from "react-router";
import { AppLayout } from "./shared/layouts";
import { HomePage, PerfilDetailPage, Reviews } from "./pages";

export const App = () => { 
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/perfil" element={ <PerfilDetailPage/> }/>
          <Route path="/reviews" element={ <Reviews/> }/>
          
        </Routes>
      </AppLayout>
    </BrowserRouter>

  );
}