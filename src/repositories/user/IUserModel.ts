import IVersionableDocument from '../versionable/IVersionableDocument';
export default interface IUserModel extends IVersionableDocument {
    _id: string;
    name: string;
    email: string;
    role: string;
    password: string;
}
