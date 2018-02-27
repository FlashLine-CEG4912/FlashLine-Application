import { suborganization } from '../../data/database.interface';
export class TicketService{

    private ticketnum: suborganization[] = [];

    getTicketNum(){
        return this.ticketnum.slice();
    }



}