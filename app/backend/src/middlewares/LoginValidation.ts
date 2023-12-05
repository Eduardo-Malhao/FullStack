import { Request, Response, NextFunction } from 'express';

export default class LoginValidation {
  public static validateFields(req: Request, res: Response, next: NextFunction) {
    const fields = req.body;

    if ((!fields.email && !fields.username) || !fields.password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }

		next();
	}
}