import AllUsersPage from "../pages/AllUsersPage";
import AllPostsPage from "../pages/AllPostsPage";
import DefaultLayout from "../layouts/DefaultLayout";

export const paths = {
    POSTS: {
        id: "Home",
        path: "/posts",
        label: "Posts"
    },
    USERS: {
        id: "Users",
        path: "/users",
        label: "Users"
    },
};

const routes = [
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            { path: paths.POSTS.path, element: <AllPostsPage /> },
            { path: paths.USERS.path, element: <AllUsersPage /> },
        ],
    },
];

export default routes;
