import { Component, ViewEncapsulation } from '@angular/core';
import { Model } from "survey-core";
@Component({
  selector: 'fb-root-nx-welcome',
  template: `<survey [model]="model"></survey>`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  model: Model;
    constructor() {
        const survey = new Model({
          logoPosition: "right",
          pages: [
            {
              name: "page1",
              elements: [
                {
                  type: "paneldynamic",
                  name: "question1",
                  templateElements: [
                    {
                      type: "text",
                      name: "question2",
                      state: "expanded",
                      indent: 1,
                      title: "sdf",
                      titleLocation: "top",
                      description: "sdf",
                      descriptionLocation: "underTitle",
                      defaultValue: "sfasdf",
                      placeholder: "dfasdf"
                    }
                  ]
                }
              ]
            }
          ]
        });
        this.model = survey;
    }
  }
