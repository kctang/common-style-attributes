import { Component, ChangeDetectionStrategy } from '@angular/core'
import { colorsDocs } from '../docs/colorsDocs'

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorsComponent {
  docs = colorsDocs
}
