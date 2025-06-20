import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    // layout("components/shared/Dashboard/Dashboard.tsx", [
    index("routes/home.tsx"),
    layout("routes/sidebar.tsx", [
        route("profile/:userId", "routes/profile.tsx"),
        route("profile/edit", "routes/profile-edit.tsx"),

        route("events", "routes/events.tsx"),
        route("events/create", "routes/event-create.tsx"),
        route("events/:wishesTag", "routes/event-wishes.tsx"),

        route("wishes", "routes/wishes.tsx"),
        route("wishes/create", "routes/wish-create.tsx")
    ]),
    route("auth", "routes/auth.tsx")
    // ])


] satisfies RouteConfig;
