import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

   img = "https://cdn.pixabay.com/photo/2021/08/26/01/40/cats-6574788_960_720.jpg";
   images = [this.img, this.img, this.img, this.img, this.img];
   p = "A well-organized paragraph supports or develops a single controlling idea, which is expressed in a sentence called the topic sentence. A topic sentence has several important functions: it substantiates or supports an essay’s thesis statement; it unifies the content of a paragraph and directs the order of the sentences; and it advises the reader of the subject to be discussed and how the paragraph will discuss it. Readers generally look to the first few sentences in a paragraph to determine the subject and perspective of the paragraph. That’s why it’s often best to put the topic sentence at the very beginning of the paragraph. In some cases, however, it’s more effective to place another sentence before the topic sentence—for example, a sentence linking the current paragraph to the previous one, or one providing background information.";
   posts = [this.p, this.p, this.p, this.p, this.p];
}
