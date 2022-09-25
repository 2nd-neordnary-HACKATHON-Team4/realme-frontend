import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  Alert,
  Platform,
  SafeAreaView,
  TextInput,
  Image,
  Pressable,
  Modal,
} from 'react-native';

function NickNameModal({visible, setVisible, actions}) {
  const [isClose, setIsClose] = useState(true);

  const onClose = () => {
    if (isClose) {
      setVisible(false);
    }
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}>
      <Pressable style={styles.background} onPress={onClose}>
        <View style={styles.whiteBox}>
          <Text style={styles.text}>사용가능한 닉네임입니다.</Text>
          <View style={styles.line} />
          <Text style={styles.close}>확인</Text>
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteBox: {
    width: 270,
    height: 110,
    backgroundColor: '#FBFBFB',
    borderRadius: 14,
    alignItems: 'center',
  },
  text: {
    paddingHorizontal: 16,
    paddingVertical: 19,
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
  line: {
    height: 0.5,
    width: '100%',
    backgroundColor: 'rgba(60, 60, 67, 0.36)',
  },
  close: {
    fontSize: 20,
    fontWeight: '700',
    color: '#8B95A1',
    paddingTop: 9,
    paddingBottom: 6,
  },
});

export default NickNameModal;
