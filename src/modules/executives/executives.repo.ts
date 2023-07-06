import { Inject, Injectable } from '@nestjs/common';
import { EXECUTIVES_MODEL, SEQUELIZE } from 'src/core/constants';
import { Executive } from './executive.entity';
import { Sequelize } from 'sequelize-typescript';
import { ExecutiveCreateDto } from './dto/executiveCreate.dto';

@Injectable()
export class ExecutivesRepository {
  private models: any;
  constructor(
    @Inject(EXECUTIVES_MODEL) private readonly executives: typeof Executive,
    @Inject(SEQUELIZE) private readonly sequelize: Sequelize,
  ) {
    this.models = sequelize.models;
  }

  private createBaseQuery() {
    return {
      where: {},
      include: [
        {
          //   model: this.models.Users,
        },
      ],
    };
  }

  public async findByEmail(email: string): Promise<Executive> {
    const baseQuery = this.createBaseQuery();
    baseQuery.where['user_email'] = email;
    const executive = await this.executives.findOne(baseQuery);
    if (!!executive === true) return executive;
    return null;
  }

  public async exists(email: string): Promise<boolean> {
    const baseQuery = this.createBaseQuery();
    baseQuery.where['user_email'] = email;
    const user = await this.executives.findOne(baseQuery);
    return !!user === true;
  }

  public async save(executive: ExecutiveCreateDto): Promise<void> {
    const exists = await this.exists(executive.email);
    if (!exists) {
      // Create new
      await this.executives.create(executive);
    } else {
      // Save old
      const sequelizeUserInstance = await this.executives.findOne({
        where: { email: executive.email },
      });
      await sequelizeUserInstance.update(executive);
    }
  }
}
