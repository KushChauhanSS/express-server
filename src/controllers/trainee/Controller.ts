import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import configuration from '../../config/configuration';

// temporary data
const trainees = [
  { traineeName: 'Gaurav', id: 1 },
  { traineeName: 'Prabal', id: 2 },
  { traineeName: 'Adil', id: 3 },
  { traineeName: 'Sapna', id: 4 },
  { traineeName: 'Vinay', id: 5 }
];

class Trainee {

  get = (req: Request, res: Response, next: NextFunction) => {
    console.log('Get request...!');
    res.status(200).send(trainees);
  }

  post = (req: Request, res: Response, next: NextFunction) => {
    console.log('Post request...!');
    console.log(req.body);
    const { name } = req.body;
    const trainee = {
      traineeName: name,
      id: trainees.length + 1
    };
    trainees.push(trainee);
    res.status(200).send(trainee);
  }

  put = (req: Request, res: Response, next: NextFunction) => {
    console.log('Put request...!');
    console.log(req.body);
    const { name, id } = req.body;
    const trainee = trainees.find(e => e.id === parseInt(id, 10));
    if (!trainee) {
      res.status(404).send('Not Found! Can not update your request!');
    }
    trainee.traineeName = name;
    res.status(200).send(trainee);
  }

  delete = (req: Request, res: Response, next: NextFunction) => {
    console.log('Delete request...!');
    const { id } = req.params;
    const trainee = trainees.find(e => e.id === parseInt(id, 10));
    if (!trainee) {
      res.status(404).send('Not Found! Can not make changes requested!');
    }
    const index = trainees.indexOf(trainee);
    trainees.splice(index, 1);
    res.status(200).send(trainee);
  }

  createToken = (req: Request, res: Response, next: NextFunction) => {
    const token = jwt.sign(req.body, configuration.secret, { expiresIn: '10h' });
    res.status(200).send({ message: 'Token created successfully!', data: { token }, status: 'success' });
  }

}

export default new Trainee();