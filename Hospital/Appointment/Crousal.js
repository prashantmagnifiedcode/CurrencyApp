
import React, { useState} from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';



const { width } = Dimensions.get('window');

const SPACING = 10;
const THUMB_SIZE = 80;
const IMAGES = {
    image1: "https://www.bugatti.com/fileadmin/_processed_/sei/p121/se-image-efcacef9b9b81ac212333a09316b3457.webp",
    image2: "https://www.bugatti.com/fileadmin/_processed_/sei/p121/se-image-8cd59d23dc785d9a4a13e0ba2283158a.webp",
    image3: "https://www.bugatti.com/fileadmin/_processed_/sei/p121/se-image-ff9b425177412f513d7ea8ecca02c9f5.webp",
    image4: "https://www.bugatti.com/fileadmin/_processed_/sei/p121/se-image-402757464fbb5010bb66f03c78418dca.webp",
    image5: "https://www.bugatti.com/fileadmin/_processed_/sei/p121/se-image-db72fe0108869056fda0e3db458c5473.webp",
    image6: "https://www.bugatti.com/fileadmin/_processed_/sei/p121/se-image-a0602c4d3cafcaab12f7050b7d7dc0fb.webp",
    image7: "https://www.bugatti.com/fileadmin/_processed_/sei/p121/se-image-abf476cf6d3cce3c96799a054d039b0c.webp",

};
const Pic = () => {
    const [indexSelected, setIndexSelected] = useState(0);

    const onSelect = indexSelected => {
        setIndexSelected(indexSelected);
    };
    const [images, setImages] = useState([
        { id: '1', image: IMAGES.image1 },
        { id: '2', image: IMAGES.image2 },
        { id: '3', image: IMAGES.image3 },
        { id: '4', image: IMAGES.image4 },
        { id: '5', image: IMAGES.image5 },
        { id: '6', image: IMAGES.image6 },
        { id: '7', image: IMAGES.image7 }
    ])
    return (

        // <View style={{
        //     flex: 1,
        //     backgroundColor: 'black', alignItems: 'center' ,height:850       }}>
        //     <View style={{ flex: 1 / 2, marginTop: 10,height: 700 }}>
                <Carousel
                    layout='tinder'
                    data={images}
                    sliderWidth={width}
                    itemWidth={width}
                    renderItem={({ item, index }) => (
                        <Image
                            key={index}
                            style={{ width: '100%', height: '100%' }}
                            resizeMode='contain'
                            source={{ uri: item.image }}
                        />
                    )}
                    onSnapToItem={index => onSelect(index)}
                />
              
        //     </View>

        // </View>





    )
}

export default Pic;