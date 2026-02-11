import { useParams, Navigate } from "react-router-dom";

export default function AreaDetail() {
  const { areaId } = useParams();
  // Redirect to projects filtered by area
  return <Navigate to={`/projects?area=${areaId}`} replace />;
}
