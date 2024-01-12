import { Performer } from "./Performer";
import { Venue } from "./Venue";

export interface EventItem
{
    email:string,
    id:number;
    type:string;
    title:string;
    short_title:string;
    datetime_utc:Date;
    visible_at:Date;
    visible_until:Date;
    venue:Venue;
    performers:Performer[];
}