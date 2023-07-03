import { Column, DataType, Model } from 'sequelize-typescript';
import { Gender } from 'src/core/enums';

export class Executive extends Model<Executive> {
  @Column({
    type: DataType.STRING(254),
    primaryKey: true,
  })
  id: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  firstName: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  lastName: string;

  @Column({
    type: DataType.STRING(254),
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
  })
  passwordHash: string;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  registeredAt: Date;

  @Column({
    type: DataType.DATE,
  })
  lastLogin: Date;

  @Column({
    type: DataType.STRING(25),
  })
  contact: string;

  @Column({
    type: DataType.STRING,
  })
  timezone: string;

  @Column({
    type: DataType.INTEGER,
  })
  failedAttempts: number;

  @Column({
    type: DataType.ENUM('Male', 'Female'),
  })
  gender: Gender;

  @Column({
    type: DataType.DATE,
  })
  createdAt: Date;

  @Column({
    type: DataType.DATE,
  })
  updatedAt: Date;
}
