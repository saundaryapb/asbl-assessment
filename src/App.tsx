
import { ConfigProvider } from 'antd'

function App() {

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#002F56',
          colorInfo: '#00A1FF',
        },
      }}
    >
      ASBL
    </ConfigProvider>
  )
}

export default App
