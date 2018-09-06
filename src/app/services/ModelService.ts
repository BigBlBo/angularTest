import { Injectable } from '@angular/core';

@Injectable()
export class ModelService {
    model: any = {table: [{prvi: '123', drugi: ''}, {prvi: '432', drugi: ''}]};
    registers: any = {regis: {kaka: 'baba', cuca: 'tralal'}};
    screen = 0;
    conuter = 0;

    constructor() { }
}
