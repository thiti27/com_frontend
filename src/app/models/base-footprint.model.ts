import { BaseEntityModel } from './base-entity.model';

export interface BaseFootprintModel extends BaseEntityModel {
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
  deleteddAt?: Date;
  deletedBy?: string;
}
