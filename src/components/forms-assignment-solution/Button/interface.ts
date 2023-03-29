export interface ButtonProps{
    type: 'primary' | 'default',
    onclick():void,
    className?:string
}