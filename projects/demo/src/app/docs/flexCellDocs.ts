export const flexCellDocs = {
  attributes: [
    {
      name: 'flex-cell',
      description: `<div>A hybrid grid system that uses easy to understand attributes to layout content.
      <ul>
        <li>Each row has 12 columns in desktop, 8 columns in tablet and 4 columns in phone "mode".</li>
        <li>Each cell (child element) is rendered based on its size.</li> 
        <li>By default, each cell is given the width of 4 columns.</li>
        <li>Strictly speaking, this is a flow layout rather than grid layout. 
        It uses CSS flexbox behind the scene to render each cell from left to right. When a cell reaches the 
        maximum width of the layout's container, it automatically wraps cells to the next row.</li>
        <li>Active "mode" is based on the layout's width. 0 to 479px is phone mode; 480px to 839px is tablet mode; 840px and up is desktop mode.</li>
      </ul>`
    },
    {
      name: 'cell-1, cell-2, ...cell-12',
      description: `When specified in child elements of a flex-cell, these attributes control the 
      width of each cell. For example, on desktop mode, cell-6 is 50% of the screen while cell-12 
      means the cell with take up the entire row.`
    },
    {
      name: 'default-cell-6, default-cell-12',
      description: 'When specified along flex-cell, this will assign each child cell with a default size of 6 or 12 respectively.'
    },
    {
      name: 'gutter',
      description: 'When specified along flex-cell, this will layout child cells with a gutter between each cell.'
    },
    {
      name: 'grow',
      description: 'Grow cell width to use up remaining space in row.'
    },
    {
      name: 'grow-items',
      description: 'Grow width of child elements to use up remaining space in row.'
    },
    {
      name: 'shrink',
      description: 'Shrink cell width to width of cell content.'
    },
    {
      name: 'left',
      description: 'Aligns cell to the left within its container.'
    },
    {
      name: 'right',
      description: 'Aligns cell to the right within its container.'
    },
    {
      name: 'top',
      description: 'Aligns cell to the top within its container.'
    },
    {
      name: 'bottom',
      description: 'Aligns cell to the bottom within its container.'
    },
    {
      name: 'vcenter',
      description: 'Aligns cell vertically centered within its container.'
    },
    {
      name: 'center',
      description: 'Aligns cell horizontally centered within its container.'
    }
  ],
  demos: [
    {
      title: 'Basic Usage',
      description: 'Child elements of flex-cell will be rendered as cells in a hybrid grid system.',
      code: `<div debug flex-cell>
  <div>Lorem</div>
  <div>Lorem ipsum</div>
  <div>Lorem ipsum dolor</div>
  <div>Lorem ipsum dolor sit amet</div>
</div>`
    },
    {
      title: 'Gutter',
      description: 'Gutter creates some space between each cell.',
      code: `<div debug flex-cell gutter>
  <div>Lorem</div>
  <div>Lorem ipsum</div>
  <div>Lorem ipsum dolor</div>
  <div>Lorem ipsum dolor sit amet</div>
</div>`
    },
    {
      title: 'Shrink',
      description: `Sometimes we just want a column to use as little space as possible. 
      This can be done by using shrinking a cell.`,
      code: `<div debug flex-cell gutter>
  <div shrink>Lorem</div>
  <div>Lorem ipsum</div>
  <div>Lorem ipsum dolor</div>
  <div>Lorem ipsum dolor sit amet</div>
</div>`
    },
    {
      title: 'Grow Items',
      description: 'By using grow-items, we ensure that each row takes up the entire width, scaling cells accordingly.',
      code: `<div debug flex-cell gutter grow-items>
  <div shrink>Lorem</div>
  <div>Lorem ipsum</div>
  <div>Lorem ipsum dolor</div>
  <div>Lorem ipsum dolor sit amet</div>
</div>`
    },
    {
      title: 'Change Default Cell Size to 6',
      description: `<div>
Default cell size is 4, rendering a 3 columns per row layout on desktop mode.</div>
<div>
This default value can be overridden to either default-cell-6 or default-cell-12. When 
default-cell-6 is used, a 2 columns per row layout wil be rendered.
</div>
<div>
In this example, grow-items is also specified to prevent a gap of 2 columns when rendered in tablet mode.
</div>`,
      code: `<div debug flex-cell gutter default-cell-6 grow-items>
  <div>Lorem</div>
  <div>Lorem ipsum</div>
  <div>Lorem ipsum dolor</div>
  <div>Lorem ipsum dolor sit amet</div>
</div>`
    },
    {
      title: 'Combine Shrink/Grow',
      description: `shrink/grow attributes can be combined to create cells that adjust its size 
      based on content width. When these attributes are used, the default cell sizes of 4 columns 
      no longer apply.`,
      code: `<div flex-cell debug gutter>
    <div cell-12 debug flex-cell>
        <div shrink>[ A | B | C ]</div>
        <div grow>Lorem ipsum</div>
        <div shrink>[ X | Y | Z ]</div>
    </div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
</div>`
    },
    {
      title: 'Full Demo',
      description: 'This demo uses a combination of features from flex-cell.',
      wide: true,
      code: `<div debug flex-cell grow-items gutter>
    <div>4 (default)</div>
    <div center>8 (default)</div>
    <div right>12 (default)</div>
    <div cell-1>1 (cell-1)</div>
    <div cell-1>2 (cell-1)</div>
    <div cell-1>3 (cell-1)</div>
    <div cell-1>4 (cell-1)</div>
    <div cell-1>5 (cell-1)</div>
    <div cell-1>6 (cell-1)</div>
    <div cell-1>7 (cell-1)</div>
    <div cell-1>8 (cell-1)</div>
    <div cell-1>9 (cell-1)</div>
    <div cell-1>10 (cell-1)</div>
    <div cell-1>11 (cell-1)</div>
    <div cell-1>12 (cell-1)</div>
    <div cell-2>2 (cell-2)</div>
    <div cell-2>4 (cell-2)</div>
    <div cell-2>6 (cell-2)</div>
    <div cell-2>8 (cell-2)</div>
    <div cell-2>10 (cell-2)</div>
    <div cell-2>12 (cell-2)</div>
    <div debug cell-3 height-128 center>
      <div>3 (cell-3)</div>
    </div>
    <div debug cell-3 height-128 center vcenter>
      <div>6 (cell-3)</div>
    </div>
    <div debug cell-3 height-128 vcenter right>
      <div>9 (cell-3)</div>
    </div>
    <div debug cell-3 height-128 right bottom>
      <div>12 (cell-3)</div>
    </div>
    <div cell-4>4 (cell-4)</div>
    <div cell-4>8 (cell-4)</div>
    <div cell-4>12 (cell-4)</div>
    <div cell-5>5 (cell-5)</div>
    <div cell-5>10 (cell-5)</div>
    <div cell-5>5 (cell-5)</div>
    <div cell-5>10 (cell-5)</div>
    <div cell-6>6 (cell-6)</div>
    <div cell-6>12 (cell-6)</div>
    <div cell-7>7 (cell-7)</div>
    <div cell-7>7 (cell-7)</div>
    <div cell-8>8 (cell-8)</div>
    <div cell-8>8 (cell-8)</div>
    <div cell-9>9 (cell-9)</div>
    <div cell-9>9 (cell-9)</div>
    <div cell-10>10 (cell-10)</div>
    <div cell-10>10 (cell-10)</div>
    <div cell-11>11 (cell-11)</div>
    <div cell-11>11 (cell-11)</div>
    <div cell-12>12 (cell-12)</div>
    <div cell-12>12 (cell-12)</div>
</div>`
    }
  ]
}
