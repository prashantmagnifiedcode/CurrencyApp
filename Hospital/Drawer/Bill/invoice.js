import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  UIManager,
  LayoutAnimation,
  TouchableOpacity
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'

// import AnimatedInvoice from './src';

import AnimatedInvoice from 'react-native-collapsible-invoice';

const DEVICE_WIDTH = Dimensions.get('window').width

const InvoiceCard = () => {
  return (
    <View style={{ backgroundColor: '#ADD8E6', height: '100%', }}>
      <View style={{ paddingTop: 60, }}>

        <AnimatedInvoice
          triangleNumbers={'20'}
          triangleHeight={10}
          barStyle={{ backgroundColor: 'white', }}
          triangleStyle={{ backgroundColor: 'white' }}
          iconColor={'black'}
          barComponent={<View >
            < Text style={{ marginLeft: 15, fontWeight: '700', color: 'black' }} > INVOICE 20 </Text>
          </View>}
        >
          <View style={{ height: 250 }}>
            <View style={{ height: 1, backgroundColor: 'gray', opacity: 0.5 }} />
            <View style={{ flexDirection: 'row', height: 45, alignItems: 'center', marginLeft: DEVICE_WIDTH / 20 }}>
              <Text style={{ flex: 0.5, fontWeight: '700', paddingRight: 20, color: 'black' }}>Item</Text>
              <Text style={{ flex: 0.2, fontWeight: '700', color: 'black' }}>Qty.</Text>
              <Text style={{ flex: 0.3, fontWeight: '700', color: 'black' }}>Price</Text>
            </View>
            <View style={{ height: 1, backgroundColor: 'gray', opacity: 0.5 }} />
            <View style={{ flexDirection: 'row', marginTop: 12, marginBottom: 12, alignItems: 'center', marginLeft: DEVICE_WIDTH / 20, }}>
              <Text style={{ flex: 0.5, paddingRight: 20, color: 'black' }}>Black Flower Pot</Text>
              <Text style={{ flex: 0.2, color: 'black' }}>{'1'}</Text>
              <Text style={{ flex: 0.3, textAlign: 'left', color: 'black' }}>{Number('299')} INR</Text>
            </View>
            <View style={{ height: 1, backgroundColor: 'gray', opacity: 0.5 }} />
            <View style={{ flexDirection: 'row', flex: 1, marginTop: 12, marginBottom: 12, marginLeft: DEVICE_WIDTH / 20, }}>
              <View style={{ flex: 0.5, flexDirection: 'row', alignItems: 'flex-start', }}>
                <Text style={{ fontWeight: '700', flex: 0.85, marginTop: 2, color: 'black' }}>Ship to - India</Text>
                <TouchableOpacity>
                  <Entypo name="edit" color="gray" size={20} />
                </TouchableOpacity>
              </View>
              <View style={{ flex: 0.5, }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ flex: 0.4, paddingRight: 20, color: 'black' }}>{'Subtotal'}</Text>
                  <Text style={{ flex: 0.6, textAlign: 'center', color: 'black' }}>{'99.50 INR'}</Text>
                </View>
                <View style={{ height: 1, backgroundColor: 'gray', opacity: 0.5, marginTop: 7, marginBottom: 7 }} />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ flex: 0.4, paddingRight: 20, color: 'black' }}>{'Taxes'}</Text>
                  <Text style={{ flex: 0.6, textAlign: 'center', color: 'black' }}>{'99.50 INR'}</Text>
                </View>
                <View style={{ height: 1, backgroundColor: 'gray', opacity: 0.5, marginTop: 7, marginBottom: 7 }} />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ flex: 0.4, paddingRight: 20, color: 'black' }}>{'Shipping'}</Text>
                  <Text style={{ flex: 0.6, textAlign: 'center', color: 'black' }}>{'49.50 INR'}</Text>
                </View>
                <View style={{ height: 1, backgroundColor: 'gray', opacity: 0.5, marginTop: 7, marginBottom: 7 }} />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ flex: 0.4, paddingRight: 20, fontWeight: '700', color: 'black' }}>{'Total'}</Text>
                  <Text style={{ flex: 0.6, textAlign: 'center', fontWeight: '700', color: 'black' }}>{'547.50 INR'}</Text>
                </View>
                <View style={{ height: 1, backgroundColor: 'gray', opacity: 0.5, marginTop: 7 }} />
              </View>
            </View>
          </View>
        </AnimatedInvoice>
      </View>
      <View style={{ paddingTop: 40, }}>
        <AnimatedInvoice
          triangleNumbers={0}
          triangleHeight={10}
          barStyle={{ backgroundColor: 'white' }}
          triangleStyle={{ backgroundColor: 'white' }}
          barComponent={<View>
            < Text style={{ marginLeft: 15, fontWeight: '700', color: 'black' }} > INVOICE 21 </Text>
          </View>
          }
        >
          <View style={{ height: 250 }}>
            <View style={{ height: 1, backgroundColor: 'gray', opacity: 0.5 }} />
            <View style={{ flexDirection: 'row', height: 45, alignItems: 'center', marginLeft: DEVICE_WIDTH / 20 }}>
              <Text style={{ flex: 0.5, fontWeight: '700', paddingRight: 20, color: 'black' }}>Item</Text>
              <Text style={{ flex: 0.2, fontWeight: '700', color: 'black' }}>Qty.</Text>
              <Text style={{ flex: 0.3, fontWeight: '700', color: 'black' }}>Price</Text>
            </View>
            <View style={{ height: 1, backgroundColor: 'gray', opacity: 0.5 }} />
            <View style={{ flexDirection: 'row', marginTop: 12, marginBottom: 12, alignItems: 'center', marginLeft: DEVICE_WIDTH / 20, }}>
              <Text style={{ flex: 0.5, paddingRight: 20, color: 'black' }}>Black Flower Pot</Text>
              <Text style={{ flex: 0.2, color: 'black' }}>{'1'}</Text>
              <Text style={{ flex: 0.3, textAlign: 'left', color: 'black' }}>{Number('299')} INR</Text>
            </View>
            <View style={{ height: 1, backgroundColor: 'gray', opacity: 0.5 }} />
            <View style={{ flexDirection: 'row', flex: 1, marginTop: 12, marginBottom: 12, marginLeft: DEVICE_WIDTH / 20, }}>
              <View style={{ flex: 0.5, flexDirection: 'row', alignItems: 'flex-start', }}>
                <Text style={{ fontWeight: '700', flex: 0.85, marginTop: 2, color: 'black' }}>Ship to - India</Text>
                <TouchableOpacity>
                  <Entypo name="edit" color="gray" size={20} />
                </TouchableOpacity>
              </View>
              <View style={{ flex: 0.5, }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ flex: 0.4, paddingRight: 20, color: 'black' }}>{'Subtotal'}</Text>
                  <Text style={{ flex: 0.6, textAlign: 'center', color: 'black' }}>{'99.50 INR'}</Text>
                </View>
                <View style={{ height: 1, backgroundColor: 'gray', opacity: 0.5, marginTop: 7, marginBottom: 7 }} />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ flex: 0.4, paddingRight: 20, color: 'black' }}>{'Taxes'}</Text>
                  <Text style={{ flex: 0.6, textAlign: 'center', color: 'black' }}>{'99.50 INR'}</Text>
                </View>
                <View style={{ height: 1, backgroundColor: 'gray', opacity: 0.5, marginTop: 7, marginBottom: 7 }} />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ flex: 0.4, paddingRight: 20, color: 'black' }}>{'Shipping'}</Text>
                  <Text style={{ flex: 0.6, textAlign: 'center', color: 'black' }}>{'49.50 INR'}</Text>
                </View>
                <View style={{ height: 1, backgroundColor: 'gray', opacity: 0.5, marginTop: 7, marginBottom: 7 }} />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ flex: 0.4, paddingRight: 20, fontWeight: '700', color: 'black' }}>{'Total'}</Text>
                  <Text style={{ flex: 0.6, textAlign: 'center', fontWeight: '700', color: 'black' }}>{'547.50 INR'}</Text>
                </View>
                <View style={{ height: 1, backgroundColor: 'gray', opacity: 0.5, marginTop: 7 }} />
              </View>
            </View>
          </View>
        </AnimatedInvoice>
      </View>
    </View >

  );
};


export default InvoiceCard;
