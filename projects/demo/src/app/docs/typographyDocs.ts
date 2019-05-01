export const typographyDocs = {
  attributes: [
    {
      names: [
        'typography-display-4',
        'typography-display-3',
        'typography-display-2',
        'typography-display-1',
        'typography-caption',
        'typography-headline',
        'typography-title',
        'typography-subheading-2',
        'typography-subheading-1',
        'typography-body-1',
        'typography-body-2',
        'typography-button',
        'typography-input'
      ],
      description: `<div>
    Set typography based on Material Design type scale's categories.
</div>`
    },
    {
      names: [
        'typography-display-4-contrast',
        'typography-display-3-contrast',
        'typography-display-2-contrast',
        'typography-display-1-contrast',
        'typography-caption-contrast',
        'typography-headline-contrast',
        'typography-title-contrast',
        'typography-subheading-2-contrast',
        'typography-subheading-1-contrast',
        'typography-body-1-contrast',
        'typography-body-2-contrast',
        'typography-button-contrast',
        'typography-input-contrast'
      ],
      description: `<div>
    Set typography based on Material Design type scale's categories. The <code>-contrast</code>
    suffix causes text to be displayed based on recommended contrast/opacity level.
</div>
<div>
    Limit the scope of these attributes as it will affect opacity of all elements within the tag,
    not just text.
</div>`
    }
  ],
  demos: [
    {
      title: 'Basic Usage',
      wide: true,
      code: `<div debug flex-cell gutter>
    <div cell-12>(without contrast)</div>
    <div cell-12 typography-display-4>typography-display-4</div>
    <div cell-12 typography-display-3>typography-display-3</div>
    <div cell-12 typography-display-2>typography-display-2</div>
    <div cell-12 typography-display-1>typography-display-1</div>
    <div typography-caption>typography-caption</div>
    <div typography-headline>typography-headline</div>
    <div typography-title>typography-title</div>
    <div typography-subheading-2>typography-subheading-2</div>
    <div typography-subheading-1>typography-subheading-1</div>
    <div typography-body-1>typography-body-1</div>
    <div typography-body-2>typography-body-2</div>
    <div typography-button>typography-button</div>
    <div typography-input>typography-input</div>
</div>

<div debug flex-cell gutter>
    <div cell-12>(with contrast)</div>
    <div cell-12 typography-display-4-contrast>typography-display-4-contrast</div>
    <div cell-12 typography-display-3-contrast>typography-display-3-contrast</div>
    <div cell-12 typography-display-2-contrast>typography-display-2-contrast</div>
    <div cell-12 typography-display-1-contrast>typography-display-1-contrast</div>
    <div typography-caption-contrast>typography-caption-contrast</div>
    <div typography-headline-contrast>typography-headline-contrast</div>
    <div typography-title-contrast>typography-title-contrast</div>
    <div typography-subheading-2-contrast>typography-subheading-2-contrast</div>
    <div typography-subheading-1-contrast>typography-subheading-1-contrast</div>
    <div typography-body-1-contrast>typography-body-1-contrast</div>
    <div typography-body-2-contrast>typography-body-2-contrast</div>
    <div typography-button-contrast>typography-button-contrast</div>
    <div typography-input-contrast>typography-input-contrast</div>
</div>`
    }
  ]
}

