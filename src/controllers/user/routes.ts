import { Router } from 'express';
import user from './Controller';
import validation from './validation';
import validationHandler from '../../libs/routes/validationHandler';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import { USER } from '../../libs/constants';

const router: Router = Router();

router
    /**
     * @swagger
     * components:
     *  userResponses:
     *      properties:
     *          _id:
     *              type: string
     *              example: 61598424fbfdfec65e2dd36b
     *          originalId:
     *              type: string
     *              example: 61598424fbfdfec65e2dd36b
     *          name:
     *              type: string
     *              example: John
     *          email:
     *              type: string
     *              example: john@successive.tech
     *          role:
     *              type: string
     *              example: head-trainer
     *          password:
     *              type: string
     *              example: $2b$10$Nc.zk1nfo4uuaT7iiOU86OnmWxxZyRcBVR9Szg5N8scZXKZD0LQvW
     *          createdAt:
     *              type: Date
     *              example: 2021-10-03T10:09:32.460+00:00
     *          __v:
     *              type: integer
     *              example: 0
     *
     */

    /**
     * @swagger
     * /users/all:
     *  get:
     *      summary: To get all user documents and their count.
     *      tags: [USERS]
     *      parameters:
     *          - name: skip
     *            description: Number of documents to skip.
     *            in: query
     *            schema:
     *              type: string
     *          - name: limit
     *            description: Maximum number of documents to fetch.
     *            in: query
     *            schema:
     *              type: string
     *          - name: sortBy
     *            description: Sort documents by name, email or role.
     *            in: query
     *            schema:
     *              type: string
     *          - name: search
     *            description: Search documents by name or email.
     *            in: query
     *            schema:
     *              type: string
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
     *                                  example: Data fetched successfuly!
     *                              result:
     *                                  type: object
     *                                  properties:
     *                                      documents:
     *                                          type: string
     *                                          example: 1
     *                                      userData:
     *                                          type: array
     *                                          items:
     *                                              type: object
     *                                              $ref: '#/components/userResponses'
     *                              status:
     *                                  type: string
     *                                  example: success
     *          '403':
     *              description: Unauthorized Acess!
     *          '404':
     *              description: Not Found!
     *          '500':
     *              description: Internal Server Error!
     */
    .get('/all', authMiddleWare(USER, 'read'), user.getAll)

    /**
     * @swagger
     * /users/:
     *  get:
     *      summary: To get a single user document.
     *      tags: [USERS]
     *      parameters:
     *          - name: originalId
     *            description: OriginalId of the document that need to be fetched.
     *            in: query
     *            required: true
     *            schema:
     *              type: string
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
     *                                  example: Data fetched successfuly!
     *                              result:
     *                                  type: object
     *                                  $ref: '#/components/userResponses'
     *                              status:
     *                                  type: string
     *                                  example: success
     *          '403':
     *              description: Unauthorized Acess!
     *          '404':
     *              description: Not Found!
     *          '500':
     *              description: Internal Server Error!
     */
    .get('/', authMiddleWare(USER, 'read'), validationHandler(validation.getOne), user.getOne)

    /**
     * @swagger
     * /users/:
     *  post:
     *      summary: To create/store a document.
     *      tags: [USERS]
     *      requestBody:
     *          description: Enter details as per example.
     *          required: true
     *          content:
     *              application/json:
     *                  schema:
     *                      type: object
     *                      required:
     *                          - name
     *                          - email
     *                          - role
     *                          - password
     *                      properties:
     *                          name:
     *                              type: string
     *                              example: John
     *                          email:
     *                              type: string
     *                              example: john@successive.tech
     *                          role:
     *                              type: string
     *                              example: head-trainer
     *                          password:
     *                              type: string
     *                              example: John@123
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
     *                                  example: Data added successfuly!
     *                              result:
     *                                  type: object
     *                                  $ref: '#/components/userResponses'
     *                              status:
     *                                  type: string
     *                                  example: success
     *          '403':
     *              description: Unauthorized Acess!
     *          '422':
     *              description: Bad Request!
     *          '500':
     *              description: Internal Server Error!
     */
    .post('/', authMiddleWare(USER, 'write'), validationHandler(validation.create), user.post)

    /**
     * @swagger
     * /users/:
     *  put:
     *      summary: To update a document.
     *      tags: [USERS]
     *      requestBody:
     *          description: >
     *              Enter originalId of the document that needs to be updated along with the fields you want to update
     *              (Eg: name, email, role or password).
     *          required: true
     *          content:
     *              application/json:
     *                  schema:
     *                      type: object
     *                      required:
     *                          - originalId
     *                      properties:
     *                          originalId:
     *                              type: string
     *                              example: 61598424fbfdfec65e2dd36b
     *                          name:
     *                              type: string
     *                              example: John
     *                          email:
     *                              type: string
     *                              example: john@successive.tech
     *                          role:
     *                              type: string
     *                              example: head-trainer
     *                          password:
     *                              type: string
     *                              example: John@123
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
     *                                  example: Data updated successfuly!
     *                              result:
     *                                  type: object
     *                                  $ref: '#/components/userResponses'
     *                              status:
     *                                  type: string
     *                                  example: success
     *          '403':
     *              description: Unauthorized Acess!
     *          '404':
     *              description: Not Found!
     *          '422':
     *              description: Bad Request!
     *          '500':
     *              description: Internal Server Error!
     */
    .put('/', authMiddleWare(USER, 'write'), validationHandler(validation.update), user.put)

    /**
     * @swagger
     * /users/{originalId}:
     *  delete:
     *      summary: To delete a document.
     *      tags: [USERS]
     *      parameters:
     *          - name: originalId
     *            in: path
     *            description: OriginalId of document that needs to be deleted.
     *            required: true
     *            schema:
     *              type: string
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
     *                                  example: Data deleted successfuly!
     *                              result:
     *                                  type: object
     *                                  properties:
     *                                      acknowledged:
     *                                          type: boolean
     *                                          example: true
     *                                      modifiedCount:
     *                                          type: integer
     *                                          example: 1
     *                                      upsertedId:
     *                                          type: string
     *                                          nullable: true
     *                                          example: null
     *                                      upsertedCount:
     *                                          type: integer
     *                                          example: 0
     *                                      matchedCount:
     *                                          type: integer
     *                                          example: 1
     *                              status:
     *                                  type: string
     *                                  example: success
     *          '403':
     *              description: Unauthorized Acess!
     *          '404':
     *              description: Not Found!
     *          '500':
     *              description: Internal Server Error!
     */
    .delete('/:originalId', authMiddleWare(USER, 'delete'), validationHandler(validation.delete), user.delete)

    /**
     * @swagger
     * /users/create-token:
     *  post:
     *      summary: Generates authorization token.
     *      tags: [USERS]
     *      requestBody:
     *          description: Enter email and password to create/generate authorization token.
     *          required: true
     *          content:
     *              application/json:
     *                  schema:
     *                      type: object
     *                      required:
     *                          - email
     *                          - password
     *                      properties:
     *                          email:
     *                              type: string
     *                              example: vinay@successive.tech
     *                          password:
     *                              type: string
     *                              example: vinay@123
     *      responses:
     *          '200':
     *              description: Token created successfully!
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: object
     *                          properties:
     *                              message:
     *                                  type: string
     *                                  example: Token created successfully!
     *                              data:
     *                                  type: object
     *                                  properties:
     *                                      token:
     *                                          type: string
     *                              status:
     *                                  type: string
     *                                  example: success
     *          '500':
     *              description: Internal Server Error!
     */
    .post('/create-token', user.createToken);

export default router;
