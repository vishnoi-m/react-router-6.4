import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  const error = useRouteError();
  return (
    <>
      <MainNavigation />
      <main id="error-content">
        <h1> {error.message}</h1>
      </main>
    </>
  );
}

export default RootLayout;
