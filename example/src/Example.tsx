import { Switch } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { styled } from '@vitality-ds/system-rn';
import { Stack, Text, useColorMode, Media, Heading } from './components';

export default function Example() {
  const { toggleColorMode, colorMode } = useColorMode();
  const [example, changeExample] = useState(false);
  return (
    <Wrapper>
      <Content>
        <Stack axis="y" space="4">
          <Stack axis="x" space="3" align="center">
            <Text >Example app</Text>
            <Stack axis="y" space="2">
              <Text color="primary">Switch Examples</Text>
              <Switch value={example} onValueChange={changeExample} />
            </Stack>
          </Stack>
          {example && (
            <Stack axis="y" space="2">
              <Heading>Variants</Heading>
              <Heading heading="h2">Heading</Heading>
              <Heading heading="h3">Heading</Heading>
              <Heading heading="h4">Heading</Heading>
              <Heading heading="h5">Heading</Heading>
              <Heading
                // NOTE: test inline media style.
                // marginTopRem util function turns media style.
                css={{
                  marginTopRem: 1,
                }}
                underlined
              >
                Compound Variants
              </Heading>
              <Heading underlined heading="h2">
                Heading
              </Heading>
              <Heading underlined heading="h3">
                Heading
              </Heading>
              <Heading underlined heading="h4">
                Heading
              </Heading>
              <Heading underlined heading="h5">
                Heading
              </Heading>
            </Stack>
          )}
          {!example && (
            <>
              <Stack axis="y" space="2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Box key={i}>
                    <Stack axis="x" space="4">
                      <Text>Box {i + 1}</Text>
                      <Text>XXX</Text>
                      <Text>YYY</Text>
                    </Stack>
                  </Box>
                ))}
              </Stack>

              <Media
                color={{
                  '@xxl': 'primary',
                  '@xl': 'secondary',
                  '@lg': 'third',
                  '@md': 'forth',
                  '@sm': 'fifth',
                }}
              >
                Font size and color should change as viewport changes
              </Media>

              <Stack axis="x" space="3" align="center" justify="end">
                <Text>Toggle color mode</Text>
                <Switch
                  value={colorMode === 'dark'}
                  onValueChange={toggleColorMode}
                />
              </Stack>
            </>
          )}
        </Stack>
      </Content>

      <StatusBar style={colorMode === 'dark' ? 'light' : 'dark'} />
    </Wrapper>
  );
}

const Wrapper = styled('SafeAreaView', {
  flex: 1,
  backgroundColor: '$neutral1',
});

const Content = styled('ScrollView', {
  flex: 1
});
// const Content = styled('ScrollView', {
//   flex: 1,
// }).attrs((p) => ({
//   contentContainerStyle: {
//     padding: p.theme.space[2],
//   },
// }));

const Box = styled('View', {
  minHeight: 100,
  backgroundColor: '$primary9',
  flexCenter: 'row',
  borderRadius: '$md',
});
