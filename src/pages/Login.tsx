import { useNavigate, Link } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Typography,
  Divider,
  Sheet,
  IconButton,
} from "@mui/joy";

import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { useColorScheme } from "@mui/joy/styles";

export default function Login() {
  const navigate = useNavigate();
  const { mode, setMode } = useColorScheme();

  const loginFunction = (event: any) => {
    event.preventDefault();
    navigate("/dashboard");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        position: "relative",
      }}
    >
      <Sheet
        sx={{
          width: { xs: "100%", md: "50%" },
          px: { md: 16, xs: 6 },
          py: 6,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 1.5,
        }}
      >
        <div className="flex items-center justify-between mb-12">
          <div className={"flex items-center gap-2"}>
            <div
              className={`${mode === "dark" ? "bg-white" : "bg-gray-100"} p-1 rounded-xl`}
            >
              <svg
                width="45"
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeXl2 css-1eklir6"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M10.85 12.65h2.3L12 9zM20 8.69V6c0-1.1-.9-2-2-2h-2.69l-1.9-1.9c-.78-.78-2.05-.78-2.83 0L8.69 4H6c-1.1 0-2 .9-2 2v2.69l-1.9 1.9c-.78.78-.78 2.05 0 2.83l1.9 1.9V18c0 1.1.9 2 2 2h2.69l1.9 1.9c.78.78 2.05.78 2.83 0l1.9-1.9H18c1.1 0 2-.9 2-2v-2.69l1.9-1.9c.78-.78.78-2.05 0-2.83zm-5.91 6.71L13.6 14h-3.2l-.49 1.4c-.13.36-.46.6-.84.6-.62 0-1.05-.61-.84-1.19l2.44-6.86c.2-.57.73-.95 1.33-.95s1.13.38 1.34.94l2.44 6.86c.21.58-.22 1.19-.84 1.19-.39.01-.72-.23-.85-.59"></path>
              </svg>
            </div>

            <h1 className={"text-3xl font-bold"}>Company logo</h1>
          </div>
          <IconButton
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "light" ? (
              <DarkModeRoundedIcon />
            ) : (
              <LightModeRoundedIcon />
            )}
          </IconButton>
        </div>

        <Typography level="h2" sx={{ fontWeight: "bold", mb: 1 }}>
          Sign in
        </Typography>

        <Typography level="body-sm" sx={{ mb: 2 }}>
          New to company?{" "}
          <Link
            to="/register"
            style={{ color: "#1976d2", textDecoration: "none" }}
          >
            Sign up!
          </Link>
        </Typography>

        {/* Google Button */}
        <Button
          variant="soft"
          startDecorator={
            <img
              width="20"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
            />
          }
          sx={{
            mb: 2,
            py: 1.2,
            textTransform: "none",
            bgcolor: mode === "dark" ? "neutral.800" : "neutral.200",
            "&:hover": {
              bgcolor: mode === "dark" ? "neutral.700" : "neutral.300",
            },
          }}
          fullWidth
        >
          Continue with Google
        </Button>

        <Divider sx={{ my: 1 }}>or</Divider>

        <form onSubmit={loginFunction}>
          <FormControl sx={{ mt: 2 }}>
            <FormLabel>Email</FormLabel>
            <Input name="email" required sx={{ borderRadius: "md", py: 1.4 }} />
          </FormControl>

          <FormControl sx={{ mt: 2 }}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              required
              sx={{ borderRadius: "md", py: 1.4 }}
            />
          </FormControl>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
              alignItems: "center",
            }}
          >
            <Checkbox label="Remember me" required={true} />
            <Link
              to="/forgot-password"
              style={{
                color: "#1976d2",
                fontSize: "0.875rem",
                textDecoration: "none",
              }}
            >
              Forgot your password?
            </Link>
          </Box>

          <button
            type="submit"
            className="w-full mt-4 py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-base font-semibold"
          >
            Sign in
          </button>
        </form>

        <Typography
          level="body-xs"
          sx={{ mt: 6, textAlign: "center", opacity: 0.6 }}
        >
          © Your company 2025
        </Typography>
      </Sheet>

      {/* RIGHT PHOTO PANEL */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          width: "50%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage:
            mode === "light"
              ? "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80')"
              : "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
    </Box>
  );
}
