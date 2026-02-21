import { ConfigProvider } from "antd";
import { PublicLayout } from "./layouts";

function App() {
   return (
      <ConfigProvider
         theme={{
            token: {
               colorPrimary: "#002F56",
               colorInfo: "#00A1FF",
            },
         }}
      >
         <PublicLayout />
      </ConfigProvider>
   );
}

export default App;
