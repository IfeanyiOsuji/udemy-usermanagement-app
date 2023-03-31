export interface ButtonGroupProps{
    selected?: ButtonGroupSelected,
    onClick(index:number): void;
   direction?:string
   
   }

   export type ButtonGroupSelected = number | null;

   export type ButtonGroupDirection = 'column'|'row'
   
   export interface ButtonGroupState{
       index: number;
   }