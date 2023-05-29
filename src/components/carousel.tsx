import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useRef, useState} from 'react';

export default function Carousel({images}) {
  console.log('images', images);
  const carouselRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  //   const carouselItems = [
  //     {
  //       title: 'Item 1',
  //       text: 'Text 1',
  //     },
  //     {
  //       title: 'Item 2',
  //       text: 'Text 2',
  //     },
  //     {
  //       title: 'Item 3',
  //       text: 'Text 3',
  //     },
  //     {
  //       title: 'Item 4',
  //       text: 'Text 4',
  //     },
  //     {
  //       title: 'Item 5',
  //       text: 'Text 5',
  //     },
  //   ];

  const handleCarousel = event => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;
    const index = Math.floor(contentOffset.x / viewSize.width);
    setActiveIndex(index);
  };

  const handlePrev = () => {
    console.log('prev',activeIndex);

    if (activeIndex > 0) {
      //para hacer que el carousel se desplace a un elemento específico.
      /*
            Por ejemplo, si queremos hacer que el carousel se desplace al tercer elemento, 
            podemos hacer lo siguiente: carouselRef.current.scrollTo({ x: 2 * itemWidth });
            Donde itemWidth es la anchura de cada elemento en el carousel, y 2 * itemWidth es la posición
            en el eje X del tercer elemento (ya que los índices en el array comienzan en 0).
      */
      carouselRef.current.scrollTo({
        animated: true,
        x: (activeIndex - 1) * 300,
      });
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    console.log('next', carouselRef.current);

    if (activeIndex < images.length - 1) {
      carouselRef.current.scrollTo({
        animated: true,
        x: (activeIndex + 1) * 300,
      });
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <View style={styles.carouselContainer}>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        onScroll={handleCarousel}
        showsHorizontalScrollIndicator={false}
        ref={carouselRef} // utilizado para los botones de anterior y siguiente
      >
        {images.map((item, index) => (
          <View style={styles.carouselItem} key={index}>
            <Image
              source={{
                uri: item,
              }}
              resizeMode="cover"
              style={styles.image}
            />
          </View>
        ))}
      </ScrollView>
      <View style={styles.carouselButtons}>
        <TouchableOpacity onPress={handlePrev}>
          <Text style={[{marginRight: 10}]}>Anterior</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext}>
          <Text>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  carouselItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 5,
    width: 300,
    height: 200,
    margin: 10,
  },
  carouselTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  carouselText: {
    fontSize: 16,
    textAlign: 'center',
  },
  carouselButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
});
