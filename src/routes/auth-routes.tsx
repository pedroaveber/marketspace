import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'

import { SignUp } from '@screens/sign-up'
import { SignIn } from '@screens/sign-in'

type AuthRoutesType = {
  signIn: undefined
  signUp: undefined
}

export type AuthRoutesNavigationParams =
  NativeStackNavigationProp<AuthRoutesType>

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutesType>()

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signIn" component={SignIn} />
      <Screen name="signUp" component={SignUp} />
    </Navigator>
  )
}
