import Button from '../components/common/Button';

const MyComponentPage = () => {
  return (
    <div className='grid gap-5 py-section'>
      This is My component...
      <Button>
        Button 1
      </Button>
      <Button type='disabled'>
        Button 2
      </Button>
    </div>
  );
};

export default MyComponentPage;