import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/shared/clients.service';

@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.scss']
})
export class ClientsPageComponent implements OnInit {
  clients: any;

  constructor(private clientService: ClientsService) { }

  ngOnInit(): void {
    this.getAllClients();
  }

  getAllClients() {
    this.clientService.getAllClients().subscribe(data => {
      this.clients = data;
    });
  }

}
