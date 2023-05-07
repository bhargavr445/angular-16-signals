import { Route } from "@angular/router";
import { OutcomesComponent } from "./outcomes.component";
import { OutcomesDetailsComponent } from "./outcomes-details/outcomes-details.component";

export const OUTCOMES_ROUTING: Route[] = [
    {
        path: '', component: OutcomesComponent, children: [
            { path: 'details', component: OutcomesDetailsComponent }
        ]
    }
];