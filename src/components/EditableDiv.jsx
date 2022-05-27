import { Box, Text } from '@chakra-ui/react';

const EditableDiv = ({ drawer }) => {
  return (
    <Box
      p={{ base: 4, md: 8 }}
      className={`${drawer ? 'margin-left-open' : 'margin-left-closed'}`}
    >
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
        fermentum ex, ac condimentum leo. Donec finibus velit id metus malesuada
        facilisis. Nunc accumsan tortor non ante ornare, ac sodales massa
        fermentum. Praesent congue congue nunc sit amet tristique. Pellentesque
        vel tellus et dolor commodo imperdiet. Donec nec neque hendrerit,
        consequat felis eget, malesuada ante. Sed dictum metus nec orci dapibus,
        eu tincidunt felis placerat. Mauris porttitor augue malesuada quam
        lobortis viverra sed volutpat turpis. Cras vel dapibus ex, sit amet
        gravida ipsum. Phasellus ante sapien, maximus at neque at, tempus
        lobortis dui. Praesent ipsum neque, cursus eget gravida in, dignissim
        non velit. Cras eget tempus ipsum. Pellentesque volutpat, diam semper
        auctor congue, velit risus auctor ipsum, sit amet finibus ante libero et
        nisl. Sed quam odio, tincidunt quis lacus nec, tincidunt egestas orci.
        Morbi vitae tellus nunc. Nunc ut erat justo. In facilisis faucibus
        porta. Nam rutrum commodo nunc, eu mattis nisl suscipit id. Fusce vel
        laoreet mauris. Praesent eget ultricies mauris. Nullam tempor imperdiet
        imperdiet. Maecenas viverra tortor nec ex mattis fringilla. Cras ut nibh
        sed eros consectetur tincidunt. Donec eu metus a justo cursus fringilla.
        Maecenas aliquam orci nec orci tincidunt consequat. Donec ornare nibh
        augue, ac placerat sem mattis sit amet. Ut vel erat molestie, faucibus
        dolor gravida, placerat metus. Quisque et aliquam elit. Quisque auctor
        ante accumsan, eleifend felis id, vestibulum tellus. Quisque ornare
        euismod sem et auctor. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Quisque maximus lectus at
        diam rutrum, ac pulvinar lorem fringilla. Nullam varius ornare metus ut
        scelerisque. Aliquam pellentesque purus vitae condimentum accumsan. In
        fermentum sit amet dui eget gravida. Praesent non lorem sem. Maecenas
        venenatis lorem eros, ac auctor purus tempor at. In nisi risus,
        facilisis eget lorem ut, sollicitudin venenatis ligula. Aliquam
        ultrices, lectus nec luctus commodo, sapien metus dignissim diam, quis
        semper metus erat vel sem. Vestibulum arcu risus, tincidunt a elementum
        nec, congue quis nunc. In ultricies mauris eget egestas lacinia. Etiam
        ut tellus in quam euismod malesuada. Phasellus dolor neque, eleifend vel
        nibh sit amet, semper rutrum ligula. Integer malesuada egestas tortor,
        eget scelerisque lacus mattis ac. In fringilla sollicitudin ante. Fusce
        vestibulum eu felis ac bibendum. Aliquam convallis sagittis fringilla.
        Nam mollis tincidunt odio, at rutrum arcu vestibulum vel. Donec vel
        luctus turpis. Etiam vitae ante odio. Nullam tincidunt ipsum vitae enim
        imperdiet, sit amet maximus lectus consectetur. Vestibulum tincidunt
        lacus sit amet tortor sollicitudin cursus. Aliquam gravida finibus
        consectetur. Donec diam neque, cursus in pharetra sed, tristique quis
        magna. Phasellus scelerisque malesuada mattis.
      </Text>
    </Box>
  );
};

export { EditableDiv };
