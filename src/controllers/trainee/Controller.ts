import { Request, Response, NextFunction } from 'express';

// temporary data
const trainees = [
  { name: 'Gaurav', id: 1 },
  { name: 'Prabal', id: 2 },
  { name: 'Adil', id: 3 },
  { name: 'Sapna', id: 4 },
  { name: 'Vinay', id: 5 }
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
      name: req.body.name,
      id: trainees.length + 1
    };
    trainees.push(trainee);
    res.status(200).send(trainee);
  }

  put = (req: Request, res: Response, next: NextFunction) => {
    console.log('Put request...!');
    console.log(req.body);
    console.log((req.params.id));
    const trainee = trainees.find(e => e.id === parseInt(req.params.id, 10));
    if (!trainee) {
      res.status(404).send('Not Found! Can not update your request!');
    }
    trainee.name = req.body.name;
    res.status(200).send(trainee);
  }

  delete = (req: Request, res: Response, next: NextFunction) => {
    console.log('Delete request...!');
    console.log(req.body);
    const trainee = trainees.find(e => e.id === parseInt(req.params.id, 10));
    if (!trainee) {
      res.status(404).send('Not Found! Can not make changes requested!');
    }
    const index = trainees.indexOf(trainee);
    trainees.splice(index, 1);
    res.status(200).send(trainee);
  }
}

export default new Trainee();