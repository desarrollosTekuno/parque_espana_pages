import App from "../DynamicApp";
import { HomeContent } from "../../constants/ParkSpain_1/Home";

export default function AppContent() {
  return <App content={HomeContent.app} />;
}