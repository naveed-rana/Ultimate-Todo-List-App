"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const PORT = process.env.PORT || 8080;
app_1.App.listen(PORT, () => {
    console.log("Express running on port " + PORT);
});
//# sourceMappingURL=server.js.map