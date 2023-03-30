import { CardContainer, CardImage } from './styles';
import { type ICardProps } from './types';

export const Card = ({ img, onClick }: ICardProps): JSX.Element => {
  return (
    <CardContainer onClick={onClick} role="button">
      <CardImage src={img} />
    </CardContainer>
  );
};
