import { Component } from '@angular/core';
import {GithubService} from './services/github.service';

@Component({
    selector: 'app-root', //this selector should be the same as in main.ts
    template: '<profile></profile>',
    providers: [GithubService]
})

export class AppComponent { }
