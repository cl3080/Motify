import { Injectable } from '@angular/core';

@Injectable()
export class User {
    public token: string = '';
    public name: string = '';
    public id: string = '';
    public photo: string = '';
    public constructor() {}
}