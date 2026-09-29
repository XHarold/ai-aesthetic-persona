export const stimuli = [
  {
    id: 'graphic_01',
    category: 'graphic',
    title: 'Graphic 01',
    image: '/stimuli/graphic-01.svg',
  },
  {
    id: 'graphic_02',
    category: 'graphic',
    title: 'Graphic 02',
    image: '/stimuli/graphic-02.svg',
  },
  {
    id: 'product_01',
    category: 'product',
    title: 'Product 01',
    image: '/stimuli/product-01.svg',
  },
  {
    id: 'product_02',
    category: 'product',
    title: 'Product 02',
    image: '/stimuli/product-02.svg',
  },
  {
    id: 'space_01',
    category: 'space',
    title: 'Space 01',
    image: '/stimuli/space-01.svg',
  },
  {
    id: 'space_02',
    category: 'space',
    title: 'Space 02',
    image: '/stimuli/space-02.svg',
  },
  {
    id: 'motion_01',
    category: 'motion',
    title: 'Motion Preview 01',
    image: '/stimuli/motion-01.svg',
  },
  {
    id: 'motion_02',
    category: 'motion',
    title: 'Motion Preview 02',
    image: '/stimuli/motion-02.svg',
  },
]

export function getStimulus(id) {
  return stimuli.find((item) => item.id === id) ?? null
}
