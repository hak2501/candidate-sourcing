import { Inject, Injectable } from '@nestjs/common';
import { EXECUTIVES_REPOSITORY, SEQUELIZE } from 'src/core/constants';
import { Executive } from './executive.entity';
import { ExecutiveCreateDto } from './dto/executiveCreate.dto';
import { Sequelize } from 'sequelize';

@Injectable()
export class ExecutivesService {
  private models: any;

  constructor(
    @Inject(EXECUTIVES_REPOSITORY)
    private readonly executivesRepository: typeof Executive,
    @Inject(SEQUELIZE)
    private readonly sequelize: Sequelize,
  ) {
    this.models = sequelize.models;
  }

  private createBaseQuery() {
    return {
      where: {},
      include: [],
    };
  }

  public async findExecutiveByEmail(email: string): Promise<Executive> {
    const baseQuery = this.createBaseQuery();
    baseQuery.where['user_email'] = email;
    const executive = await this.executivesRepository.findOne(baseQuery);
    if (!!executive === true) return executive;
    return null;
  }

  public async exists(email: string): Promise<boolean> {
    const baseQuery = this.createBaseQuery();
    baseQuery.where['user_email'] = email;
    const user = await this.executivesRepository.findOne(baseQuery);
    return !!user === true;
  }

  public async save(executive: ExecutiveCreateDto): Promise<void> {
    const exists = await this.exists(executive.email);
    if (!exists) {
      // Create new
      await this.executivesRepository.create(executive);
    } else {
      // Save old
      const sequelizeUserInstance = await this.executivesRepository.findOne({
        where: { email: executive.email },
      });
      await sequelizeUserInstance.update(executive);
    }
  }
}
