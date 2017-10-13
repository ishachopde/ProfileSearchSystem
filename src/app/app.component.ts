import { Component } from '@angular/core';
import {GithubService} from './services/github.service';

@Component({
    selector: 'app-root', //this selector should be the same as in main.ts
    template: `
     <nav class="navbar navbar-default">
      <a class="navbar-brand" href="#">Profile Search App: Github</a>
      

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
         
        </ul>
        
      </div>
    </nav>

    <div class="container">
    <profile></profile>
    </div>`,
    providers: [GithubService]
})

export class AppComponent { }
