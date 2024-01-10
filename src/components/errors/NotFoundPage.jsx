import ErrorPage from "../layout/ErrorPage";
import { TiArrowBack } from "react-icons/ti";
import { ImCrying2 } from "react-icons/im";
const NotFoundPage = () => {
  return (
    <ErrorPage
      code={404}
      message={"This page not found"}
      icon={<TiArrowBack />}
      errorIcon=<ImCrying2 />
      style={{ button: "bg-gray-400 text-white text-sm font-bold" }}
    />
  );
};

export default NotFoundPage;
