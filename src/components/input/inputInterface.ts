export interface InputComponentProps{
    label:string,
    onChange(e: React.ChangeEvent<HTMLInputElement>):void,
    value:any,
    error:string,
    name:string
}