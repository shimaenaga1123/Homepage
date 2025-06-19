import { Component, inject } from '@angular/core';
import { RouterOutlet, Router, RouterLink } from '@angular/router';
import {
  CommonModule,
  NgOptimizedImage,
  provideImgixLoader,
} from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule, MatNavList, MatListItem } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { IsActiveMatchOptions } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatButton,
    MatIcon,
    RouterLink,
    MatNavList,
    MatListItem,
    MatListItem,
    NgOptimizedImage,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = "shimaenga's profile";
  router = inject(Router);
  protected isActiveMatchOptions: IsActiveMatchOptions = {
    paths: 'exact',
    matrixParams: 'ignored',
    queryParams: 'ignored',
    fragment: 'ignored',
  };
}
