import './util/module-alias'
import { Server } from '@overnightjs/core'
import bodyParser from 'body-parser';
import { ForecasController } from './controllers/forecast';

export class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }

  public init(): void {
    this.setupExpress();
    this.setupController();
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
  }

  private setupController(): void {
    const forecasController = new ForecasController();
    this.addControllers([forecasController]);
  }

  public getApp(): Application {
    return this.app;
  }
}
