import { BaseFootprintModel } from './base-footprint.model';
import { RoleModel } from './role.model'

export interface UserModel extends BaseFootprintModel {
    username?: string;
    password?: string;
    firstname?: string;
    lastname?: string;
    sectionId?: number;
    sectionName?: string;
    role?: RoleModel;
}
