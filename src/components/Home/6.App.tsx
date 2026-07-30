import App from "../DinamicApp";
import { HomeContent } from "../../constants/Home";

export default function AppContent() {
  return <App content={HomeContent.app} />;
}