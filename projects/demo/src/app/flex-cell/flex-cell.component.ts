import { Component, ChangeDetectionStrategy } from '@angular/core'
import { flexCellDocs } from '../docs/flexCellDocs'

@Component({
  selector: 'app-flex-cell',
  templateUrl: './flex-cell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlexCellComponent {
  docs = flexCellDocs
}
