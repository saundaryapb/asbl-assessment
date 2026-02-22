import { ConfigProvider } from "antd";
import { PublicLayout } from "./layouts";

function App() {
   return (
      <ConfigProvider
         theme={{
            token: {
               colorPrimary: "#002F56",
               colorInfo: "#00A1FF",
               colorLink: "#002F56",
               colorLinkHover: "#00A1FF",
               borderRadius: 8,
               fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
            },
         }}
      >
         <PublicLayout />
      </ConfigProvider>
   );
}

export default App;
