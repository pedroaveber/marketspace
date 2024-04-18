import { Center, Image, ScrollView, Text, VStack } from 'native-base'
import MarketSpacePng from '@assets/logo.png'
import { InputRoot, InputField, InputVisibility } from '@components/input'
import { Button } from '@components/button'
import { useNavigation } from '@react-navigation/native'
import { AuthRoutesNavigationParams } from '@routes/auth-routes'

export function SignIn() {
  const navigation = useNavigation<AuthRoutesNavigationParams>()

  function handleSignUp() {
    navigation.navigate('signUp')
  }

  return (
    <VStack flex={1} bg="gray.50">
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack
          roundedBottom="3xl"
          px={12}
          pt={32}
          alignItems="center"
          flex={1}
          bg="gray.200"
        >
          <Image
            source={MarketSpacePng}
            alt="MarketSpace"
            w={200}
            h={130}
            mb={24}
            resizeMode="cover"
          />

          <Center mb={24} w="full">
            <Text mb={4} fontFamily="body" fontSize="sm" color="gray.800">
              Acesse sua conta
            </Text>

            <InputRoot
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="E-mail"
            >
              <InputField />
            </InputRoot>

            <InputRoot placeholder="Senha">
              <InputField />
              <InputVisibility />
            </InputRoot>

            <Button mt={4} title="Entrar" />
          </Center>
        </VStack>

        <Center pt={12} pb={24} px={12}>
          <Text mb={4} fontFamily="body" fontSize="sm" color="gray.800">
            Ainda não tem acesso?
          </Text>

          <Button
            onPress={handleSignUp}
            title="Criar conta"
            variant="tertiary"
          />
        </Center>
      </ScrollView>
    </VStack>
  )
}
