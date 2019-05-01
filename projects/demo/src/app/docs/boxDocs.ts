export const boxDocs = {
  attributes: [
    {
      name: 'margin',
      description: 'Set margin for element.'
    },
    {
      name: 'margin-horizontal, vertical',
      description: 'Set horizontal/vertical margin for element.'
    },
    {
      name: 'margin-top, bottom, left, right',
      description: 'Set top/bottom/left/right margin for element.'
    },
    {
      name: 'padding',
      description: 'Set padding for element.'
    },
    {
      name: 'padding-horizontal, vertical',
      description: 'Set horizontal/vertical padding for element.'
    },
    {
      name: 'padding-top, bottom, left, right',
      description: 'Set top/bottom/left/right padding for element.'
    },
    {
      name: 'no-margin',
      description: 'Set margin for element to 0.'
    },
    {
      name: 'no-padding',
      description: 'Set padding for element to 0.'
    },
    {
      name: 'contrast-high-emphasis',
      description: 'Set opacity to 0.87.'
    },
    {
      name: 'contrast-medium-emphasis',
      description: 'Set opacity to 0.6.'
    },
    {
      name: 'contrast-disabled',
      description: 'Set opacity to 0.38.'
    },
    {
      name: 'hidden',
      description: 'Hide element.'
    },
    {
      name: 'round',
      description: 'Set a rounded border for element.'
    },
    {
      name: 'shadow',
      description: 'Set a drop-shadow for element (level 2).'
    },
    {
      name: 'shadow-1, 2, 3, 4, 5',
      description: 'Set a specific drop shadow level for element. Higher value has more shadow effects.'
    },
    {
      name: 'cover-image',
      description: '...'
    },
    {
      name: 'debug',
      description: 'Renders a dashed border around the element to ease debugging.'
    },
    {
      name: 'divider',
      description: 'Creates a divider.'
    },
    {
      name: 'full-page',
      description: '...'
    },
    {
      name: 'full-page-main',
      description: '...'
    }
  ],
  demos: [
    {
      title: 'Basic Usage',
      code: `<div flex-cell gutter>
    <div flex-cell default-cell-12 gutter background-white>
        <div typography-body-2>Margins</div>
        <div debug background-grey>
            <div background-amber margin>margin</div>
        </div>
        <div debug background-grey>
            <div background-amber no-margin>no-margin</div>
        </div>
        <div debug background-grey>
            <div background-amber margin-horizontal>margin-horizontal</div>
        </div>
        <div debug background-grey>
            <div background-amber margin-vertical>margin-vertical</div>
        </div>
        <div debug background-grey>
            <div background-amber margin-top>margin-top</div>
        </div>
        <div debug background-grey>
            <div background-amber margin-bottom>margin-bottom</div>
        </div>
        <div debug background-grey>
            <div background-amber margin-left>margin-left</div>
        </div>
        <div debug background-grey>
            <div background-amber margin-right>margin-right</div>
        </div>
    </div>

    <div flex-cell default-cell-12 gutter background-white>
        <div typography-body-2>Paddings</div>
        <div debug background-grey>
            <div background-lime padding>padding</div>
        </div>
        <div debug background-grey>
            <div background-lime no-padding>no-padding</div>
        </div>
        <div debug background-grey>
            <div background-lime padding-horizontal>padding-horizontal</div>
        </div>
        <div debug background-grey>
            <div background-lime padding-vertical>padding-vertical</div>
        </div>
        <div debug background-grey>
            <div background-lime padding-top>padding-top</div>
        </div>
        <div debug background-grey>
            <div background-lime padding-bottom>padding-bottom</div>
        </div>
        <div debug background-grey>
            <div background-lime padding-left>padding-left</div>
        </div>
        <div debug background-grey>
            <div background-lime text-right padding-right>padding-right</div>
        </div>
    </div>

    <div cell-12 flex-cell gutter debug>
        <div contrast-high-emphasis>contrast-high-emphasis</div>
        <div contrast-medium-emphasis>contrast-medium-emphasis</div>
        <div contrast-disabled>contrast-disabled</div>
        <div>
            <div height-64 width-64 round vcenter center background-red>round</div>
        </div>
        <div flex-cell gutter>
            <div shadow>shadow</div>
            <div shadow-1>shadow-1</div>
            <div shadow-5>shadow-5</div>
        </div>
    </div>
</div>`
    }
  ]
}
