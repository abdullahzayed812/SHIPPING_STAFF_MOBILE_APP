import { Image } from 'react-native';
import { Container } from '../components/global/Container';
import { IMAGES } from '../utils/images';

export function SplashScreen(): JSX.Element {
  return (
    <Container changeDefaultBg centerContent>
      <Image source={IMAGES.LOGO} style={{ width: 332, height: 166 }} />
    </Container>
  );
}
