import { index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.jsx"),
    route('/auth', 'routes/auth.jsx'),
    route('/upload', 'routes/upload.jsx'),
    route('/resume/:id', 'routes/resume.jsx'),
    route('/wipe', 'routes/wipe.jsx'),
];
