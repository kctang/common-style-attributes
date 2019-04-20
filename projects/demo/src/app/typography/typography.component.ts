import { Component, ChangeDetectionStrategy } from '@angular/core'
import { typographyDocs } from '../docs/typographyDocs'

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypographyComponent {
  docs = typographyDocs
}
