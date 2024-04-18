import { Center, Spinner, useTheme } from 'native-base'

export function Loading() {
  const { colors } = useTheme()

  return (
    <Center flex={1}>
      <Spinner color={colors.blue[700]} />
    </Center>
  )
}
