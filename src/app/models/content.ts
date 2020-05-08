import { BaseFootprintModel } from './base-footprint.model';

export interface contentModel extends BaseFootprintModel {
    event_id?: number;
    event_name_th?: string;
    event_name_en?: string;
    content_detail_th?: string;
    content_detail_en?: string;
    event_datetime?: string;
    post_by?: string;
    post_date?: string;
    published_date?: string;
    csr?: number;
    com_news?: number;
    events?: number;
    active?: number;
}
