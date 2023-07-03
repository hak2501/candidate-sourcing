import { Gender } from 'src/core/enums';

export class ExecutiveCreateDto {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly password: string;
  readonly gender: Gender;
  readonly contact: string;
  readonly timezone: string;
}
