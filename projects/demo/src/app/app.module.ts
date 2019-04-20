import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AngularMaterialModule } from './AngularMaterial.module'
import { HighlightModule } from 'ngx-highlightjs'
import typescript from 'highlight.js/lib/languages/typescript'
import scss from 'highlight.js/lib/languages/scss'
import xml from 'highlight.js/lib/languages/xml'
import { SafeHtmlPipe } from './SafeHtmlPipe'
import { FlexCellComponent } from './flex-cell/flex-cell.component'
import { BoxComponent } from './box/box.component'
import { ColorsComponent } from './colors/colors.component'
import { SizeComponent } from './size/size.component'
import { TypographyComponent } from './typography/typography.component'

export function hljsLanguages () {
  return [
    { name: 'typescript', func: typescript },
    { name: 'scss', func: scss },
    { name: 'xml', func: xml }
  ]
}

@NgModule({
  declarations: [
    AppComponent,
    SafeHtmlPipe,
    BoxComponent,
    ColorsComponent,
    FlexCellComponent,
    SizeComponent,
    TypographyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HighlightModule.forRoot({
      languages: hljsLanguages
    })
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
