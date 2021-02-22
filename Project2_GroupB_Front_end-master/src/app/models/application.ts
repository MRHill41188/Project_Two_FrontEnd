import { ApplicationAnswer } from './application-answer';
import { Template } from './template';

export class Application {

    public firstName: string = "";
    public lastName: string = "";
    public email: string = "";
    public phone: string = "";

    public address: string = "";
    public city: string = "";
    public state: string = "";
    public zipCode: string = "";

    public template: Template = null;

    public answers: ApplicationAnswer[] = [];
}