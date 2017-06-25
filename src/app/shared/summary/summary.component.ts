import {Component, OnInit} from "@angular/core";
import {EmployeeService} from './service/employee.service';
import Employee from './service/employee';
import {TranslateService} from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  providers: [EmployeeService]
})
export class SummaryComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService, private translate: TranslateService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      translate.use(params['lang'] ? params['lang'] : 'en');

    });

  }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((employees: any) => this.employees = employees);
  }
}
