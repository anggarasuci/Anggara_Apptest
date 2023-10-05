import React, {useCallback} from 'react';
import {ContactViewModel} from './contact.viewmodel';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {ContactModel} from '../../../domain/models/contact.model';
import CardView from '../../components/card/card';
import CircleImageView from '../../components/circle-image/circle.image';
import {contactStyle as styles} from './contact.style';
import VerticalTextView from '../../components/vertical-text/vertical.text';
import ConfirmationDialog from '../../components/dialog/confirmation.dialog';

const ContactScreen = () => {
  const {
    items,
    isDeleteDialogVisible,
    setIsDeleteDialogVisible,
    onDeleteClicked,
    onConfirmDelete,
    onNavigateToCreatePage,
  } = ContactViewModel();

  const getContent = useCallback((item: ContactModel) => {
    return (
      <CardView onClick={() => onNavigateToCreatePage(item.id)}>
        <View style={styles.removeContainer}>
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => onDeleteClicked(item.id)}>
            <Text style={styles.removeText}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <CircleImageView url={item.photo} />
          <View style={styles.hSpacer} />
          <View>
            <VerticalTextView label="Nama Lengkap" value={item.fullName} />
            <View style={styles.spacer} />
            <VerticalTextView label="Umur" value={item.age.toString()} />
          </View>
        </View>
      </CardView>
    );
  }, []);

  return (
    <>
      <View>
        {items?.length > 0 && (
          <FlatList
            data={items}
            keyExtractor={(item: ContactModel) => item.id.toString()}
            renderItem={({item}) => getContent(item)}
          />
        )}
      </View>
      <View style={styles.fabContainer}>
        <TouchableOpacity
          style={styles.fab}
          onPress={() => onNavigateToCreatePage()}>
          <Text style={styles.fabText}>+</Text>
        </TouchableOpacity>
      </View>

      <ConfirmationDialog
        label={'Are you sure want to delete this item?'}
        isVisible={isDeleteDialogVisible}
        onCancel={() => setIsDeleteDialogVisible(false)}
        onConfirm={onConfirmDelete}
      />
    </>
  );
};

export default ContactScreen;
