export const colorsDocs = {
  attributes: [
    {
      name: '[color]-(index)',
      description: `<div>
    Sets text/foreground color. Index is optional and defaults to 800.

    <div>
        Valid color palettes:
        <div flex-cell gutter>
            <div cell-2 amber>amber</div>
            <div cell-2 blue>blue</div>
            <div cell-2 brown>brown</div>
            <div cell-2 cyan>cyan</div>
            <div cell-2 green>green</div>
            <div cell-2 grey>grey</div>
            <div cell-2 indigo>indigo</div>
            <div cell-2 lime>lime</div>
            <div cell-2 orange>orange</div>
            <div cell-2 pink>pink</div>
            <div cell-2 purple>purple</div>
            <div cell-2 red>red</div>
            <div cell-2 teal>teal</div>
            <div cell-2 yellow>yellow</div>
        </div>
    </div>

    <div>
        Valid palette index:
        <div flex-cell gutter>
            <div cell-2 background-blue grey-50>50</div>
            <div cell-2 background-blue grey-100>100</div>
            <div cell-2 background-blue grey-200>200</div>
            <div cell-2 background-blue grey-300>300</div>
            <div cell-2 background-blue grey-400>400</div>
            <div cell-2 background-blue grey-500>500</div>
            <div cell-2 background-blue grey-600>600</div>
            <div cell-2 background-blue grey-700>700</div>
            <div cell-2 background-blue grey-800>800</div>
            <div cell-2 background-blue grey-900>900</div>
            <div cell-2 background-blue grey-A100>A100</div>
            <div cell-2 background-blue grey-A200>A200</div>
            <div cell-2 background-blue grey-A400>A400</div>
            <div cell-2 background-blue grey-A700>A700</div>
        </div>
    </div>
</div>`
    },
    {
      name: 'background-color-[color]-(index)',
      description: `<div>Sets background color. Index is optional and defaults to 100.</div>`
    },
    {
      name: '(background)-[white|black]',
      description: 'For convenience, white and black colors can also be used. However, there is no index for these.'
    }
  ],
  demos: [
    {
      title: 'Basic Usage',
      description: 'Just set color and background color.',
      code: `<div debug flex-cell gutter>
    <div cell-1 amber>amber</div>
    <div cell-1 blue>blue</div>
    <div cell-1 brown>brown</div>
    <div cell-1 cyan>cyan</div>
    <div cell-1 green>green</div>
    <div cell-1 grey>grey</div>
    <div cell-1 indigo>indigo</div>
    <div cell-1 lime>lime</div>
    <div cell-1 orange>orange</div>
    <div cell-1 pink>pink</div>
    <div cell-1 purple>purple</div>
    <div cell-1 red>red</div>
    <div cell-1 teal>teal</div>
    <div cell-1 yellow>yellow</div>
</div>
<div debug flex-cell gutter>
    <div cell-1 background-amber>background-amber</div>
    <div cell-1 background-blue>background-blue</div>
    <div cell-1 background-brown>background-brown</div>
    <div cell-1 background-cyan>background-cyan</div>
    <div cell-1 background-green>background-green</div>
    <div cell-1 background-grey>background-grey</div>
    <div cell-1 background-indigo>background-indigo</div>
    <div cell-1 background-lime>background-lime</div>
    <div cell-1 background-orange>background-orange</div>
    <div cell-1 background-pink>background-pink</div>
    <div cell-1 background-purple>background-purple</div>
    <div cell-1 background-red>background-red</div>
    <div cell-1 background-teal>background-teal</div>
    <div cell-1 background-yellow>background-yellow</div>
</div>
`
    },

    {
      title: 'amber and blue',
      description: 'Shades of amber and blue, on black background.',
      code: `<div debug flex-cell gutter>
    <div cell-2 background-black amber-50>amber-50</div>
    <div cell-2 background-black amber-100>amber-100</div>
    <div cell-2 background-black amber-200>amber-200</div>
    <div cell-2 background-black amber-300>amber-300</div>
    <div cell-2 background-black amber-400>amber-400</div>
    <div cell-2 background-black amber-500>amber-500</div>
    <div cell-2 background-black amber-600>amber-600</div>
    <div cell-2 background-black amber-700>amber-700</div>
    <div cell-2 background-black amber-800>amber-800</div>
    <div cell-2 background-black amber-900>amber-900</div>
    <div cell-2 background-black amber-A100>amber-A100</div>
    <div cell-2 background-black amber-A200>amber-A200</div>
    <div cell-2 background-black amber-A400>amber-A400</div>
    <div cell-2 background-black amber-A700>amber-A700</div>

    <div cell-2 background-black blue-50>blue-50</div>
    <div cell-2 background-black blue-100>blue-100</div>
    <div cell-2 background-black blue-200>blue-200</div>
    <div cell-2 background-black blue-300>blue-300</div>
    <div cell-2 background-black blue-400>blue-400</div>
    <div cell-2 background-black blue-500>blue-500</div>
    <div cell-2 background-black blue-600>blue-600</div>
    <div cell-2 background-black blue-700>blue-700</div>
    <div cell-2 background-black blue-800>blue-800</div>
    <div cell-2 background-black blue-900>blue-900</div>
    <div cell-2 background-black blue-A100>blue-A100</div>
    <div cell-2 background-black blue-A200>blue-A200</div>
    <div cell-2 background-black blue-A400>blue-A400</div>
    <div cell-2 background-black blue-A700>blue-A700</div>
</div>`
    }


  ]
}
