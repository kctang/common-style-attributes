import { Component, ChangeDetectionStrategy } from '@angular/core'
import { boxDocs } from '../docs/boxDocs'

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxComponent {
  docs = boxDocs
}
