import { Component, OnInit } from '@angular/core';
import {Userservice} from "../../../shared/Service/userservice";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  public donutChartOptions: any = {};
  public customersChartOptions: any = {};
  public ordersChartOptions: any = {};
  public growthChartOptions: any = {};
  obj = {
    primary: "#6571ff",
    secondary: "#7987a1",
    success: "#05a34a",
    info: "#66d1d1",
    warning: "#fbbc06",
    danger: "#ff3366",
    light: "#e9ecef",
    dark: "#060c17",
    muted: "#7987a1",
    gridBorder: "rgba(77, 138, 240, .15)",
    bodyColor: "#000",
    cardBg: "#fff",
    fontFamily: "'Roboto', Helvetica, sans-serif"
  }
  constructor(private userservice: Userservice) {
  }

  ngOnInit(): void {
    this.donutChartOptions = getDonutChartOptions(this.obj);
    this.customersChartOptions = getCustomerseChartOptions(this.obj);
    this.ordersChartOptions = getOrdersChartOptions(this.obj);
    this.growthChartOptions = getGrowthChartOptions(this.obj);
  }

  countByJob(job: any)
  {
    this.userservice.countByJob(job).subscribe();
  }
}


  function getDonutChartOptions(obj: any) {
    return {
      series: [44, 55, 13, 33],
      chart: {
        height: 300,
        type: "donut",
        foreColor: obj.bodyColor,
        background: obj.cardBg,
        toolbar: {
          show: false
        },
      },
      colors: [obj.primary, obj.warning, obj.danger, obj.info],
      stroke: {
        colors: ['rgba(0,0,0,0)']
      },
      legend: {
        show: true,
        position: "top",
        horizontalAlign: 'center',
        fontFamily: obj.fontFamily,
        itemMargin: {
          horizontal: 8,
          vertical: 0
        },
      },
      dataLabels: {
        enabled: false
      }
    }
  }
    function getCustomerseChartOptions(obj: any) {
      return {
        series: [{
          name: '',
          data: [3844, 3855, 3841, 3867, 3822, 3843, 3821, 3841, 3856, 3827, 3843]
        }],
        chart: {
          type: "line",
          height: 60,
          sparkline: {
            enabled: !0
          }
        },
        colors: [obj.primary],
        xaxis: {
          type: 'datetime',
          categories: ["Jan 01 2022", "Jan 02 2022", "Jan 03 2022", "Jan 04 2022", "Jan 05 2022", "Jan 06 2022", "Jan 07 2022", "Jan 08 2022", "Jan 09 2022", "Jan 10 2022", "Jan 11 2022",],
        },
        stroke: {
          width: 2,
          curve: "smooth"
        },
        markers: {
          size: 0
        },
      }

    };
function getOrdersChartOptions(obj: any) {
  return {
    series: [{
      name: '',
      data: [36, 77, 52, 90, 74, 35, 55, 23, 47, 10, 63]
    }],
    chart: {
      type: "bar",
      height: 60,
      sparkline: {
        enabled: !0
      }
    },
    colors: [obj.primary],
    plotOptions: {
      bar: {
        borderRadius: 2,
        columnWidth: "60%"
      }
    },
    xaxis: {
      type: 'datetime',
      categories: ["Jan 01 2022", "Jan 02 2022", "Jan 03 2022", "Jan 04 2022", "Jan 05 2022", "Jan 06 2022", "Jan 07 2022", "Jan 08 2022", "Jan 09 2022", "Jan 10 2022", "Jan 11 2022",],
    }
  }
};
/**
 * Growth chart options
 */
function getGrowthChartOptions(obj: any) {
  return {
    series: [{
      name: '',
      data: [41, 45, 44, 46, 52, 54, 43, 74, 82, 82, 89]
    }],
    chart: {
      type: "line",
      height: 60,
      sparkline: {
        enabled: !0
      }
    },
    colors: [obj.primary],
    xaxis: {
      type: 'datetime',
      categories: ["Jan 01 2022", "Jan 02 2022", "Jan 03 2022", "Jan 04 2022", "Jan 05 2022", "Jan 06 2022", "Jan 07 2022", "Jan 08 2022", "Jan 09 2022", "Jan 10 2022", "Jan 11 2022",],
    },
    stroke: {
      width: 2,
      curve: "smooth"
    },
    markers: {
      size: 0
    },
  }
};




