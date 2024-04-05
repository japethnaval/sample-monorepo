import './App.css'

import { Button } from '@repo/common-ui'
import { FormikInput } from '@repo/common-ui/lib'

export const App = () => (
  <div>
    <Button>RED BUTTON</Button>
    <FormikInput name="formik" placeholder="this is not built from dist" />
  </div>
)

export default App
