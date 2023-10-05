import React, {useCallback} from 'react';
import {ContactViewModel} from './contact.viewmodel';
import {FlatList, View} from 'react-native';
import {ContactModel} from '../../../domain/models/contact.model';
import CardView from '../../components/card/card';
import CircleImageView from '../../components/circle-image/circle.image';
import {contactStyle as styles} from './contact.style';
import VerticalTextView from '../../components/vertical-text/vertical.text';

const ContactScreen = () => {
  const {items} = ContactViewModel();

  const getContent = useCallback((item: ContactModel) => {
    return (
      <CardView onClick={() => {}}>
        <View style={styles.card}>
          <CircleImageView url={item.photo} />
          <View style={styles.hSpacer} />
          <View>
            <VerticalTextView label="Nama Lengkap" value={item.fullName} />
            <View style={styles.spacer} />
            <VerticalTextView label="Umur" value={item.age} />
          </View>
        </View>
      </CardView>
    );
  }, []);

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item: ContactModel) => item.id.toString()}
        renderItem={({item}) => getContent(item)}
      />
    </View>
  );
};

export default ContactScreen;
