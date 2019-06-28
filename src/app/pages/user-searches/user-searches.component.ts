import { Component, OnInit } from '@angular/core';
import { UserSearchesService } from 'src/services/domain/userSearches.service';
import { UserSearchesDTO } from 'src/models/userSearches.dto';

@Component({
  selector: 'app-user-searches',
  templateUrl: './user-searches.component.html',
  styleUrls: ['./user-searches.component.scss']
})
export class UserSearchesComponent implements OnInit {

  constructor(
    public userSearchesService: UserSearchesService
  ) { }
  userSearches: UserSearchesDTO[];

  ngOnInit() {
    this.userSearchesFill();
  }

  userSearchesFill() {
    this.userSearchesService.findAll()
      .subscribe(response => {
        this.userSearches = response;
        return true;
      },
        error => {
          this.userSearches = null;
        });
  }

  async deleteUserSearches(id){
    await this.userSearchesService.deleteUserSearches(id);
    this.userSearches = null;
    this.userSearchesFill();
  }

}
