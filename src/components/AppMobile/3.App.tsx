import App from "../DynamicApp";
import { AppMobileContent } from "../../constants/ParkSpain_1/AppMobile";

export default function AppContent() {
  return <App content={AppMobileContent.app} topSpacing="mt-0 sm:mt-0 lg:mt-0" />;
}