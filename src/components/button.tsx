import {
  Button as NativeBaseButton,
  IButtonProps as NativeBaseButtonProps,
  Text,
} from 'native-base'

const buttonVariants = {
  primary: {
    bg: 'blue.300',
    color: 'gray.50',
    fontFamily: 'heading',
    activeBg: 'blue.700',
  },
  secondary: {
    bg: 'gray.950',
    color: 'gray.50',
    fontFamily: 'heading',
    activeBg: 'gray.700',
  },
  tertiary: {
    bg: 'gray.300',
    color: 'gray.950',
    fontFamily: 'heading',
    activeBg: 'gray.400',
  },
}

interface ButtonProps extends NativeBaseButtonProps {
  title: string
  variant?: keyof typeof buttonVariants
}

export function Button({ title, variant = 'primary', ...props }: ButtonProps) {
  return (
    <NativeBaseButton
      bg={buttonVariants[variant].bg}
      rounded="md"
      w="full"
      minH={46}
      maxH={46}
      alignItems="center"
      _pressed={{
        bg: buttonVariants[variant].activeBg,
      }}
      {...props}
    >
      <Text
        color={buttonVariants[variant].color}
        fontSize="sm"
        fontFamily={buttonVariants[variant].fontFamily}
      >
        {title}
      </Text>
    </NativeBaseButton>
  )
}
