const module = {
    id: 123,
    name: "New Module",
    description: "Module description",
    course: "Web Dev"
};
export default function Module(app) {
    app.get("/lab5/module", (req, res) => {
        res.json(module);
    });
    app.get("/lab5/module/name", (req, res) => {
        res.json(module.name);
    });
};

