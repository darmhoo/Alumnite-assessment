import {render} from '@testing-library/vue'
import HelloWorld from '../src/components/HelloWorld.vue'

test('it should work', () => {
    const { getByText } = render(HelloWorld, {
      props: {
        /* ... */
      }
    })
  
    // assert output
    getByText('Vue Docs Scaling up Guide')
  })