import {
  HStack,
  Icon,
  Pressable,
  Input as NativeBaseInput,
  IInputProps as NativeBaseInputProps,
  Center,
} from 'native-base'
import { ReactNode, createContext, useContext, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

interface InputProps extends NativeBaseInputProps {}

export function InputRoot({ children, ...props }: InputProps) {
  return (
    <InputContextProvider {...props}>
      <HStack
        overflow="hidden"
        w="full"
        alignItems="center"
        minH={45}
        maxH={45}
        mb={4}
      >
        {children}
      </HStack>
    </InputContextProvider>
  )
}

export function InputField() {
  const props = useContext(InputContext)

  return (
    <NativeBaseInput
      bg="gray.50"
      w="full"
      h="full"
      px={4}
      roundedLeft="md"
      flex={1}
      secureTextEntry={!props.showPassword}
      fontSize="md"
      borderWidth={0}
      _focus={{
        backgroundColor: 'gray.50',
      }}
      {...props}
    />
  )
}

export function InputVisibility() {
  const { setShowPassword, showPassword } = useContext(InputContext)

  function toggleVisibility() {
    setShowPassword(!showPassword)
  }

  return (
    <Pressable
      roundedRight="md"
      bg="gray.50"
      h="full"
      onPress={toggleVisibility}
    >
      <Center h="full" px={3}>
        <Icon
          as={Ionicons}
          name={showPassword ? 'eye-outline' : 'eye-off-outline'}
          size={6}
        />
      </Center>
    </Pressable>
  )
}

// Context

interface InputContextProps extends NativeBaseInputProps {
  showPassword: boolean
  setShowPassword: (value: boolean) => void
}

const InputContext = createContext<InputContextProps>({} as InputContextProps)

interface InputContextProviderProps extends InputProps {
  children: ReactNode
}

const InputContextProvider = ({
  children,
  ...props
}: InputContextProviderProps) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <InputContext.Provider value={{ ...props, showPassword, setShowPassword }}>
      {children}
    </InputContext.Provider>
  )
}
