import { BaseFootprintModel } from './base-footprint.model';

export interface imagesModel extends BaseFootprintModel {
    image_id?: number;
    event_id?: number;
    image_name?: string;
    image_storage?: string;
    image_size?: string;
    image_type?: string;
    image_header?: number;
    active?: number;

}
