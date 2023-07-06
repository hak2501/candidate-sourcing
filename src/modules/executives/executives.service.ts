import { Injectable } from '@nestjs/common';
import { Executive } from './executive.entity';
import { ExecutiveCreateDto } from './dto/executiveCreate.dto';
import { ExecutivesRepository } from './executives.repo';
import { Ok, Result, Err } from 'ts-results';
import { ACCOUNT_ALREADY_EXISTS, FIND_ERROR } from './errors';

@Injectable()
export class ExecutivesService {
  constructor(private readonly executivesRepository: ExecutivesRepository) {}

  public async findExecutiveByEmail(
    email: string,
  ): Promise<Result<Executive, Error>> {
    const executive = await this.executivesRepository.findByEmail(email);
    if (!!!executive === true) return new Ok(executive);
    else return new Err(Error(FIND_ERROR));
  }

  public async createExecutive(
    executive: ExecutiveCreateDto,
  ): Promise<Result<boolean, Error>> {
    const exists = await this.executivesRepository.exists(executive.email);
    if (!exists) {
      // Create new
      await this.executivesRepository.save(executive);
      return Ok(true);
    } else {
      // Save old
      return Err(new Error(ACCOUNT_ALREADY_EXISTS));
    }
  }
}
