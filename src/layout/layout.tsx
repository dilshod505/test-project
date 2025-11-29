import { Layout as AntLayout, Menu } from "antd";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Box } from "@mui/joy";
import { AppstoreOutlined, LogoutOutlined } from "@ant-design/icons";

const { Sider, Content } = AntLayout;

export default function Layout({ children }: { children: any }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate("/login");
  };

  const menuItems = [
    {
      key: "/dashboard",
      icon: <AppstoreOutlined />,
      label: <Link to="/dashboard">Dashboard</Link>,
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Logout",
      onClick: handleLogout,
    },
  ];

  return (
    <AntLayout style={{ height: "100vh" }}>
      {/* Sidebar */}
      <Sider
        width={250}
        theme={"light"}
        breakpoint="lg"
        collapsedWidth="0"
        style={{
          backgroundColor: "",
        }}
      >
        <div
          style={{
            height: 64,
            margin: "16px",
            color: "white",
            fontSize: 22,
            fontWeight: 600,
            textAlign: "center",
          }}
          className={"flex items-center justify-center"}
        >
          <svg
            width="45"
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeXl2 css-1eklir6 "
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <path d="M10.85 12.65h2.3L12 9zM20 8.69V6c0-1.1-.9-2-2-2h-2.69l-1.9-1.9c-.78-.78-2.05-.78-2.83 0L8.69 4H6c-1.1 0-2 .9-2 2v2.69l-1.9 1.9c-.78.78-.78 2.05 0 2.83l1.9 1.9V18c0 1.1.9 2 2 2h2.69l1.9 1.9c.78.78 2.05.78 2.83 0l1.9-1.9H18c1.1 0 2-.9 2-2v-2.69l1.9-1.9c.78-.78.78-2.05 0-2.83zm-5.91 6.71L13.6 14h-3.2l-.49 1.4c-.13.36-.46.6-.84.6-.62 0-1.05-.61-.84-1.19l2.44-6.86c.2-.57.73-.95 1.33-.95s1.13.38 1.34.94l2.44 6.86c.21.58-.22 1.19-.84 1.19-.39.01-.72-.23-.85-.59"></path>
          </svg>
          <span className={"text-black font-bold text-3xl"}>Acme Co</span>
        </div>

        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
        />
      </Sider>

      <AntLayout>
        <Content
          style={{
            margin: 0,
            padding: 24,
            height: "100vh",
            overflow: "auto",
            background: "#f5f5f5",
          }}
        >
          <Box>{children}</Box>
        </Content>
      </AntLayout>
    </AntLayout>
  );
}
