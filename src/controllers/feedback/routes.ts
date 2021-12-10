import { Router } from 'express';
import feedback from './Controller';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import { USER } from '../../libs/constants';
import validationHandler from '../../libs/routes/validationHandler';
import validation from './validation';

const router: Router = Router();

/**
 * @swagger
 * components:
 *  feedbackRequest:
 *      properties:
 *          reviewer:
 *              type: string
 *              example: Adil
 *          trainee:
 *              type: string
 *              example: Kush
 *          traineeId:
 *              type: string
 *              example: 6144991cc528890398746b29
 *          attendance:
 *              type: object
 *              required:
 *                  - leaves
 *                  - lateArrivals
 *              properties:
 *                  leaves:
 *                      type: integer
 *                      example: 0
 *                  lateArrivals:
 *                      type: integer
 *                      example: 0
 *          points:
 *              type: object
 *              required:
 *                  - codeQuality
 *                  - communication
 *                  - behaviour
 *                  - tasksDelivery
 *                  - comprehension
 *                  - emailCommunication
 *                  - redmineEntry
 *              properties:
 *                  codeQuality:
 *                      type: integer
 *                      example: 10
 *                  communication:
 *                      type: integer
 *                      example: 10
 *                  behaviour:
 *                      type: integer
 *                      example: 10
 *                  tasksDelivery:
 *                      type: integer
 *                      example: 10
 *                  comprehension:
 *                      type: integer
 *                      example: 10
 *                  emailCommunication:
 *                      type: integer
 *                      example: 10
 *                  redmineEntry:
 *                      type: integer
 *                      example: 10
 *          description:
 *              type: object
 *              properties:
 *                  goodPoints:
 *                      type: string
 *                      example: Complete tasks on time, Ask doubts and questions.
 *                  improvements:
 *                      type: string
 *                      example: Need to read and understand tasks carefully so that not miss any point in the tasks.
 *  feedbackResponse:
 *      properties:
 *          reviewer:
 *              type: string
 *              example: Adil
 *          reviwerId:
 *              type: string
 *              example: 614dc5b830ec6e2107398a49
 *          trainee:
 *              type: string
 *              example: Kush
 *          traineeId:
 *              type: string
 *              example: 6144991cc528890398746b29
 *          attendance:
 *              type: object
 *              required:
 *                  - leaves
 *                  - lateArrivals
 *              properties:
 *                  leaves:
 *                      type: integer
 *                      example: 0
 *                  lateArrivals:
 *                      type: integer
 *                      example: 0
 *          points:
 *              type: object
 *              required:
 *                  - codeQuality
 *                  - communication
 *                  - behaviour
 *                  - tasksDelivery
 *                  - comprehension
 *                  - emailCommunication
 *                  - redmineEntry
 *              properties:
 *                  codeQuality:
 *                      type: integer
 *                      example: 10
 *                  communication:
 *                      type: integer
 *                      example: 10
 *                  behaviour:
 *                      type: integer
 *                      example: 10
 *                  tasksDelivery:
 *                      type: integer
 *                      example: 10
 *                  comprehension:
 *                      type: integer
 *                      example: 10
 *                  emailCommunication:
 *                      type: integer
 *                      example: 10
 *                  redmineEntry:
 *                      type: integer
 *                      example: 10
 *          description:
 *              type: object
 *              properties:
 *                  goodPoints:
 *                      type: string
 *                      example: Complete tasks on time, Ask doubts and questions.
 *                  improvements:
 *                      type: string
 *                      example: Need to read and understand tasks carefully so that not miss any point in the tasks.
 */

/**
 * @swagger
 * /feedback/:
 *  post:
 *      summary: To add feedback.
 *      description: >
 *          User of type 'reviewer' can submit feedback to a user of type 'trainee'.
 *      tags: [FEEDBACK]
 *      requestBody:
 *          description: Enter details as per example.
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - feedback
 *                      properties:
 *                          feedback:
 *                              type: object
 *                              required:
 *                                  - reviewer
 *                                  - trainee
 *                                  - traineeId
 *                                  - attendance
 *                                  - points
 *                              $ref: '#/components/feedbackRequest'
 *      responses:
 *          '200':
 *              description: A JSON object containing a message, result and status.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: Feedback added successfuly!
 *                              result:
 *                                  type: object
 *                                  properties:
 *                                      _id:
 *                                          type: string
 *                                          example: 615890f4bb8b6fc7ef465f26
 *                                      originalId:
 *                                          type: string
 *                                          example: 615890f4bb8b6fc7ef465f26
 *                                      feedback:
 *                                          type: object
 *                                          $ref: '#/components/feedbackResponse'
 *                                      createdAt:
 *                                          type: Date
 *                                          example: 2021-10-02T17:03:48.949+00:00
 */
router.post('/', authMiddleWare(USER, 'write'), validationHandler(validation.addFeedback), feedback.addFeedback);

export default router;
