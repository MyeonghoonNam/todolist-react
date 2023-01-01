import Toggle from '@components/Toggle';

export default {
  title: 'Components/Toggle',
  component: Toggle,
};

export const Default = () => {
  return <Toggle on={false} />;
};
