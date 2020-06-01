import { Router } from "./deps.ts";

import { driverService, orderService } from "./services/citc.ts";

const router = new Router();

router.post("/api/Order/:id", orderService);
router.post("/api/Driver/:id", driverService);

export default router;