import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [

    index("routes/home.tsx"),
    layout("widgets/layout/index.tsx", [
        route("profile/:username", "routes/profile.tsx"),
        route("profile/edit", "routes/profile-edit.tsx"),

        route("friends/:username", "routes/friends.tsx"),
        route("friends/find", "routes/friends-find.tsx"),

        route("feed", "routes/feed.tsx"),

        route("events/:username", "routes/events.tsx"),
        route("events/:username/:slug", "routes/events-slug.tsx"),
        route("events/create", "routes/event-create.tsx"),
        route("events/:username/:slug/edit", "routes/event-edit.tsx"),

        route("wishes/:username", "routes/wishes.tsx"),
        route("wishes/create", "routes/wish-create.tsx"),
        route("wishes/:username/:slug/edit", "routes/wish-edit.tsx"),

    ]),
    route("auth", "routes/auth.tsx"),
    route("auth/email-confirmation/:token?", "routes/new-verification.tsx"),
    route("auth/password-recovery/:token?", "routes/password-recovery.tsx")




] satisfies RouteConfig;
