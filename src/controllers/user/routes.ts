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
     *              example: 6144991cc528890398746b2d
     *          originalId:
     *              type: string
     *              example: 6144991cc528890398746b2d
     *          name:
     *              type: string
     *              example: Vinay
     *          email:
     *              type: string
     *              example: vinay@successive.tech
     *          role:
     *              type: string
     *              example: head-trainer
     *          password:
     *              type: string
     *              example: $2b$10$GrlxBzKzFOOPSOXF2A1kiOYiXqYb6V9xjO.C3wtv8UuQfDpnq2oXW
     *          createdAt:
     *              type: string
     *              example: 2021-09-17T13:33:16.187Z
     *          __v:
     *              type: string
     *              example: 0
     *
     */

    /**
     * @swagger
     * /users/all:
     *  get:
     *      summary: Returns all user documents and their count.
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
     *      security:
     *          - bearerAuth: []
     *      responses:
     *          '200':
     *              description: Object containg the count and list of all documents.
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: object
     *                          properties:
     *                              documents:
     *                                  type: string
     *                                  example: 1
     *                              userData:
     *                                  type: array
     *                                  items:
     *                                      type: object
     *                                      $ref: '#/components/userResponses'
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
     *      summary: Returns a single user document.
     *      tags: [USERS]
     *      parameters:
     *          - name: originalId
     *            description: OriginalId of the document that need to be fetched.
     *            in: query
     *            required: true
     *            schema:
     *              type: string
     *      security:
     *          - bearerAuth: []
     *      responses:
     *          '200':
     *              description: Required single document object.
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: object
     *                          $ref: '#/components/userResponses'
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
     *                              example: Any
     *                          email:
     *                              type: string
     *                              example: any@successive.tech
     *                          role:
     *                              type: string
     *                              example: trainer
     *                          password:
     *                              type: string
     *                              example: Any@123
     *      security:
     *          - bearerAuth: []
     *      responses:
     *          '200':
     *              description: Array of documents containing the newly created document.
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: array
     *                          items:
     *                              type: object
     *                              properties:
     *                                  _id:
     *                                      type: string
     *                                      example: 6144991cc528890398746b2d
     *                                  originalId:
     *                                      type: string
     *                                      example: 6144991cc528890398746b2d
     *                                  name:
     *                                      type: string
     *                                      example: Any
     *                                  email:
     *                                      type: string
     *                                      example: Any@successive.tech
     *                                  role:
     *                                      type: string
     *                                      example: trainer
     *                                  password:
     *                                      type: string
     *                                      example: $2b$10$jmPSPqA6lbyLU22Zsl3wGeSjiG3xmsxUT4L7glubsSnWLnoDFxcki
     *                                  createdAt:
     *                                      type: string
     *                                      example: 2021-09-22T09:06:35.210Z
     *                                  __v:
     *                                      type: string
     *                                      example: 0
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
     *          description: Enter originalId of the document that needs to be updated along with the fields you want to update     .
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
     *                              example: 614af21b54c760392cb531d8
     *                          name:
     *                              type: string
     *                              example: Any2
     *                          email:
     *                              type: string
     *                              example: any2@successive.tech
     *                          role:
     *                              type: string
     *                              example: head-  trainer
     *                          password:
     *                              type: string
     *                              example: Any2@123
     *      security:
     *          - bearerAuth: []
     *      responses:
     *          '200':
     *              description: Array of documents containing the updated document.
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: array
     *                          items:
     *                              type: object
     *                              properties:
     *                                  _id:
     *                                      type: string
     *                                      example: 614afcf4b8ee4c998c4b7b4b
     *                                  originalId:
     *                                      type: string
     *                                      example: 614af21b54c760392cb531d8
     *                                  name:
     *                                      type: string
     *                                      example: Any2
     *                                  email:
     *                                      type: string
     *                                      example: any2@successive.tech
     *                                  role:
     *                                      type: string
     *                                      example: head-trainer
     *                                  password:
     *                                      type: string
     *                                      example: $2b$10$0JF3Y5ufNkjCCXfpG8XUguKjwqqQ8dP2bMKwaVMwoH8bhspS3N0Vi
     *                                  createdAt:
     *                                      type: string
     *                                      example: 2021-09-22T09:06:35.210Z
     *                                  __v:
     *                                      type: string
     *                                      example: 0
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
     *            description: originalId of document that needs to be deleted.
     *            required: true
     *            schema:
     *              type: string
     *      security:
     *          - bearerAuth: []
     *      responses:
     *          '200':
     *              description: Array of documents except the deleted   document.
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: array
     *                          items:
     *                              type: object
     *                              $ref: '#/components/userResponses'
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
