import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    // layout("components/shared/Dashboard/Dashboard.tsx", [
    index("routes/home.tsx"),
    layout("routes/sidebar.tsx", [
        route("profile", "routes/profile.tsx"),
        route("profile/edit", "routes/profile-edit.tsx"),

        route("events", "routes/events.tsx"),
        route("events/create", "routes/event-create.tsx"),

        route("wishes", "routes/wishes.tsx")
    ])

    // ])


] satisfies RouteConfig;
