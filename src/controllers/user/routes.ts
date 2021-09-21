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
     * /users/all:
     *  get:
     *      summary: Returns all user documents.
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
     *            description: Sort by name, email, role.
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
     *          200:
     *              description: The list of all documents
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
     *            schema:
     *              type: string
     *      security:
     *          - bearerAuth: []
     *      responses:
     *          200:
     *              description: Required single document.
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
     *          200:
     *              description:  Document created successfully!
     */
    .post('/', authMiddleWare(USER, 'write'), validationHandler(validation.create), user.post)

    /**
     * @swagger
     * /users/:
     *  put:
     *      summary: To update a document.
     *      tags: [USERS]
     *      requestBody:
     *          description: Enter details as per example.
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
     *                              example: 6144991cc528890398746b29
     *                          name:
     *                              type: string
     *                              example: Any2
     *                          email:
     *                              type: string
     *                              example: any2@successive.tech
     *                          role:
     *                              type: string
     *                              example: trainer
     *                          password:
     *                              type: string
     *                              example: Any2@123
     *      security:
     *          - bearerAuth: []
     *      responses:
     *          200:
     *              description:  Document updated successfully!
     *          403:
     *              description: Token not found!
     *
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
     *          200:
     *              description: Document deleted successfully!.
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
     *          200:
     *              description: Token created successfully!
     *          403:
     *              description: User does not exists!
     */
    .post('/create-token', user.createToken);

export default router;
