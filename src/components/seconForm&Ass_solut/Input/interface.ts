export interface InputProps{
    label:string,
    onChange(event:React.ChangeEvent<HTMLInputElement>):void,
    value:string
    error?:string
}