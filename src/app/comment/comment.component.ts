import { Component, Input } from "@angular/core";
import { CommentInterface } from "./comment.interface";

@Component({
    selector: 'app-comments',
    templateUrl: './comment.component.html',
  })
  export class CommentComponent {
    @Input() comment!: CommentInterface;
  }