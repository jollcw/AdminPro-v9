import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  constructor() { }

  @Input() doughnutChartData: string[] = [];
  @Input() doughnutChartLabels: string[] = [];
  @Input() doughnutChartType: string = '';
  @Input() leyenda: string = '';

  ngOnInit(): void {
  }

}
