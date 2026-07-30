import App from "../DinamicApp";
import { AppMobileContent } from "../../constants/AppMobile";

export default function AppContent() {
  return <App content={AppMobileContent.app} topSpacing="mt-0 sm:mt-0 lg:mt-0" />;
}