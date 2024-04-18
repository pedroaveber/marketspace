import {
  Box,
  Center,
  Heading,
  Icon,
  Image,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from 'native-base'
import { Platform } from 'react-native'

import MarketSpacePng from '@assets/small-logo.png'

import { Button } from '@components/button'
import { InputRoot, InputField, InputVisibility } from '@components/input'

import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export function SignUp() {
  const navigation = useNavigation()

  function handleSignIn() {
    navigation.goBack()
  }

  return (
    <VStack flex={1} bg="gray.200">
      <ScrollView
        showsVerticalScrollIndicator={false}
        _contentContainerStyle={{
          pb: Platform.OS === 'ios' ? 100 : 0,
        }}
      >
        <VStack
          roundedBottom="3xl"
          px={12}
          pt={24}
          alignItems="center"
          flex={1}
          bg="gray.200"
        >
          <Image
            source={MarketSpacePng}
            alt="MarketSpace"
            w={16}
            h={10}
            mb={4}
            resizeMode="cover"
          />

          <Heading fontFamily="heading" fontSize="lg">
            Boas vindas!
          </Heading>

          <Text textAlign="center">
            Crie sua conta e use o espaço para comprar itens variados e vender
            seus produtos
          </Text>

          <Center mt={8} mb={12} w="full">
            <Pressable mb={4} position="relative">
              <Image
                source={{
                  uri: 'https://github.com/diego3g.png',
                }}
                alt=""
                w={22}
                h={22}
                borderWidth={4}
                borderColor="blue.300"
                resizeMode="cover"
                rounded="full"
              />

              <Box
                bg="blue.300"
                position="absolute"
                alignItems="center"
                justifyContent="center"
                bottom={0}
                right={0}
                w={8}
                h={8}
                rounded="full"
              >
                <Icon as={MaterialIcons} name="create" color="white" size={4} />
              </Box>
            </Pressable>

            <InputRoot
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Nome"
            >
              <InputField />
            </InputRoot>

            <InputRoot
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="E-mail"
            >
              <InputField />
            </InputRoot>

            <InputRoot
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="phone-pad"
              placeholder="Telefone"
            >
              <InputField />
            </InputRoot>

            <InputRoot placeholder="Senha">
              <InputField />
              <InputVisibility />
            </InputRoot>

            <InputRoot placeholder="Confirmar senha">
              <InputField />
              <InputVisibility />
            </InputRoot>

            <Button variant="secondary" mt={4} title="Criar" />
          </Center>
        </VStack>

        <Center pb={24} px={12}>
          <Text mb={4} fontFamily="body" fontSize="sm" color="gray.800">
            Já tem uma conta?
          </Text>

          <Button
            onPress={handleSignIn}
            title="Ir para login"
            variant="tertiary"
          />
        </Center>
      </ScrollView>
    </VStack>
  )
}
