import { Component, ChangeDetectionStrategy } from '@angular/core'
import { sizeDocs } from '../docs/sizeDocs'

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SizeComponent {
  docs = sizeDocs
}
