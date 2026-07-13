import { createBrowserRouter } from "react-router-dom";

import HomePage from "@/pages/Home/HomePage";
import DesignSystemPage from "@/pages/DesignSystem/DesignSystemPage";
import LessonsPage from "@/pages/Lessons/LessonsPage";
import LabsPage from "@/pages/Labs/LabsPage";
import ProjectsPage from "@/pages/Projects/ProjectsPage";
import AboutPage from "@/pages/About/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/design-system",
    element: <DesignSystemPage />,
  },
  {
    path: "/lessons",
    element: <LessonsPage />,
  },
  {
    path: "/labs",
    element: <LabsPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);

export default router;