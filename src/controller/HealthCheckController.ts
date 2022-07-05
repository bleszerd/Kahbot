import { Request, Response } from "express";

class HealthCheckController {
  healthCheck(_: Request, res: Response) {
    const healthData = {
      health: true,
      date: new Date().toUTCString(),
    };

    res.json({ data: healthData });
  }
}

export default HealthCheckController;
