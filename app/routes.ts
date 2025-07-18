import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [

    index("routes/home.tsx"),
    layout("routes/dashboard.tsx", [
        route("profile/:userId", "routes/profile.tsx"),
        route("profile/edit", "routes/profile-edit.tsx"),

        route("events/:userId/:slug?", "routes/events.tsx"),
        route("events/create", "routes/event-create.tsx"),
        route("events/:userId/:slug/edit", "routes/event-edit.tsx"),

        route("wishes/:userId", "routes/wishes.tsx"),
        route("wishes/create", "routes/wish-create.tsx"),
        route("wishes/:userId/:slug/edit", "routes/wish-edit.tsx")
    ]),
    route("auth", "routes/auth.tsx")



] satisfies RouteConfig;
