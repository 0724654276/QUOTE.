
  
export class Quote {
    showDescription: boolean;
    constructor(public id: number=0,public name: string='',public description: string='',public author: string='',public completeDate: Date=(new Date)){
      this.showDescription=false;
    }
  
  
  }
