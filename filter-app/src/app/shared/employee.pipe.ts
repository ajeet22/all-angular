import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../employee';
@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

  transform(param1: Employee[], param2: any): Employee[] {
    if(!param1) return []; // if not any parameter return empty array
    if(!param2) return param1; // if no input then return all table array
    var search = param2.toLowerCase(); // input given and converted to lower case
    return param1.filter((a)=>{
      return a.name.toLocaleLowerCase().startsWith(search);
    });
  }

}
