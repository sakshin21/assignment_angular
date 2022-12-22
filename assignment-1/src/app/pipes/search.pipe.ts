import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(args);
    if(!args){
      return value;
    }
    else{
      if(value.filter((item:any)=> item.name.toLowerCase().indexOf(args.toLowerCase())>-1))
      {
        return value.filter((item:any)=> item.name.toLowerCase().indexOf(args.toLowerCase())>-1);
      }
      else{
        return 1;
      }
    }
    
  }

}

// return value.filter((item:any)=> item.name.toLowerCase().indexOf(args.toLowerCase())>-1);
