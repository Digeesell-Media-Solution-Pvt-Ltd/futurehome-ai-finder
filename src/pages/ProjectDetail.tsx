import { useParams, Navigate } from "react-router-dom";

export default function ProjectDetail() {
  const { projectId } = useParams();
  // This generic detail page had demo content. 
  // Real projects use dedicated pages in /pages/projects/.
  // Redirect unknown project IDs to the projects listing.
  return <Navigate to="/projects" replace />;
}
