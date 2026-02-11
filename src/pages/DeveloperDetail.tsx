import { useParams, Navigate } from "react-router-dom";

export default function DeveloperDetail() {
  const { developerId } = useParams();
  // Redirect to projects filtered by developer
  return <Navigate to={`/projects?developer=${developerId}`} replace />;
}
