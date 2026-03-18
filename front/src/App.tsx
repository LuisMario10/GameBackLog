import { BrowserRouter, Routes, Route } from "react-router";
import { AppLayout } from "./shared/layouts";
import { HomePage } from "./shared/pages";

export const App = () => { 
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}