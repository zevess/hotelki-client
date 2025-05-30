import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    // layout("components/shared/Dashboard/Dashboard.tsx", [
    index("routes/home.tsx"),
    route("profile", "routes/profile.tsx"),
    route("events", "routes/events.tsx")
    // ])


] satisfies RouteConfig;
