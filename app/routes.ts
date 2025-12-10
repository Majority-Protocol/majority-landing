import { index, type RouteConfig, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("host", "routes/host.tsx"),
  route("privacy", "routes/privacy.tsx"),
  route("terms", "routes/terms.tsx"),
  route("rules", "routes/rules.tsx"),
  route("android", "routes/android.tsx"),
] satisfies RouteConfig;
